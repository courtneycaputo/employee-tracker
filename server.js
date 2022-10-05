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
//                 "View all departments", // done
//                 "View all roles", // done
//                 "View all employees", // done
//                 "Add a department", // done
//                 "Add a role", // done
//                 "Add an employee", // done
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

// // WORKING
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
//         message: 'What is the employees role id?',
//     },
//     {
//         type: 'input',
//         name: 'employeemanager',
//         message: 'Who is the employees manager id',
//     },
// ]).then(answer => {
//         const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
//         const params = [answer.employeefirst, answer.employeelast, answer.employeerole, answer.employeemanager];
//         db.query(sql, params, (err, results) => {
//             if (err) throw err;
//             console.log(`${answer.employeefirst} ${answer.employeelast} was added as an employee.`);
//             db.query(`
//             SELECT employee.id AS ID,        
//             concat(employee.first_name, ' ', employee.last_name) AS Employee_Name, 
//             role.title AS Title,
//             role.salary AS Salary,
//             department.name AS Department,
//             concat(manager.first_name, ' ', manager.last_name) AS Manager 
//             FROM employee 
//             LEFT JOIN employee manager on employee.manager_id = manager.id
//             LEFT JOIN role ON employee.role_id = role.id
//             LEFT JOIN department on role.department_id = department.id;
//                     `, 
//                     function(err, results) {console.table('\nEmployees', results);
//             });
//         })
//     })
// }
// addEmployee()



// WORKING
// for adding new role
// DOES SAMPLE VIDEO HAVE SELECTING DEPARTMENT FROM A LIST? OR YOU JUST TYPE IT IN?
// const addRole = () => {
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
//         message: 'What department is this role in? Enter department id.',
//     }
// ]).then(answer => {
//     const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
//     const params = [answer.roletitle, answer.rolesalary, answer.roledepartment];
//     db.query(sql, params, (err, results) => {
//         if (err) throw err;
//         console.log(`${answer.roletitle} was added to Roles.`);
//         db.query('SELECT * FROM role', function (err, results) {
//             console.table('\nRoles', results);
//         });
//     })
// })
// }
// addRole()



// WORKING
// // for adding new department 
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
//         console.log(`${answer.newDept} was added to Departments.`);
//         db.query('SELECT * FROM department', function (err, results) {
//             console.table('\nDepartments', results);
//         });
//     })
// })
// }

// addDept()


// for updating employee role
const updateRole = () => {
inquirer.prompt ([
    {
        type: 'input',
        name:'empId',
        message: 'What is ID of the employee you want to update?',
        
    },
    {
        type: 'input',
        name: 'roleId',
        message: 'What is the ID of the role you want to assign to this employee?',
    }
]).then(answer => {
    const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
    const params = [answer.roleId, answer.empId];
    db.query(sql, params, (err, results) => {
        if (err) throw err;
        console.log(`Employee's role was updated.`);
        db.query(`SELECT employee.id AS ID,        
                    concat(employee.first_name, ' ', employee.last_name) AS Employee_Name, 
                    role.title AS Title,
                    role.salary AS Salary,
                    department.name AS Department,
                    concat(manager.first_name, ' ', manager.last_name) AS Manager 
                    FROM employee 
                    LEFT JOIN employee manager on employee.manager_id = manager.id
                    LEFT JOIN role ON employee.role_id = role.id
                    LEFT JOIN department on role.department_id = department.id;`, function (err, results) {
            console.table('\nEmployees', results);
        })
    })
})
}

updateRole()

// const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
//     const params = [answer.roletitle, answer.rolesalary, answer.roledepartment];
// db.query(sql, params, (err, results) => {
//             if (err) throw err;
//             console.log(`${answer.roletitle} was added to Roles.`);
//             db.query('SELECT * FROM role', function (err, results) {
//                 console.table('\nRoles', results);
//             });