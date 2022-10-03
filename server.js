const inquirer = require('inquirer');
const mysql = require('mysql2');

//Connect to database
// const db = mysql.createConnection(
//     {
//       host: 'localhost',
//       user: 'root',
//       password: 'QuiNN78!',
//       database: 'employeemanager_db'
//     },
//     console.log(`Connected to the employeemanager_db database.`)
//   );

const menu = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name:'menu',
            message: 'What would you like to do?',
            choices: [
                "View all Departments",
                "View All Roles",
                "View All Employees",
                "Add a Department",
                "Add a role",
                "Add Employee",
                "Update Employee Role"                            
            ]

        },
        {

        },
        {

        },
    ])
}

menu ()