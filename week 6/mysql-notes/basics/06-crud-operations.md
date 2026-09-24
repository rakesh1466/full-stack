````markdown
# CRUD Operations

CRUD is one of the most important concepts in database management and application development.

CRUD stands for:

```text
C → Create
R → Read
U → Update
D → Delete
````

These four operations represent the basic actions performed on data stored in a database.

---

## Table of Contents

* [What is CRUD?](#what-is-crud)
* [CRUD and SQL Commands](#crud-and-sql-commands)
* [Create](#create)
* [INSERT Syntax](#insert-syntax)
* [Insert One Record](#insert-one-record)
* [Insert Multiple Records](#insert-multiple-records)
* [Insert Selected Columns](#insert-selected-columns)
* [Insert All Columns](#insert-all-columns)
* [Read](#read)
* [SELECT Syntax](#select-syntax)
* [Select All Columns](#select-all-columns)
* [Select Specific Columns](#select-specific-columns)
* [Read With Conditions](#read-with-conditions)
* [Update](#update)
* [UPDATE Syntax](#update-syntax)
* [Update One Record](#update-one-record)
* [Update Multiple Columns](#update-multiple-columns)
* [Update Multiple Records](#update-multiple-records)
* [Delete](#delete)
* [DELETE Syntax](#delete-syntax)
* [Delete One Record](#delete-one-record)
* [Delete Multiple Records](#delete-multiple-records)
* [Delete All Records](#delete-all-records)
* [DELETE vs TRUNCATE vs DROP](#delete-vs-truncate-vs-drop)
* [CRUD Complete Example](#crud-complete-example)
* [CRUD in Real Applications](#crud-in-real-applications)
* [CRUD and Backend APIs](#crud-and-backend-apis)
* [Important Safety Rules](#important-safety-rules)
* [Common Mistakes](#common-mistakes)
* [Best Practices](#best-practices)
* [Key Points](#key-points)
* [Quick Revision](#quick-revision)
* [Practice](#practice)

---

# What is CRUD?

CRUD represents the four fundamental operations that applications perform on database data.

```text
Create → Add new data
Read   → Retrieve existing data
Update → Modify existing data
Delete → Remove existing data
```

For example, consider a student management system.

```text
Student Management System
│
├── Create Student
├── View Student
├── Update Student
└── Delete Student
```

These operations correspond to CRUD.

---

# CRUD and SQL Commands

| CRUD Operation | SQL Command |
| -------------- | ----------- |
| Create         | INSERT      |
| Read           | SELECT      |
| Update         | UPDATE      |
| Delete         | DELETE      |

Example:

```text
CREATE
  ↓
INSERT

READ
  ↓
SELECT

UPDATE
  ↓
UPDATE

DELETE
  ↓
DELETE
```

---

# CREATE

The **Create** operation is used to add new records to a table.

The SQL command used for creating records is:

```sql
INSERT
```

Important:

```text
CREATE TABLE
```

creates a table structure.

```text
INSERT
```

creates/adds records inside an existing table.

---

# INSERT Syntax

Basic syntax:

```sql
INSERT INTO table_name
(column1, column2, column3)
VALUES
(value1, value2, value3);
```

Example:

```sql
INSERT INTO students
(id, name, age)
VALUES
(1, 'Rahul', 21);
```

---

# Insert One Record

Suppose we have:

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    course VARCHAR(100)
);
```

Insert one student:

```sql
INSERT INTO students
(id, name, age, course)
VALUES
(1, 'Rahul', 21, 'BCA');
```

Check the data:

```sql
SELECT *
FROM students;
```

Result:

```text
+----+-------+-----+--------+
| id | name  | age | course |
+----+-------+-----+--------+
| 1  | Rahul | 21  | BCA    |
+----+-------+-----+--------+
```

---

# Insert Multiple Records

You can insert multiple rows using a single `INSERT` statement.

```sql
INSERT INTO students
(id, name, age, course)
VALUES
(1, 'Rahul', 21, 'BCA'),
(2, 'Anu', 22, 'BSc CS'),
(3, 'Vimal', 21, 'BBA');
```

This is generally more efficient than issuing separate insert statements for each row.

---

# Insert Selected Columns

You do not always need to provide values for every column.

