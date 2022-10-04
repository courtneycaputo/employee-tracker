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

console.log(`
,------------------,
|                  | 
|     EMPLOYEE     |
|     MANAGER      |
|                  | 
'------------------'
`) 


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