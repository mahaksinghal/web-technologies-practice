const express = require("express");
const fs = require("fs");

// connect to mongodb
const mongoose = require("mongoose");

const app = express();
const PORT = 8000;

// connection
mongoose.connect("mongodb://127.0.0.1:27017/practice")
    .then(() => console.log("mongodb connected"))
    .catch((err) => console.log("mongodb error", err));

// Scehma
const userSchema = new mongoose.Schema({
    first_name: {
        type: String, required: true
    },
    last_name: {
        type: String
    },
    email: {
        type: String, required: true, unique: true
    },
    job_title: {
        type: String
    },
    gender: {
        type: String
    }
}, { timestamps: true }
);

const User = mongoose.model("user", userSchema);

app.use(express.urlencoded({ extended: false }));

app.use((req, resp, next) => {
    fs.appendFile("log.txt", `\n${Date.now()}: ${req.method}`,
        (err, data) => {
            console.log("hello from middleware 1");
            next();
        });

})

// Routes
app.get('/users', async (req, resp) => {
    const allDbUsers = await User.find({});
    const html = `<ul>
    ${allDbUsers.map(user => `<li>${user.first_name} - ${user.email}</li>`).join("")}
    </ul>`;
    resp.send(html);
})

// REST API
app.get('/api/users', async (req, resp) => {
    const allDbUsers = await User.find({});
    console.log(req.url);
    return resp.json(allDbUsers);
})

app.route("/api/users/:id")
    .get(async (req, resp) => {
        const user = await User.findById(req.params.id);
        return resp.json(user);
    })
    .patch(async (req, resp) => {
        // edit user with id
        await User.findByIdAndUpdate(req.params.id, {last_name: "Sharma"})
        return resp.json({status: "success"});
    })

    .delete(async (req, resp) => {
        // delete user with id
        await User.findByIdAndDelete(req.params.id)
        return resp.json({ status: "User deleted" })
    })


app.post("/api/users", async (req, resp) => {
    const body = req.body;
    console.log(body);
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title) {
        return resp.status(400).json({ mssg: "All fields are required...." });
    }
    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    });

    console.log(result);

    return resp.status(201).json({ mssg: "Success" });
})

app.listen(PORT, () => {
    console.log("server started on port " + PORT);
})