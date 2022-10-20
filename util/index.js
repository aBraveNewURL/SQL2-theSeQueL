const inquirer = require('inquirer');
const fs = require('fs');
const addDepartment = require('./addDepartment');
const addEmployee = require('./addEmployee');
const addRole = require('./addRole');
const allDepartments = require('./allDepartments');
const allEmployees = require('./allEmployees');
const allRoles = require('./allRoles');
const updateEmployee = require('./updateEmployee');

const mainMenu = () => {
    return inquirer.prompt([{
        name: 'mainMenu',
        type: 'list',
        message: 'Greetings! Which action would you like to take?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'None'
        ]
    }])
        .then(userContinue => {

            switch (userContinue.main) {
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
        })
};

mainMenu();
