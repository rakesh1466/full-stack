````markdown
# Database Basics

This section explains the fundamental concepts required to understand relational databases and MySQL.

---

## Table of Contents

- [What is Data?](#what-is-data)
- [What is a Database?](#what-is-a-database)
- [What is a DBMS?](#what-is-a-dbms)
- [What is an RDBMS?](#what-is-an-rdbms)
- [Database vs DBMS vs RDBMS](#database-vs-dbms-vs-rdbms)
- [What is a Table?](#what-is-a-table)
- [Rows](#rows)
- [Columns](#columns)
- [Records](#records)
- [Fields](#fields)
- [Database Schema](#database-schema)
- [Database Objects](#database-objects)
- [Relationships](#relationships)
- [Primary Key](#primary-key)
- [Foreign Key](#foreign-key)
- [NULL](#null)
- [Constraints](#constraints)
- [CRUD Operations](#crud-operations)
- [Relational Database Example](#relational-database-example)
- [Database Commands](#database-commands)
- [Database Design Example](#database-design-example)
- [Key Points](#key-points)
- [Quick Revision](#quick-revision)

---

# What is Data?

**Data** is a collection of facts, values, or information.

Examples:

```text
Vimal
21
50000
Coimbatore
vimal@example.com
````

Data can represent:

* Names
* Ages
* Addresses
* Phone numbers
* Prices
* Salaries
* Dates
* Product information
* Customer information

---

# What is a Database?

A **database** is an organized collection of related data.

Instead of storing information randomly, a database stores data in a structured way so that it can be easily:

* Stored
* Retrieved
* Updated
* Deleted
* Managed
* Searched
* Analyzed

For example, a college application may have a database:

```text
College Database
│
├── Students
├── Teachers
├── Courses
├── Departments
├── Subjects
└── Exams
```

An e-commerce application may have:

```text
E-Commerce Database
│
├── Customers
├── Products
├── Orders
├── Payments
├── Addresses
└── Reviews
```

---

# What is a DBMS?

**DBMS** stands for:

> Database Management System

A DBMS is software used to create, manage, store, modify, and retrieve data from databases.

Examples:

* MySQL
* PostgreSQL
* Oracle Database
* Microsoft SQL Server
* SQLite

A DBMS provides tools and commands to work with databases.

---

# What is an RDBMS?

**RDBMS** stands for:

> Relational Database Management System

An RDBMS stores data in **tables** and allows relationships to be created between those tables.

MySQL is an RDBMS.

Example:

```text
Database
│
├── Customers
│
├── Orders
│
└── Products
```

The tables can be connected using keys.

---

# Database vs DBMS vs RDBMS

These terms are related but different.

## Database

A database is the collection of data.

Example:

```text
company
```

## DBMS

A DBMS is software used to manage databases.

Example:

```text
MySQL
```

## RDBMS

An RDBMS is a type of DBMS that stores data in related tables.

Example:

```text
MySQL
PostgreSQL
Oracle Database
Microsoft SQL Server
```

Simple representation:

```text
Database
    ↑
Managed by
    ↑
DBMS / RDBMS
    ↑
Uses
    ↑
SQL
```

---

# What is a Table?

A **table** is a structure used to store data in rows and columns.

Example:

```text
students

+----+--------+-----+---------+
| id | name   | age | course  |
+----+--------+-----+---------+
| 1  | Rahul  | 21  | BCA     |
| 2  | Anu    | 22  | BSc CS  |
| 3  | Vimal  | 21  | BBA     |
+----+--------+-----+---------+
```

The table contains:

```text
Columns:
id
name
age
course

Rows:
1, Rahul, 21, BCA
2, Anu, 22, BSc CS
3, Vimal, 21, BBA
```

---

# Rows

A **row** represents one complete record in a table.

Example:

```text
1 | Rahul | 21 | BCA
```

This row represents one student.

Another row:

```text
2 | Anu | 22 | BSc CS
```

represents another student.

---

# Columns

A **column** represents a specific attribute or field.

Example:

```text
id
name
age
course
```

Each column has a specific purpose.

| Column | Meaning            |
| ------ | ------------------ |
| id     | Student identifier |
| name   | Student name       |
| age    | Student age        |
| course | Student course     |

---

# Records

A **record** is another common term for a row.

Example:

```text
1 | Rahul | 21 | BCA
```

This is one student record.

If a table contains 100 students, it contains 100 records.

---

# Fields

A field usually refers to a specific value or attribute associated with a record.

Example:

```text
1 | Rahul | 21 | BCA
```

Here:

```text
id     → 1
name   → Rahul
age    → 21
course → BCA
```

`Rahul` is the value stored in the `name` field for that record.

---

# Database Schema

A **database schema** describes the structure of a database.

It defines things such as:

* Tables
* Columns
* Data types
* Constraints
* Relationships
* Indexes
* Views
* Other database objects

Example:

```text
Company Database

employees
--------------------------------
id          INT
name        VARCHAR(100)
email       VARCHAR(150)
salary      DECIMAL(10,2)
```

The structure above is part of the database schema.

---

# Database Objects

A database can contain different types of objects.

Common MySQL database objects include:

* Tables
* Views
* Indexes
* Stored Procedures
* Functions
* Triggers

Example:

```text
Company Database
│
├── Tables
│   ├── employees
│   ├── departments
│   └── projects
│
├── Views
│
├── Indexes
│
├── Procedures
│
└── Triggers
```

---

# Relationships

One of the important features of relational databases is the ability to establish relationships between tables.

The main relationship types are:

1. One-to-One
2. One-to-Many
3. Many-to-Many

---

# One-to-One Relationship

In a one-to-one relationship, one record in one table is associated with one record in another table.

Example:

```text
Person → Passport
```

One person has one passport.

Example:

```text
people
+----+--------+
| id | name   |
+----+--------+
| 1  | Rahul  |
+----+--------+

passports
+-------------+---------+
| passport_id | person_id |
+-------------+---------+
| P1001       | 1       |
+-------------+---------+
```

---

# One-to-Many Relationship

In a one-to-many relationship, one record can be associated with multiple records.

Example:

```text
Customer → Orders
```

One customer can place multiple orders.

Example:

```text
customers

+-------------+--------+
| customer_id | name   |
+-------------+--------+
| 1           | Rahul  |
| 2           | Anu    |
+-------------+--------+
```

Orders:

```text
orders

+----------+-------------+--------+
| order_id | customer_id | amount |
+----------+-------------+--------+
| 101      | 1           | 500    |
| 102      | 1           | 800    |
| 103      | 2           | 300    |
+----------+-------------+--------+
```

Customer `1` has two orders.

```text
Rahul
  ├── Order 101
  └── Order 102
```

---

# Many-to-Many Relationship

In a many-to-many relationship, multiple records in one table can be related to multiple records in another table.

Example:

```text
Students ↔ Courses
```

One student can enroll in multiple courses.

One course can have multiple students.

A junction table is normally used.

Example:

```text
students
courses
student_courses
```

Relationship:

```text
students
    │
    │
    ▼
student_courses
    ▲
    │
    │
courses
```

---

# Primary Key

A **primary key** is a column or set of columns that uniquely identifies each record in a table.

Example:

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT
);
```

Here:

```text
id
```

is the primary key.

Example data:

```text
+----+--------+-----+
| id | name   | age |
+----+--------+-----+
| 1  | Rahul  | 21  |
| 2  | Anu    | 22  |
| 3  | Vimal  | 21  |
+----+--------+-----+
```

The `id` values must be unique.

---

# Characteristics of a Primary Key

A primary key:

* Uniquely identifies a record
* Cannot contain `NULL`
* Cannot contain duplicate values
* Can be made from one or more columns

Example:

```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    name VARCHAR(100)
);
```

---

# Composite Primary Key

A primary key can contain more than one column.

This is called a **composite primary key**.

Example:

```sql
CREATE TABLE student_courses (
    student_id INT,
    course_id INT,
    PRIMARY KEY (student_id, course_id)
);
```

Here the combination of:

```text
student_id + course_id
```

must be unique.

---

# Foreign Key

A **foreign key** is a column that references a key in another table.

It is used to establish relationships between tables.

Example:

```sql
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(100)
);
```

Create orders:

```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    amount DECIMAL(10,2),
    FOREIGN KEY (customer_id)
        REFERENCES customers(customer_id)
);
```

Here:

```text
customers.customer_id
          ↓
orders.customer_id
```

---

# Primary Key vs Foreign Key

| Primary Key                                  | Foreign Key                            |
| -------------------------------------------- | -------------------------------------- |
| Uniquely identifies a record                 | References a key in another table      |
| Cannot contain NULL                          | Can contain NULL unless restricted     |
| Cannot contain duplicate values              | Duplicate values can be allowed        |
| Identifies records in its own table          | Helps establish relationships          |
| Usually one primary key constraint per table | A table can have multiple foreign keys |

---

# NULL

`NULL` represents a missing, unknown, or unavailable value.

Example:

```text
+----+-------+--------------+
| id | name  | phone        |
+----+-------+--------------+
| 1  | Rahul | 9876543210   |
| 2  | Anu   | NULL         |
+----+-------+--------------+
```

The second student's phone number is unknown or not provided.

---

# NULL vs Zero vs Empty String

These are different values.

### NULL

```text
NULL
```

Means missing or unknown.

### Zero

```text
0
```

Is an actual numeric value.

### Empty String

```text
''
```

Is a string containing zero characters.

Example:

```text
NULL ≠ 0
NULL ≠ ''
```

---

# Checking NULL Values

Use:

```sql
SELECT *
FROM students
WHERE phone IS NULL;
```

Do not use:

```sql
WHERE phone = NULL;
```

For non-NULL values:

```sql
SELECT *
FROM students
WHERE phone IS NOT NULL;
```

---

# Constraints

Constraints are rules used to control the data stored in a table.

Common MySQL constraints include:

```text
PRIMARY KEY
FOREIGN KEY
NOT NULL
UNIQUE
DEFAULT
CHECK
```

---

# NOT NULL

`NOT NULL` prevents a column from storing `NULL`.

Example:

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
```

The `name` column must contain a value.

---

# UNIQUE

`UNIQUE` prevents duplicate values.

Example:

```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(150) UNIQUE
);
```

Two users cannot have the same email value under this constraint.

---

# DEFAULT

`DEFAULT` provides a value when no value is explicitly supplied.

Example:

```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    country VARCHAR(50) DEFAULT 'India'
);
```

If `country` is omitted, MySQL can use:

```text
India
```

as the default value.

---

# CHECK

`CHECK` can enforce a condition.

Example:

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT CHECK (age >= 18)
);
```

This prevents values that violate the specified condition.

---

# CRUD Operations

CRUD stands for:

```text
C → Create
R → Read
U → Update
D → Delete
```

---

## Create

Use `INSERT`.

```sql
INSERT INTO students (id, name, age)
VALUES (1, 'Rahul', 21);
```

---

## Read

Use `SELECT`.

```sql
SELECT *
FROM students;
```

---

## Update

Use `UPDATE`.

```sql
UPDATE students
SET age = 22
WHERE id = 1;
```

---

## Delete

Use `DELETE`.

```sql
DELETE FROM students
WHERE id = 1;
```

---

# Relational Database Example

Consider an e-commerce application.

We can divide the data into multiple tables instead of storing everything in one large table.

```text
E-Commerce Database
│
├── customers
│
├── products
│
├── orders
│
├── order_items
│
└── payments
```

---

## Customers Table

```text
+-------------+--------+----------------------+
| customer_id | name   | email                |
+-------------+--------+----------------------+
| 1           | Rahul  | rahul@example.com    |
| 2           | Anu    | anu@example.com      |
+-------------+--------+----------------------+
```

---

## Products Table

```text
+------------+-------------+-------+
| product_id | name        | price |
+------------+-------------+-------+
| 101        | Laptop      | 50000 |
| 102        | Mouse       | 800   |
| 103        | Keyboard    | 1500  |
+------------+-------------+-------+
```

---

## Orders Table

```text
+----------+-------------+------------+
| order_id | customer_id | order_date |
+----------+-------------+------------+
| 1001     | 1           | 2026-08-26 |
| 1002     | 2           | 2026-08-26 |
+----------+-------------+------------+
```

Here:

```text
customers.customer_id
        ↓
orders.customer_id
```

---

# Why Use Multiple Tables?

Separating data into related tables provides several benefits:

* Reduces duplicate data
* Improves data organization
* Makes relationships easier to manage
* Helps maintain data integrity
* Makes queries more flexible
* Supports normalization

---

# Database Normalization

**Normalization** is the process of organizing data to reduce unnecessary duplication and improve data integrity.

For example, instead of storing customer information repeatedly in every order:

```text
Order 101 | Rahul | rahul@example.com
Order 102 | Rahul | rahul@example.com
Order 103 | Rahul | rahul@example.com
```

we can separate customers and orders:

```text
customers
+-------------+--------+-------------------+
| customer_id | name   | email             |
+-------------+--------+-------------------+
| 1           | Rahul  | rahul@example.com |
+-------------+--------+-------------------+

orders
+----------+-------------+
| order_id | customer_id |
+----------+-------------+
| 101      | 1           |
| 102      | 1           |
| 103      | 1           |
+----------+-------------+
```

This reduces unnecessary duplication.

Normalization is covered in more detail in advanced database design topics.

---

# Database Commands

## Show Databases

```sql
SHOW DATABASES;
```

---

## Create Database

```sql
CREATE DATABASE company;
```

---

## Create Database If It Does Not Exist

```sql
CREATE DATABASE IF NOT EXISTS company;
```

---

## Select Database

```sql
USE company;
```

---

## Show Current Database

```sql
SELECT DATABASE();
```

---

## Show Tables

```sql
SHOW TABLES;
```

---

## Describe Table

```sql
DESCRIBE employees;
```

or:

```sql
DESC employees;
```

---

## Show Table Creation Statement

```sql
SHOW CREATE TABLE employees;
```

---

# Database Design Example

Let's create a simple company database.

## Create Database

```sql
CREATE DATABASE company;
```

## Select Database

```sql
USE company;
```

## Create Departments

```sql
CREATE TABLE departments (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(100) NOT NULL UNIQUE
);
```

## Create Employees

```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    salary DECIMAL(10,2),
    department_id INT,
    FOREIGN KEY (department_id)
        REFERENCES departments(department_id)
);
```

## Insert Departments

```sql
INSERT INTO departments (department_name)
VALUES
('IT'),
('HR'),
('Finance');
```

## Insert Employees

```sql
INSERT INTO employees
(name, email, salary, department_id)
VALUES
('Rahul', 'rahul@example.com', 40000, 1),
('Anu', 'anu@example.com', 35000, 2),
('Vimal', 'vimal@example.com', 45000, 3);
```

## View Departments

```sql
SELECT *
FROM departments;
```

## View Employees

```sql
SELECT *
FROM employees;
```

The relationship is:

```text
departments
     |
     | department_id
     |
     v
employees
```

---

# Database Structure Example

```text
company
│
├── departments
│   ├── department_id
│   └── department_name
│
└── employees
    ├── employee_id
    ├── name
    ├── email
    ├── salary
    └── department_id
```

---

# Table Structure vs Table Data

These are two different concepts.

## Table Structure

Defines:

* Column names
* Data types
* Constraints
* Keys

Example:

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT
);
```

## Table Data

The actual records stored in the table.

```text
1 | Rahul | 21
2 | Anu   | 22
3 | Vimal | 21
```

---

# Database Server Structure

A MySQL server can contain multiple databases.

```text
MySQL Server
│
├── company
│   ├── employees
│   ├── departments
│   └── projects
│
├── college
│   ├── students
│   ├── teachers
│   └── courses
│
└── ecommerce
    ├── customers
    ├── products
    └── orders
```

---

# Database Relationships Summary

```text
One-to-One
Person ───── Passport

One-to-Many
Customer ─────< Orders

Many-to-Many
Students >────< Courses
       via student_courses
```

---

# Important Differences

## DELETE vs TRUNCATE vs DROP

### DELETE

Removes rows from a table.

```sql
DELETE FROM students;
```

The table structure remains.

---

### TRUNCATE

Removes all rows from a table.

```sql
TRUNCATE TABLE students;
```

The table structure remains.

---

### DROP

Removes the entire table.

```sql
DROP TABLE students;
```

The table structure and data are removed.

---

# Primary Key vs Unique Key

| Primary Key                          | UNIQUE                                            |
| ------------------------------------ | ------------------------------------------------- |
| Uniquely identifies records          | Prevents duplicate values                         |
| Cannot contain NULL                  | NULL handling differs based on database semantics |
| One primary key constraint per table | Multiple UNIQUE constraints can exist             |
| Used as the main identifier          | Used to enforce uniqueness                        |

Example:

```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(150) UNIQUE
);
```

Here:

```text
id    → Primary Key
email → Unique Key
```

---

# Database Best Practices

## 1. Use Meaningful Names

Good:

```text
customers
employees
orders
products
```

Avoid unclear names such as:

```text
table1
data
test
abc
```

---

## 2. Use Primary Keys

Most entity tables should have a reliable primary key.

Example:

```sql
id INT PRIMARY KEY AUTO_INCREMENT
```

---

## 3. Choose Appropriate Data Types

For example:

```sql
age INT
name VARCHAR(100)
price DECIMAL(10,2)
birth_date DATE
```

---

## 4. Use Constraints

Use constraints to protect data integrity.

Examples:

```text
PRIMARY KEY
FOREIGN KEY
NOT NULL
UNIQUE
CHECK
DEFAULT
```

---

## 5. Avoid Unnecessary Duplicate Data

Separate related information into appropriate tables.

---

## 6. Use Foreign Keys for Relationships

Example:

```sql
FOREIGN KEY (customer_id)
REFERENCES customers(customer_id)
```

---

## 7. Be Careful With UPDATE and DELETE

Before running:

```sql
UPDATE
```

or:

```sql
DELETE
```

check the records using `SELECT`.

Example:

```sql
SELECT *
FROM employees
WHERE department_id = 2;
```

Then perform the intended operation.

---

# Key Points

* Data is a collection of facts or values.
* A database is an organized collection of data.
* DBMS stands for Database Management System.
* RDBMS stands for Relational Database Management System.
* MySQL is an RDBMS.
* SQL is used to communicate with relational databases.
* Tables contain rows and columns.
* A row represents a record.
* A column represents an attribute.
* A schema defines the structure of a database.
* Primary keys uniquely identify records.
* Foreign keys establish relationships between tables.
* Constraints help maintain data integrity.
* `NULL` represents a missing or unknown value.
* CRUD stands for Create, Read, Update, and Delete.
* Relationships can be one-to-one, one-to-many, or many-to-many.
* Normalization helps reduce unnecessary data duplication.

---

# Quick Revision

```text
Data
  ↓
Database
  ↓
Tables
  ↓
Rows + Columns
  ↓
Records
```

Relational database:

```text
Database
│
├── Table 1
│
├── Table 2
│
└── Table 3
      │
      └── Relationships
```

Keys:

```text
Primary Key
    ↓
Uniquely identifies a record

Foreign Key
    ↓
Connects related tables
```

Relationships:

```text
One-to-One
One-to-Many
Many-to-Many
```

Constraints:

```text
PRIMARY KEY
FOREIGN KEY
NOT NULL
UNIQUE
DEFAULT
CHECK
```

CRUD:

```text
CREATE → INSERT
READ   → SELECT
UPDATE → UPDATE
DELETE → DELETE
```

---

# Practice

Run the following complete example:

```sql
CREATE DATABASE practice_db;

USE practice_db;

CREATE TABLE departments (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    salary DECIMAL(10,2),
    department_id INT,
    FOREIGN KEY (department_id)
        REFERENCES departments(department_id)
);

INSERT INTO departments (department_name)
VALUES
('IT'),
('HR'),
('Finance');

INSERT INTO employees
(name, email, salary, department_id)
VALUES
('Rahul', 'rahul@example.com', 40000, 1),
('Anu', 'anu@example.com', 35000, 2),
('Vimal', 'vimal@example.com', 45000, 3);

SELECT *
FROM departments;

SELECT *
FROM employees;
```

Check the table structures:

```sql
DESC departments;

DESC employees;
```

Check the relationships:

```sql
SHOW CREATE TABLE employees;
```