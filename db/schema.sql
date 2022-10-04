DROP DATABASE IF EXISTS employeemanager_db;
CREATE DATABASE employeemanager_db;

USE employeemanager_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    salary DECIMAL,
    department_id INT,
    FOREIGN key (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT REFERENCES employee(id),
    FOREIGN key (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL
);