Example:

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150),
    country VARCHAR(50) DEFAULT 'India'
);
```

Insert:

```sql
INSERT INTO employees
(name, email)
VALUES
('Rahul', 'rahul@example.com');
```

The `country` column can use its default value:

```text
India
```

The `id` can be automatically generated because it is `AUTO_INCREMENT`.

---

# Insert All Columns

You can insert values for all columns without specifying the column names.

Example:

```sql
INSERT INTO students
VALUES
(1, 'Rahul', 21, 'BCA');
```

This works when the values are provided in exactly the table's column order.

However, specifying column names is generally safer and more maintainable.

Prefer:

```sql
INSERT INTO students
(id, name, age, course)
VALUES
(1, 'Rahul', 21, 'BCA');
```

---

# Insert Using AUTO_INCREMENT

Suppose:

```sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    age INT
);
```

You do not need to provide the ID.

```sql
INSERT INTO students
(name, age)
VALUES
('Rahul', 21);
```

Another record:

```sql
INSERT INTO students
(name, age)
VALUES
('Anu', 22);
```

Example result:

```text
+----+-------+-----+
| id | name  | age |
+----+-------+-----+
| 1  | Rahul | 21  |
| 2  | Anu   | 22  |
+----+-------+-----+
```

---

# Insert NULL

If a column allows `NULL`, you can explicitly insert `NULL`.

Example:

```sql
INSERT INTO students
(id, name, age)
VALUES
(4, 'Arun', NULL);
```

This means the age is unknown or not provided.

---

# Insert Default Value

You can use `DEFAULT` to request the column's default value.

Example:

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    country VARCHAR(50) DEFAULT 'India'
);
```

Insert:

```sql
INSERT INTO users
(name, country)
VALUES
('Rahul', DEFAULT);
```

The country becomes:

```text
India
```

---

# READ

The **Read** operation retrieves data from a database.

The SQL command used is:

```sql
SELECT
```

---

# SELECT Syntax

Basic syntax:

```sql
SELECT column1, column2
FROM table_name;
```

Example:

```sql
SELECT name, age
FROM students;
```

---

# Select All Columns

Use:

```sql
SELECT *
FROM students;
```

The `*` means all columns.

Example:

```text
+----+-------+-----+--------+
| id | name  | age | course |
+----+-------+-----+--------+
| 1  | Rahul | 21  | BCA    |
| 2  | Anu   | 22  | BSc CS |
| 3  | Vimal | 21  | BBA    |
+----+-------+-----+--------+
```

---

# Select Specific Columns

Instead of selecting everything:

```sql
SELECT name, age
FROM students;
```

Result:

```text
+-------+-----+
| name  | age |
+-------+-----+
| Rahul | 21  |
| Anu   | 22  |
| Vimal | 21  |
+-------+-----+
```

Selecting only the required columns is often preferable in application queries.

---

# Select One Column

```sql
SELECT name
FROM students;
```

---

# Select Multiple Columns

```sql
SELECT name, age, course
FROM students;
```

---

# Read With Conditions

You can use `WHERE` to retrieve specific records.

Example:

```sql
SELECT *
FROM students
WHERE age = 21;
```

Result:

```text
+----+-------+-----+--------+
| id | name  | age | course |
+----+-------+-----+--------+
| 1  | Rahul | 21  | BCA    |
| 3  | Vimal | 21  | BBA    |
+----+-------+-----+--------+
```

---

# Read a Specific Record

```sql
SELECT *
FROM students
WHERE id = 2;
```

---

# Read Records Greater Than a Value

```sql
SELECT *
FROM students
WHERE age > 21;
```

---

# Read Records Less Than a Value

```sql
SELECT *
FROM students
WHERE age < 22;
```

---

# Read Records Between Values

```sql
SELECT *
FROM students
WHERE age BETWEEN 20 AND 22;
```

---

# Read Using Multiple Conditions

```sql
SELECT *
FROM students
WHERE age >= 21
AND course = 'BCA';
```

---

# Read Using LIKE

```sql
SELECT *
FROM students
WHERE name LIKE 'R%';
```

This finds names beginning with `R`.

Example:

```text
Rahul
Ravi
Riya
```

---

# Read Distinct Values

Use `DISTINCT` to remove duplicate values from the result.

```sql
SELECT DISTINCT course
FROM students;
```

---

