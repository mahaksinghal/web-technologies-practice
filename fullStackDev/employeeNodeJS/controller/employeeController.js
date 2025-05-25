const Employee = require("../models/employeeModel");

const getAllEmployees = async (req, resp) => {
    try {
        console.log("in get all employees");
        const employees = await Employee.find({});
        resp.status(200).json({status: true, employeeDetails: employees});
    }catch(error){
        resp.status(400).json({status: false, message: "cannot fetch employee details"});
    }
}

const insertNewEmployee = async(req, resp) =>{
    console.log(req.body);
    const emp = new Employee(req.body);
    const result = await emp.save();
    resp.status(200).json({status: true, message: "Employee added successfully", employeeDetails: result});
}

module.exports = {getAllEmployees, insertNewEmployee}