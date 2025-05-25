const Employee = require("../models/employeeModel");

const getAllEmployees = async (req, resp) => {
    try {
        console.log("in get all employees");
        const employees = await Employee.find({});
        resp.status(200).json({ status: true, employeeDetails: employees });
    } catch (error) {
        resp.status(400).json({ status: false, message: "cannot fetch employee details" });
    }
}

const insertNewEmployee = async (req, resp) => {
    console.log(req.body);
    const emp = new Employee(req.body);
    const result = await emp.save();
    resp.status(200).json({ status: true, message: "Employee added successfully", employeeDetails: result });
}

const getEmployeeById = async (req, resp) => {
    try {
        const empId = req.params.id;
        console.log(empId);
        const emp = await Employee.findOne({ id: empId });
        console.log(emp);
        resp.status(200).json({ status: true, employeeDetails: emp });
    }
    catch (error) {
        resp.status(400).json({ status: false, message: "Cannot find Employee" });
    }
}

const updateEmployee = async (req, resp) => {
    try {
        const empId = req.body.id;
        console.log("in update employee", empId);
        console.log("updated employee", req.body);
        const updateEmp = await Employee.findOneAndUpdate({ id: empId }, req.body);
        resp.status(200).json({ status: true, message: "Employee details updated successfully", employeeDetails: updateEmp });
    } catch (error) {
        resp.status(400).json({ status: false, message: "Cannot update Employee details" });
    }
}

const deleteEmployee = async (req, resp) => {
    const empId = req.params.id;
    const deleteEmp = await Employee.findOneAndDelete({ id: empId });
    resp.status(200).json({ status: true, message: "Employee deleted successfully", employeeDetails: deleteEmp });
}

module.exports = { getAllEmployees, insertNewEmployee, getEmployeeById, updateEmployee, deleteEmployee };