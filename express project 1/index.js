const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/users', (req, resp) => {
    const html = `<ul>
    ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
    resp.send(html);
})

// REST API
app.get('/api/users', (req, resp) => {
    console.log(req.url);
    return resp.json(users);
})

app.route("/api/users/:id")
    .get((req, resp) => {
        const id = Number(req.params.id);
        const user = users.find(user => user.id == id);
        return resp.json(user);
    })
    .patch((req, resp) => {
        // edit user with id
        const id = Number(req.params.id);
        const userIndex = users.findIndex(user => user.id == id);
        if (userIndex === -1) {
            return resp.status(404).json({ status: "User not found" });
        }
        const body = req.body;
        console.log(body);
        users[userIndex] = { ...users[userIndex], ...req.body };
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err, data) => {
            if (err) {
                return resp.status(500).json({ status: "Error" });
            }
            return resp.json({ status: "User updated", user: users[userIndex] });
        })
    })

    .delete((req, resp) => {
        // delete user with id
        const id = Number(req.params.id);
        const userIndex = users.findIndex(user => user.id == id);
        if (userIndex === -1) {
            return resp.status(404).json({ status: "User not found" });
        }
        users.splice(userIndex, 1);
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err, data) => {
            if (err) {
                return resp.status(500).json({ status: "Error" });
            }
            return resp.json({ status: "User deleted" })
        })
    })


app.post("/api/users", (req, resp) => {
    const body = req.body;
    console.log(body);
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return resp.json({ status: "success", id: users.length })
    });
})

// app.patch("/api/users/:id", (req, resp) => {
//     // TODO update user with id
// })

// app.delete("/api/users/:id", (req, resp) => {
//     // TODO delete user with id
// })

app.listen(PORT, () => {
    console.log("server started on port " + PORT);
})