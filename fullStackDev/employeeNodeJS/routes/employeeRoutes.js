const express = require("express");
const router = express.Router();
const { getAllEmployees,
    insertNewEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee } = require("../controller/employeeController");

router.use(express.json());

// get all employees
router.get("/employees", getAllEmployees);

// insert new employee
router.post("/employees/:id", insertNewEmployee)

// get employee by id
router.get("/employees/:id", getEmployeeById);

// update employee by id
router.put("/employees/:id", updateEmployee);

// delete employee by id
router.delete("/employees/:id", deleteEmployee);

module.exports = router;