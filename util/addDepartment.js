const { default: inquirer } = require("inquirer");
const { db } = require("../connection");
const { init } = ('./initialize');
// const { addDepartment } = ('./index');


const addDepartment = () => {
    inquirer
          .prompt([
            {
              type: "input",
              name: "department",
              message: "What is the name of the new department?",
            },
          ])
          .then((answers) => {
            db.query(
              `INSERT INTO Departments (name) VALUES (?)`,
              [answers.department],
              (err, result) => {
                if (err) throw err;
                console.log(`Department added to database.`);
                init();
              }
            );
          });
};