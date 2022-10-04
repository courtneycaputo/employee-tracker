INSERT INTO department (name)
VALUES ("Finance"),
       ("Sales"),
       ("Legal"),
       ("IT"),
       ("Operations");

-- Finance 1
-- Sales 2
-- Legal 3
-- IT 4
-- Operations 5

INSERT INTO role (title, salary, department_id)
VALUES  ("CFO", 250000, 1),
        ("Accountant", 75000, 1),
        ("Contract Admin", 75000, 3),
        ("Sales Rep", 100000, 2),
        ("Help Desk", 95000, 4),
        ("Director of IT", 150000, 4),
        ("Warehouse Manager", 100000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("David", "Baskes", 1, 0),
        ("Courtney", "Caputo", 2, 1),
        ("Dane", "Smith", 7, 1);

