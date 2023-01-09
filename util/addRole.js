const { default: inquirer } = require("inquirer");
const { db } = require("../connection");
import { init } from './initialize';
import { addRole } from './index';


const addRole = () => {
    db.query(`SELECT * FROM department`, (err, result) => {
        inquirer
          .prompt([
            {
              type: "input",
              name: "role",
              message: "What is the name of the role?",
            },
            {
              type: "input",
              name: "salary",
              message: "What is the salary of the role?",
            },
            {
              type: "list",
              name: "department",
              message: "Which department does the role belong to?",
              choices: () => {
                var array = [];
                for (var i = 0; i < result.length; i++) {
                  array.push(result[i].name);
                }
                return array;
              },
            },
          ])
          .then((answers) => {
            for (var i = 0; i < result.length; i++) {
              if (result[i].name === answers.department) {
                var department = result[i];
              }
            }

            db.query(
              `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`,
              [answers.role, answers.salary, department.id],
              (err, result) => {
                if (err) throw err;
                console.log(`Role added to database.`);
                init();
              }
            );
          });
      });
};