# UPDATE

The **Update** operation modifies existing records.

The SQL command is:

```sql
UPDATE
```

---

# UPDATE Syntax

```sql
UPDATE table_name
SET column1 = value1,
    column2 = value2
WHERE condition;
```

Example:

```sql
UPDATE students
SET age = 22
WHERE id = 1;
```

---

# Update One Record

Suppose:

```text
+----+-------+-----+
| id | name  | age |
+----+-------+-----+
| 1  | Rahul | 21  |
+----+-------+-----+
```

Run:

```sql
UPDATE students
SET age = 22
WHERE id = 1;
```

Now:

```text
+----+-------+-----+
| id | name  | age |
+----+-------+-----+
| 1  | Rahul | 22  |
+----+-------+-----+
```

---

# Update Multiple Columns

You can update more than one column.

```sql
UPDATE students
SET
    name = 'Rahul Kumar',
    age = 23
WHERE id = 1;
```

---

# Update Multiple Records

You can update multiple rows when the `WHERE` condition matches multiple records.

Example:

```sql
UPDATE students
SET course = 'Computer Science'
WHERE age = 21;
```

Every student whose age is 21 will be updated.

---

# Update Without WHERE

This query:

```sql
UPDATE students
SET age = 25;
```

updates every row in the table.

Example:

```text
Before:

Rahul → 21
Anu   → 22
Vimal → 21

After:

Rahul → 25
Anu   → 25
Vimal → 25
```

This can be dangerous if it is not intentional.

---

# Update Using Expressions

You can calculate new values.

Example:

```sql
UPDATE products
SET price = price + 500
WHERE product_id = 1;
```

Another example:

```sql
UPDATE employees
SET salary = salary * 1.10
WHERE department_id = 1;
```

This increases salary by 10%.

---

# DELETE

The **Delete** operation removes records from a table.

The SQL command is:

```sql
DELETE
```

---

# DELETE Syntax

```sql
DELETE FROM table_name
WHERE condition;
```

Example:

```sql
DELETE FROM students
WHERE id = 3;
```

---

# Delete One Record

```sql
DELETE FROM students
WHERE id = 3;
```

This removes the record whose ID is `3`.

---

# Delete Multiple Records

You can delete multiple rows if the condition matches multiple records.

Example:

```sql
DELETE FROM students
WHERE age < 18;
```

Every matching record will be deleted.

---

# Delete Using Multiple Conditions

```sql
DELETE FROM students
WHERE age = 21
AND course = 'BCA';
```

---

# Delete All Records

You can delete all rows:

```sql
DELETE FROM students;
```

This removes all records but leaves the table structure.

The table still exists.

---

# DELETE vs TRUNCATE vs DROP

These commands have different purposes.

---

## DELETE

Removes rows.

```sql
DELETE FROM students;
```

Characteristics:

* Removes rows
* Table remains
* Can use `WHERE`
* Can delete selected rows
* Can delete all rows
* It is a DML statement

Example:

```sql
DELETE FROM students
WHERE id = 5;
```

---

## TRUNCATE

Removes all rows from a table.

```sql
TRUNCATE TABLE students;
```

Characteristics:

* Removes all rows
* Table structure remains
* Cannot use `WHERE`
* Generally faster for removing all rows
* It is treated as DDL in MySQL

---

## DROP

Removes the entire table.

```sql
DROP TABLE students;
```

Characteristics:

* Removes all rows
* Removes table structure
* Removes the table itself

---

# Comparison

| Command  | Removes Rows | Keeps Table | WHERE Allowed |
| -------- | -----------: | ----------: | ------------: |
| DELETE   |          Yes |         Yes |           Yes |
| TRUNCATE |     Yes, all |         Yes |            No |
| DROP     |          Yes |          No |            No |

---

# CRUD Complete Example

Let's create a complete student management example.

---

## Step 1: Create Database

```sql
CREATE DATABASE IF NOT EXISTS crud_demo;
```

---

## Step 2: Select Database

```sql
USE crud_demo;
```

---

## Step 3: Create Table

```sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    age INT,
    course VARCHAR(100)
);
```

---

# CREATE

Insert students:

```sql
INSERT INTO students
(name, email, age, course)
VALUES
('Rahul', 'rahul@example.com', 21, 'BCA'),
('Anu', 'anu@example.com', 22, 'BSc CS'),
('Vimal', 'vimal@example.com', 21, 'BBA');
```

