const { db } = require("../connection");
import {initialize} from './initialize'

const allDepartments = () => {
    console.log("Viewing All Departments")
    db.query(`select * from Departments`,(err,result) => {
        if (err) throw err;
        console.table(result);
        initialize();
    } )
};
