const { db } = require("../connection");
import { init } from './initialize';
import { allRoles } from './index';


const allRoles = () => {
    console.log("Viewing All Roles")
    db.query(`select * from Roles`, (err, result) => {
        if (err) throw err;
        console.table(result);
        init();
    })
};