---

# READ

Read all students:

```sql
SELECT *
FROM students;
```

---

# READ Specific Columns

```sql
SELECT name, course
FROM students;
```

---

# READ With Condition

```sql
SELECT *
FROM students
WHERE age = 21;
```

---

# UPDATE

Update Rahul's course:

```sql
UPDATE students
SET course = 'Computer Applications'
WHERE id = 1;
```

Check:

```sql
SELECT *
FROM students
WHERE id = 1;
```

---

# UPDATE Multiple Columns

```sql
UPDATE students
SET
    name = 'Rahul Kumar',
    age = 22
WHERE id = 1;
```

---

# DELETE

Delete Vimal:

```sql
DELETE FROM students
WHERE id = 3;
```

Check:

```sql
SELECT *
FROM students;
```

---

# CRUD Flow

```text
                DATABASE
                    |
          +---------+---------+
          |         |         |
          ↓         ↓         ↓
       CREATE      READ     UPDATE
          |         |         |
       INSERT     SELECT    UPDATE
          |
          ↓
       DELETE
          |
        DELETE
```

Simplified:

```text
Create → INSERT
Read   → SELECT
Update → UPDATE
Delete → DELETE
```

---

# CRUD in Real Applications

CRUD operations are used in almost every database-driven application.

---

## Student Management System

```text
Create → Add Student
Read   → View Student
Update → Edit Student
Delete → Remove Student
```

---

## E-Commerce System

```text
Create → Add Product
Read   → View Product
Update → Edit Product
Delete → Remove Product
```

---

## Employee Management System

```text
Create → Add Employee
Read   → View Employee
Update → Edit Employee
Delete → Remove Employee
```

---

## Banking System

```text
Create → Create Account
Read   → View Account
Update → Update Customer Information
Delete → Close Account
```

---

# CRUD and Backend APIs

CRUD operations commonly map to HTTP methods in REST APIs.

| CRUD   | HTTP Method | Typical Purpose   |
| ------ | ----------- | ----------------- |
| Create | POST        | Create resource   |
| Read   | GET         | Retrieve resource |
| Update | PUT / PATCH | Modify resource   |
| Delete | DELETE      | Remove resource   |

Example:

```text
Frontend
   ↓
HTTP Request
   ↓
Backend API
   ↓
SQL Query
   ↓
MySQL
```

---

# Example REST API

Suppose we have a student API.

Create student:

```http
POST /students
```

Read students:

```http
GET /students
```

Read one student:

```http
GET /students/1
```

Update student:

```http
PUT /students/1
```

Delete student:

```http
DELETE /students/1
```

The backend may execute SQL such as:

```sql
INSERT INTO students (...);
```

```sql
SELECT *
FROM students;
```

```sql
UPDATE students
SET ...
WHERE id = 1;
```

```sql
DELETE FROM students
WHERE id = 1;
```

---

# CRUD in a Node.js Application

A typical Node.js backend may look like:

```text
Frontend
    ↓
Node.js + Express
    ↓
MySQL
    ↓
Database
```

Example flow for creating a student:

```text
User fills form
      ↓
Frontend sends POST request
      ↓
Express receives request
      ↓
Backend validates data
      ↓
SQL INSERT query
      ↓
MySQL
      ↓
Student stored
      ↓
Response sent to frontend
```

---

# Important Safety Rules

CRUD operations can modify or delete real data.

Always be careful with:

```sql
UPDATE
```

and:

```sql
DELETE
```

---

# Check Before UPDATE

Before:

```sql
UPDATE students
SET age = 25
WHERE id = 10;
```

check:

```sql
SELECT *
FROM students
WHERE id = 10;
```

Then perform the update.

---

# Check Before DELETE

Before:

```sql
DELETE FROM students
WHERE id = 10;
```

check:

```sql
SELECT *
FROM students
WHERE id = 10;
```

Confirm that the correct record is selected.

---

# Dangerous UPDATE

Avoid accidentally running:

```sql
UPDATE students
SET age = 25;
```

unless you intentionally want to update every record.

---

# Dangerous DELETE

Avoid accidentally running:

```sql
DELETE FROM students;
```

