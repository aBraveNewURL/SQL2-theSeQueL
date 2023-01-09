const { db } = require("../connection");
import { init } from './initialize';
import { allEmployees } from './index';


const allEmployees = () => {
    console.log("Viewing All Employees")
    db.query(`select * from Employees`, (err, result) => {
        if (err) throw err;
        console.table(result);
        init();
    })
};





