const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

// Connect to employeesmanager database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'QuiNN78!',
      database: 'employeemanager_db'
    },
    console.log(`Connected to the employeemanager_db database.`)
  );

console.log(`
,--------------------------,
|        WELCOME TO        | 
|     EMPLOYEE MANAGER     |
|                          | 
'--------------------------'
`) 


const menu = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name:'menu',
            message: 'What would you like to do?',
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update employee role",
                "View employees by manager",
                "View employees by department"
            ]

        }
    ]).then((userChoice) => {
        if(userChoice.menu === "View all departments"){
            db.query('SELECT * FROM department', function (err, results) {
                console.table('\nDepartments', results);
            });
        } else if(userChoice.menu === "View all roles") {
            db.query('SELECT * FROM role', function (err, results) {
                console.table('\nRoles',results);
            });
        } 
            
        menu() 
    }) 
}

menu ()

// // for adding new employee
// inquirer.prompt ([
//     {
//         type: 'input',
//         name:'employeefirst',
//         message: 'What is the first name of the employee?',
        
//     },
//     {
//         type: 'input',
//         name: 'employeelast',
//         message: 'What is the last name of the employee?',
//     },
//     {
//         type: 'input',
//         name: 'employeerole',
//         message: 'What is the employees role?',
//     },
//     {
//         type: 'input',
//         name: 'employeemanager',
//         message: 'Who is the employees manager',
//     },
// ])

// // for adding new role
// inquirer.prompt ([
//     {
//         type: 'input',
//         name:'roletitle',
//         message: 'What is the role title?',
        
//     },
//     {
//         type: 'input',
//         name: 'rolesalary',
//         message: 'What is the salary of this role?',
//     },
//     {
//         type: 'input',
//         name: 'roledepartment',
//         message: 'What department is this role in?',
//     },
// ])

// // for adding new department
// inquirer.prompt ([
//     {
//         type: 'input',
//         name:'department',
//         message: 'What is the name of this department?',
        
//     },
// ])

// db.query('SELECT * FROM department', function (err, results) {
//     console.table('Departments', results);
// });


// db.query('SELECT * FROM role', function (err, results) {
//     console.table('Roles',results);
// });

// db.query('SELECT * FROM employee', function (err, results) {
//     console.table('Employees',results);
// });