
--  SELECT role.title, 
--         role.salary,
--         department.name AS department
--         FROM role 
--         JOIN department ON role.department_id = department.id;

--  SELECT employee.first_name, 
--         employee.last_name,
--         role.title      
--         FROM employee 
--         JOIN role ON employee.role_id = role.id;
        
-- -- self join
--  SELECT e.first_name 'First', 
--         m.first_name 'Manager'
--         FROM employee e, employee m
--         WHERE e.manager_id = m.id;

-- -- can self join this way, or way right above. this way allows you to view employees with NULL manager
--  SELECT e.id 'Emp_ID',
--         e.first_name 'First', 
--         m.first_name 'Manager'
--         FROM employee e
--         LEFT JOIN employee m ON e.manager_id = m.id;

-- SELECT concat(first_name, ' ', last_name) AS Employee_Name
-- FROM employee; 


-- -- to get manager first and last name together
--  SELECT e.id 'Emp_ID',
--         concat(e.first_name, ' ', e.last_name) 'Employee_Name',
--         concat(m.first_name, ' ', m.last_name) 'Manager'
--         FROM employee e
--         LEFT JOIN employee m ON e.manager_id = m.id;

-- add in role
SELECT employee.id AS ID,        
       concat(employee.first_name, ' ', employee.last_name) AS Employee_Name, 
       role.title AS Title,
       role.salary AS Salary,
       department.name AS Department,
       concat(manager.first_name, ' ', manager.last_name) AS Manager 
       FROM employee 
       LEFT JOIN employee manager on employee.manager_id = manager.id
       LEFT JOIN role ON employee.role_id = role.id
       LEFT JOIN department on role.department_id = department.id;


        -- LEFT JOIN department on role.department_id = department.id
        -- LEFT JOIN role ON employee.role_id = role.id;

        --   role.title,
        -- department.name,