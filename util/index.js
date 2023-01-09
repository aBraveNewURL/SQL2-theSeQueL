const addDepartment = require('./addDepartment');
const addEmployee = require('./addEmployee');
const addRole = require('./addRole');
const allDepartments = require('./allDepartments');
const allEmployees = require('./allEmployees');
const allRoles = require('./allRoles');
const updateEmployee = require('./updateEmployee');
const initialize = require('./initialize')

const init = () => {
    let {request} = initialize();
        switch (request) {
            case "View all departments":
                console.log("Viewing all departments...");
                allDepartments();
                break;
            case "View all roles":
                console.log("Viewing all roles...");
                allRoles();
                break;
            case "View all employees":
                console.log("Viewing all employees...");
                allEmployees();
                break;
            case "Add a department":
                console.log("Adding a department...");
                addDepartment();
                break;
            case "Add a role":
                console.log("Adding a role...");
                addRole();
                break;
            case "Add an employee":
                console.log("Adding an employee...");
                addEmployee();
                break;
            case "Update an employee role":
                console.log("Updating employee role");
                updateEmployee();
                break;
            default:
                console.log("None selected")
                return ("Okay, thank you!")
        }     
    };


module.exports = {init};