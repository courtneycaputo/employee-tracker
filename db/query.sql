
 SELECT role.title, 
        role.salary,
        department.name AS department
        FROM role 
        JOIN department ON role.department_id = department.id;

 SELECT employee.first_name, 
        employee.last_name,
        role.title      
        FROM employee 
        JOIN role ON employee.role_id = role.id;
        
-- self join
 SELECT e.first_name 'First', 
        m.first_name 'Manager'
        FROM employee e, employee m
        WHERE e.manager_id = m.id;

-- can self join this way, or way right above
 SELECT e.id 'Emp_ID',
        e.first_name 'First', 
        m.first_name 'Manager'
        FROM employee e
        LEFT JOIN employee m ON e.manager_id = m.id;

SELECT concat(first_name, ' ', last_name) AS Employee_Name
FROM employee; 