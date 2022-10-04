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
|                          |
|        WELCOME TO        | 
|     EMPLOYEE MANAGER     |
|                          | 
'--------------------------'
`) 


// const menu = () => {
//     inquirer.prompt ([
//         {
//             type: 'list',
//             name:'menu',
//             message: 'What would you like to do?',
//             choices: [
//                 "View all departments",
//                 "View all roles",
//                 "View all employees",
//                 "Add a department",
//                 "Add a role",
//                 "Add an employee",
//                 "Update employee role",
//                 "View employees by manager",
//                 "View employees by department"
//             ]

//         }
//     ]).then((userChoice) => {
//         if(userChoice.menu === "View all departments"){
//             db.query('SELECT * FROM department', function (err, results) {
//                 console.table('\nDepartments', results);
//             });
//         } else if(userChoice.menu === "View all roles"){
//             db.query('SELECT * FROM role', function (err, results) {
//                 console.table('\nRoles',results);
//             });
//         } else if(userChoice === "View all employees"){
//             db.query('SELECT * FROM employee', function (err, results) {
//                 console.table('\nEmployees',results);
//             });
//         } else if(userChoice.menu === "Add a department") {
//             addDept()
//         } else if(userChoice.menu === "Add a role"){
//             addRole()
//         } else if(userChoice.menu === "Add an employee") {
//             addEmployee()
//         } else {
//         menu()}
            
    
//     });
// }

// menu ()

// // // for adding new employee
// const addEmployee = () => {
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
// ]);
// }

// for adding new role - WORKS
// DOES SAMPLE VIDEO HAVE SELECTING DEPARTMENT FROM A LIST? OR YOU JUST TYPE IT IN?
const addRole = () => {
inquirer.prompt ([
    {
        type: 'input',
        name:'roletitle',
        message: 'What is the role title?',
        
    },
    {
        type: 'input',
        name: 'rolesalary',
        message: 'What is the salary of this role?',
    },
    {
        type: 'input',
        name: 'roledepartment',
        message: 'What department is this role in?',
    }
]).then(answer => {
    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
    const params = [answer.roletitle, answer.rolesalary, answer.roledepartment];
    db.query(sql, params, (err, results) => {
        if (err) throw err;
        console.log(`Added ${answer.roletitle} to Roles.`);
        db.query('SELECT * FROM role', function (err, results) {
            console.table('\nRoles', results);
        });
    })
})
}
addRole()

//// THIS WORKS
//// for adding new department
// const addDept = () => {
// inquirer.prompt ([
//     {
//         type: 'input',
//         name:'newDept',
//         message: 'What is the name of this department?',
        
//     }
// ]).then(answer => {
//     const sql =`INSERT INTO department (name) VALUES (?)`;
//     db.query(sql, answer.newDept, (err, results) => {
//         if (err) throw err;
//         console.log(`Added to Departments.`);
//         db.query('SELECT * FROM department', function (err, results) {
//             console.table('\nDepartments', results);
//         });
//     })
// })
// }

// addDept()


// // for adding new department - ANOTHER WAY OF DOING IT WITHOUT USING CONST = SQL
// const addDept = () => {
// inquirer.prompt ([
//     {
//         type: 'input',
//         name:'newDept',
//         message: 'What is the name of this department?',
        
//     }
// ]).then(answer => {
//     db.query(`INSERT INTO department (name) VALUES (?)`, answer.newDept, (err, results) => {
//         if (err) throw err;
//         console.log(`Added to Departments.`);
//         db.query('SELECT * FROM department', function (err, results) {
//             console.table('\nDepartments', results);
//         });
//     })
// })
// }

// addDept()