unless you intentionally want to remove every row.

---

# Transactions for Safer Changes

For operations that need to be controlled as a transaction, MySQL can use:

```sql
START TRANSACTION;
```

Then:

```sql
UPDATE students
SET age = 25
WHERE id = 10;
```

If everything is correct:

```sql
COMMIT;
```

If you need to undo the transaction:

```sql
ROLLBACK;
```

Transactions are covered in more detail in the advanced section.

---

# Common Mistakes

## Mistake 1: Forgetting WHERE

Dangerous:

```sql
UPDATE students
SET age = 25;
```

Better when updating one record:

```sql
UPDATE students
SET age = 25
WHERE id = 1;
```

---

## Mistake 2: Deleting Without Checking

Dangerous:

```sql
DELETE FROM students
WHERE name = 'Rahul';
```

There could be multiple students named Rahul.

First check:

```sql
SELECT *
FROM students
WHERE name = 'Rahul';
```

Then delete using a reliable identifier when possible:

```sql
DELETE FROM students
WHERE id = 1;
```

---

## Mistake 3: Updating the Wrong Table

Always verify the current database:

```sql
SELECT DATABASE();
```

And inspect the table:

```sql
SELECT *
FROM students;
```

---

## Mistake 4: Using SELECT *

For learning and debugging:

```sql
SELECT *
FROM students;
```

is convenient.

In production queries, selecting only the required columns can reduce unnecessary data transfer.

Example:

```sql
SELECT id, name, course
FROM students;
```

---

# Best Practices

## 1. Specify Column Names With INSERT

Prefer:

```sql
INSERT INTO students
(name, age, course)
VALUES
('Rahul', 21, 'BCA');
```

instead of relying on table column order:

```sql
INSERT INTO students
VALUES
(1, 'Rahul', 21, 'BCA');
```

---

## 2. Use WHERE With Targeted UPDATE

Example:

```sql
UPDATE students
SET course = 'BCA'
WHERE id = 10;
```

---

## 3. Use WHERE With Targeted DELETE

Example:

```sql
DELETE FROM students
WHERE id = 10;
```

---

## 4. Verify Before Modifying

Use:

```sql
SELECT *
FROM students
WHERE id = 10;
```

before changing important data.

---

## 5. Use Transactions for Critical Operations

For operations that must be atomic:

```sql
START TRANSACTION;

-- SQL operations

COMMIT;
```

or:

```sql
ROLLBACK;
```

---

## 6. Use Primary Keys

Primary keys make it easier to identify the correct record.

Example:

```sql
UPDATE students
SET age = 22
WHERE id = 1;
```

---

## 7. Validate Data in Applications

When using MySQL with a backend application:

```text
User Input
    ↓
Validation
    ↓
SQL Query
    ↓
Database
```

Never blindly trust user input.

---

# CRUD Example: Employee Management

Create database:

```sql
CREATE DATABASE IF NOT EXISTS employee_management;

USE employee_management;
```

Create table:

```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    department VARCHAR(100),
    salary DECIMAL(10,2),
    is_active BOOLEAN DEFAULT TRUE
);
```

---

## CREATE

```sql
INSERT INTO employees
(employee_name, email, department, salary)
VALUES
('Rahul', 'rahul@example.com', 'IT', 45000),
('Anu', 'anu@example.com', 'HR', 40000),
('Vimal', 'vimal@example.com', 'Finance', 50000);
```

---

## READ

Read all employees:

```sql
SELECT *
FROM employees;
```

Read selected columns:

```sql
SELECT employee_id, employee_name, salary
FROM employees;
```

Read IT employees:

```sql
SELECT *
FROM employees
WHERE department = 'IT';
```

Read employees with salary above 40000:

```sql
SELECT *
FROM employees
WHERE salary > 40000;
```

---

## UPDATE

Update Rahul's salary:

```sql
UPDATE employees
SET salary = 50000
WHERE employee_id = 1;
```

Update department and salary:

```sql
UPDATE employees
SET
    department = 'Management',
    salary = 60000
WHERE employee_id = 1;
```

---

## DELETE

Delete an employee:

```sql
DELETE FROM employees
WHERE employee_id = 3;
```

---

# Complete CRUD Script

