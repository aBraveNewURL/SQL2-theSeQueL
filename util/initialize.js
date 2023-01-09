const inquirer = require('inquirer');
const initialize = () => {
    const initPrompts = [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'None'
    ]
    return inquirer.prompt([
        {   
            name: 'mainMenu',
            type: 'list',
            message: 'Greetings! Which action would you like to take?',
            choices: initPrompts
        }
    ])
};

module.exports = {initialize}