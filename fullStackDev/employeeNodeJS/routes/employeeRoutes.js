const express = require("express");
const router = express.Router();
const {getAllEmployees, insertNewEmployee} = require("../controller/employeeController");

router.use(express.json());

// get all employees
router.get("/employees", getAllEmployees);

// insert new employee
router.post("/employees/:id", insertNewEmployee)

module.exports = router;