 SELECT employee.first_name, 
        employee.last_name,
        role.title 
        FROM employee 
        JOIN role ON employee.role_id = role.id;


 SELECT role.title, 
        role.salary,
        department.name AS department
        FROM role 
        JOIN department ON role.department_id = department.id;