```sql
CREATE DATABASE IF NOT EXISTS crud_practice;

USE crud_practice;

CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    department VARCHAR(100),
    salary DECIMAL(10,2),
    is_active BOOLEAN DEFAULT TRUE
);

-- CREATE
INSERT INTO employees
(employee_name, email, department, salary)
VALUES
('Rahul', 'rahul@example.com', 'IT', 45000),
('Anu', 'anu@example.com', 'HR', 40000),
('Vimal', 'vimal@example.com', 'Finance', 50000);

-- READ
SELECT *
FROM employees;

-- READ with condition
SELECT *
FROM employees
WHERE department = 'IT';

-- UPDATE
UPDATE employees
SET salary = 50000
WHERE employee_id = 1;

-- READ after UPDATE
SELECT *
FROM employees
WHERE employee_id = 1;

-- DELETE
DELETE FROM employees
WHERE employee_id = 3;

-- READ after DELETE
SELECT *
FROM employees;
```

---

# Key Points

* CRUD stands for Create, Read, Update, and Delete.
* `INSERT` is used to add records.
* `SELECT` is used to retrieve records.
* `UPDATE` is used to modify records.
* `DELETE` is used to remove records.
* `WHERE` is important when targeting specific records.
* `DELETE FROM table` removes all rows if no `WHERE` clause is used.
* `UPDATE table SET ...` without `WHERE` can modify every row.
* `TRUNCATE` removes all rows while keeping the table.
* `DROP TABLE` removes the entire table.
* CRUD operations are the foundation of database-driven applications.
* CRUD maps naturally to REST API operations.
* Transactions can provide safer control for critical changes.

---

# Quick Revision

```text
CRUD
│
├── CREATE
│   └── INSERT
│
├── READ
│   └── SELECT
│
├── UPDATE
│   └── UPDATE
│
└── DELETE
    └── DELETE
```

SQL:

```sql
-- CREATE
INSERT INTO students
(name, age)
VALUES
('Rahul', 21);

-- READ
SELECT *
FROM students;

-- UPDATE
UPDATE students
SET age = 22
WHERE id = 1;

-- DELETE
DELETE FROM students
WHERE id = 1;
```

REST API mapping:

```text
CREATE → POST
READ   → GET
UPDATE → PUT / PATCH
DELETE → DELETE
```

---

# Practice

Create the database:

```sql
CREATE DATABASE IF NOT EXISTS crud_practice;

USE crud_practice;
```

Create the table:

```sql
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(150) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    quantity INT UNSIGNED DEFAULT 0,
    category VARCHAR(100),
    is_available BOOLEAN DEFAULT TRUE
);
```

## Practice 1: Create

Insert five products:

```sql
INSERT INTO products
(product_name, price, quantity, category)
VALUES
('Laptop', 59999.99, 10, 'Electronics'),
('Mouse', 799.99, 50, 'Electronics'),
('Keyboard', 1499.99, 30, 'Electronics'),
('Notebook', 80.00, 100, 'Stationery'),
('Pen', 20.00, 200, 'Stationery');
```

---

## Practice 2: Read

Display all products:

```sql
SELECT *
FROM products;
```

Display only product name and price:

```sql
SELECT product_name, price
FROM products;
```

Display products costing more than 1000:

```sql
SELECT *
FROM products
WHERE price > 1000;
```

Display Electronics products:

```sql
SELECT *
FROM products
WHERE category = 'Electronics';
```

---

## Practice 3: Update

Increase the laptop price:

```sql
UPDATE products
SET price = 61999.99
WHERE product_id = 1;
```

Reduce mouse quantity:

```sql
UPDATE products
SET quantity = quantity - 5
WHERE product_id = 2;
```

---

## Practice 4: Delete

Delete the pen:

```sql
DELETE FROM products
WHERE product_id = 5;
```

Check the result:

```sql
SELECT *
FROM products;
```

---

## Practice 5: Safe Update

First:

```sql
SELECT *
FROM products
WHERE product_id = 3;
```

Then:

```sql
UPDATE products
SET price = 1299.99
WHERE product_id = 3;
```

Verify:

```sql
SELECT *
FROM products
WHERE product_id = 3;
```

---

# Basics Section Complete

You have completed:

```text
01 → Introduction
02 → Database Basics
03 → Create Database
04 → Create Table
05 → Data Types
06 → CRUD Operations
```