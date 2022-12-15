const inquirer = require('inquirer');
const db = require('./connection');
const mysql = require('mysql');

// optional banner time permitting
const runIndex = require('./util/index');
runIndex();
