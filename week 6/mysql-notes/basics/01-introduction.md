````markdown
# MySQL Introduction

MySQL is one of the most popular **Relational Database Management Systems (RDBMS)** used to store, organize, manage, and retrieve structured data.

MySQL uses **SQL (Structured Query Language)** to communicate with databases.

---

## Table of Contents

- [What is MySQL?](#what-is-mysql)
- [What is a Database?](#what-is-a-database)
- [What is DBMS?](#what-is-dbms)
- [What is RDBMS?](#what-is-rdbms)
- [What is SQL?](#what-is-sql)
- [MySQL vs SQL](#mysql-vs-sql)
- [Why Learn MySQL?](#why-learn-mysql)
- [Where is MySQL Used?](#where-is-mysql-used)
- [Basic Database Structure](#basic-database-structure)
- [Important MySQL Terms](#important-mysql-terms)
- [SQL Command Categories](#sql-command-categories)
- [Basic MySQL Workflow](#basic-mysql-workflow)
- [Basic MySQL Example](#basic-mysql-example)
- [Advantages of MySQL](#advantages-of-mysql)
- [MySQL and Programming Languages](#mysql-and-programming-languages)
- [MySQL Versions](#mysql-versions)
- [Important Commands](#important-commands)
- [Key Points](#key-points)

---

# What is MySQL?

**MySQL** is an open-source relational database management system.

It is used to:

- Store data
- Retrieve data
- Insert data
- Update data
- Delete data
- Organize data
- Create relationships between data
- Manage large amounts of structured information

MySQL stores data mainly in **tables**.

Example:

```text
Students
+----+--------+-----+---------+
| ID | Name   | Age | Course  |
+----+--------+-----+---------+
| 1  | Rahul  | 21  | BCA     |
| 2  | Anu    | 22  | BSc CS  |
| 3  | Vimal  | 21  | BBA     |
+----+--------+-----+---------+
````

---

# What is a Database?

A **database** is an organized collection of data.

For example, a college application may have a database containing:

```text
College Database
│
├── Students
├── Teachers
├── Courses
├── Departments
├── Fees
└── Exams
```

An e-commerce application may contain:

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

A database allows applications to efficiently store and retrieve information.

---

# What is DBMS?

**DBMS** stands for:

> Database Management System

A DBMS is software used to create, store, manage, update, and retrieve data from databases.

Examples of database management systems include:

* MySQL
* PostgreSQL
* Oracle Database
* Microsoft SQL Server
* SQLite
* MongoDB

---

# What is RDBMS?

**RDBMS** stands for:

> Relational Database Management System

An RDBMS stores data in **tables** and allows relationships to be created between those tables.

For example:

### Customers

```text
+-------------+--------+
| customer_id | name   |
+-------------+--------+
| 1           | Rahul  |
| 2           | Anu    |
+-------------+--------+
```

### Orders

```text
+----------+-------------+--------+
| order_id | customer_id | amount |
+----------+-------------+--------+
| 101      | 1           | 500    |
| 102      | 2           | 800    |
| 103      | 1           | 300    |
+----------+-------------+--------+
```

The `customer_id` connects the two tables.

MySQL is an **RDBMS**.

---

# What is SQL?

**SQL** stands for:

> Structured Query Language

SQL is a standard language used to communicate with relational databases.

SQL can be used to:

* Create databases
* Create tables
* Insert data
* Retrieve data
* Update data
* Delete data
* Filter data
* Sort data
* Group data
* Join tables
* Manage database permissions
* Manage transactions

Example:

```sql
SELECT *
FROM students;
```

This query retrieves all records from the `students` table.

---

# MySQL vs SQL

MySQL and SQL are not the same thing.

## SQL

SQL is a **language**.

It is used to communicate with relational databases.

## MySQL

MySQL is **database management software** that uses SQL.

Simple comparison:

```text
SQL   → Language
MySQL → Database Management System
```

Another example:

```text
English → Language
MySQL   → Software that understands SQL
```

---

# Why Learn MySQL?

MySQL is useful because it is:

* Popular
* Open-source
* Easy to learn
* Reliable
* Fast
* Scalable
* Widely supported
* Well documented
* Commonly used in web development

MySQL is especially useful for backend development.

---

# Where is MySQL Used?

MySQL is used in many types of applications.

## Web Applications

Examples:

* Websites
* Web portals
* E-commerce platforms
* Learning management systems
* Content management systems

## Business Applications

Examples:

* ERP systems
* CRM systems
* Billing systems
* Inventory systems
* Employee management systems

## Financial Applications

Examples:

* Banking systems
* Payment systems
* Transaction systems
* Accounting applications

## Education Applications

Examples:

* Student management systems
* College management systems
* Online examination systems
* Course management systems

---

# Basic Database Structure

A typical relational database can be understood as:

```text
Database
   |
   +-- Table
        |
        +-- Columns
        |
        +-- Rows
```

For example:

```text
Company Database
│
├── Employees
│   ├── id
│   ├── name
│   ├── email
│   └── salary
│
├── Departments
│   ├── department_id
│   └── department_name
│
└── Projects
    ├── project_id
    ├── project_name
    └── department_id
```

---

# Important MySQL Terms

## Database

A collection of related data and database objects.

Example:

```text
company
```

---

## Table

A structure used to store data in rows and columns.

Example:

```text
employees
```

---

## Row

A row represents one complete record.

Example:

```text
1 | Rahul | rahul@gmail.com | 35000
```

---

## Column

A column represents a specific attribute or field.

Example:

```text
id
name
email
salary
```

---

## Record

A record is another term commonly used for a row.

Example:

```text
1 | Rahul | rahul@gmail.com | 35000
```

---

## Primary Key

A primary key uniquely identifies each record in a table.

Example:

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);
```

Here, `id` is the primary key.

---

## Foreign Key

A foreign key is used to create a relationship between tables.

Example:

```sql
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(100)
);
```

Another table:

```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
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

## Constraint

A constraint is a rule applied to a column or table.

Common constraints include:

```text
PRIMARY KEY
FOREIGN KEY
NOT NULL
UNIQUE
DEFAULT
CHECK
```

---

## NULL

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

`NULL` is different from:

```text
0
```

and:

```text
''
```

---

# SQL Command Categories

SQL commands are commonly grouped into several categories.

---

## DDL

**DDL** stands for:

> Data Definition Language

DDL commands are used to define and modify database structures.

Common DDL commands:

```sql
CREATE
ALTER
DROP
TRUNCATE
```

Example:

```sql
CREATE TABLE students (
    id INT,
    name VARCHAR(100)
);
```

---

# DML

**DML** stands for:

> Data Manipulation Language

DML commands are used to modify data stored in tables.

Common DML commands:

```sql
INSERT
UPDATE
DELETE
```

Example:

```sql
INSERT INTO students (id, name)
VALUES (1, 'Rahul');
```

---

# DQL

**DQL** stands for:

> Data Query Language

DQL is used to retrieve data.

The main command is:

```sql
SELECT
```

Example:

```sql
SELECT *
FROM students;
```

---

# DCL

**DCL** stands for:

> Data Control Language

DCL is used to manage database access and permissions.

Common commands:

```sql
GRANT
REVOKE
```

---

# TCL

**TCL** stands for:

> Transaction Control Language

TCL commands are used to manage transactions.

Common commands:

```sql
COMMIT
ROLLBACK
SAVEPOINT
```

---

# SQL Command Summary

| Category | Meaning                      | Common Commands               |
| -------- | ---------------------------- | ----------------------------- |
| DDL      | Data Definition Language     | CREATE, ALTER, DROP, TRUNCATE |
| DML      | Data Manipulation Language   | INSERT, UPDATE, DELETE        |
| DQL      | Data Query Language          | SELECT                        |
| DCL      | Data Control Language        | GRANT, REVOKE                 |
| TCL      | Transaction Control Language | COMMIT, ROLLBACK, SAVEPOINT   |

---

# Basic MySQL Workflow

A typical MySQL workflow looks like this:

```text
Create Database
       ↓
Select Database
       ↓
Create Tables
       ↓
Define Columns
       ↓
Add Constraints
       ↓
Insert Data
       ↓
Retrieve Data
       ↓
Update Data
       ↓
Delete Data
```

---

# Basic MySQL Example

Let's create a simple student database.

## Step 1: Create Database

```sql
CREATE DATABASE college;
```

---

## Step 2: Select Database

```sql
USE college;
```

---

## Step 3: Create Table

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    course VARCHAR(100)
);
```

---

## Step 4: Insert Data

```sql
INSERT INTO students (id, name, age, course)
VALUES
(1, 'Rahul', 21, 'BCA'),
(2, 'Anu', 22, 'BSc Computer Science'),
(3, 'Vimal', 21, 'BBA');
```

---

## Step 5: Retrieve Data

```sql
SELECT *
FROM students;
```

Result:

```text
+----+-------+-----+----------------------+
| id | name  | age | course               |
+----+-------+-----+----------------------+
| 1  | Rahul | 21  | BCA                  |
| 2  | Anu   | 22  | BSc Computer Science |
| 3  | Vimal | 21  | BBA                  |
+----+-------+-----+----------------------+
```

---

## Step 6: Update Data

```sql
UPDATE students
SET age = 22
WHERE id = 1;
```

---

## Step 7: Delete Data

```sql
DELETE FROM students
WHERE id = 3;
```

---

# Basic MySQL Commands

## Show All Databases

```sql
SHOW DATABASES;
```

---

## Create Database

```sql
CREATE DATABASE company;
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

You can also use:

```sql
DESC employees;
```

---

## Create Table

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    salary DECIMAL(10,2)
);
```

---

## Insert Data

```sql
INSERT INTO employees (id, name, salary)
VALUES (1, 'Rahul', 35000);
```

---

## Read Data

```sql
SELECT *
FROM employees;
```

---

## Update Data

```sql
UPDATE employees
SET salary = 40000
WHERE id = 1;
```

---

## Delete Data

```sql
DELETE FROM employees
WHERE id = 1;
```

---

# MySQL and Programming Languages

MySQL can be used with many programming languages.

```text
MySQL
  |
  +-- Java
  |
  +-- Python
  |
  +-- JavaScript
  |
  +-- Node.js
  |
  +-- PHP
  |
  +-- C#
  |
  +-- C++
  |
  +-- Ruby
```

For example:

```text
Frontend
   ↓
HTML / CSS / JavaScript
   ↓
Backend
   ↓
Node.js / Java / Python / PHP
   ↓
MySQL
```

---

# MySQL in Web Development

A common web application architecture is:

```text
User
  ↓
Frontend
  ↓
Backend / API
  ↓
MySQL
  ↓
Database
```

Example:

A user logs into a website.

```text
User enters username/password
             ↓
          Frontend
             ↓
          Backend
             ↓
       SQL Query
             ↓
           MySQL
             ↓
       User Table
             ↓
        Result
             ↓
          Backend
             ↓
         Frontend
             ↓
           User
```

---

# MySQL and Backend Development

MySQL is commonly used as the database layer of backend applications.

Example stack:

```text
Frontend:
HTML + CSS + JavaScript

Backend:
Node.js + Express

Database:
MySQL
```

Another example:

```text
Frontend:
React

Backend:
Java Spring Boot

Database:
MySQL
```

Another example:

```text
Frontend:
HTML + CSS + JavaScript

Backend:
Python + Django

Database:
MySQL
```

---

# Advantages of MySQL

## 1. Open Source

MySQL Community Edition is available as open-source software.

---

## 2. Easy to Learn

SQL syntax is relatively straightforward for beginners.

---

## 3. Fast

MySQL is designed for efficient database operations and is widely used for applications that require good query performance.

---

## 4. Reliable

MySQL provides features for data integrity, transactions, and recovery.

---

## 5. Scalable

MySQL can be used for small applications as well as large production systems.

---

## 6. Cross-Platform

MySQL can run on multiple operating systems.

Examples:

```text
Windows
Linux
macOS
```

---

## 7. Large Community

MySQL has a large developer and user community.

---

## 8. Widely Supported

MySQL works with many programming languages, frameworks, tools, and hosting platforms.

---

# MySQL Editions

MySQL is available in different editions and distributions.

The most commonly encountered edition for learning and many application projects is:

```text
MySQL Community Edition
```

Commercial MySQL offerings also exist for organizations that need additional enterprise features and support.

---

# MySQL Client Tools

MySQL can be used through command-line tools and graphical interfaces.

Common tools include:

* MySQL Command Line Client
* MySQL Workbench
* MySQL Shell

You can also connect to MySQL through programming languages and database management tools.

---

# MySQL Server vs MySQL Client

## MySQL Server

The MySQL Server:

* Stores databases
* Stores tables
* Processes SQL queries
* Manages connections
* Handles transactions
* Manages data

## MySQL Client

A client is a program used to connect to the MySQL Server and execute SQL commands.

Example:

```text
MySQL Workbench
        ↓
MySQL Client Connection
        ↓
MySQL Server
        ↓
Database
```

---

# SQL Query Example

Suppose we have:

```text
employees
+----+--------+--------+
| id | name   | salary |
+----+--------+--------+
| 1  | Rahul  | 35000  |
| 2  | Anu    | 42000  |
| 3  | Vimal  | 50000  |
+----+--------+--------+
```

To retrieve employees earning more than 40000:

```sql
SELECT name, salary
FROM employees
WHERE salary > 40000;
```

Result:

```text
+-------+--------+
| name  | salary |
+-------+--------+
| Anu   | 42000  |
| Vimal | 50000  |
+-------+--------+
```

---

# MySQL Terminology

| Term        | Meaning                                                |
| ----------- | ------------------------------------------------------ |
| Database    | Collection of related data                             |
| Table       | Structure containing rows and columns                  |
| Row         | A single record                                        |
| Column      | A field or attribute                                   |
| Record      | Another term for a row                                 |
| Primary Key | Uniquely identifies a record                           |
| Foreign Key | Connects related tables                                |
| Constraint  | Rule applied to data                                   |
| Query       | Instruction sent to the database                       |
| SQL         | Language used to communicate with relational databases |
| RDBMS       | Relational Database Management System                  |

---

# MySQL Basic Flow

```text
                 MySQL
                   |
        +----------+----------+
        |                     |
     Database              Database
        |                     |
      Tables                Tables
        |                     |
   +----+----+           +----+----+
   |         |           |         |
 Rows     Columns      Rows     Columns
```

---

# Example: Simple Company Database

```sql
CREATE DATABASE company;

USE company;

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    department VARCHAR(100),
    salary DECIMAL(10,2)
);

INSERT INTO employees
(name, email, department, salary)
VALUES
('Rahul', 'rahul@example.com', 'IT', 40000),
('Anu', 'anu@example.com', 'HR', 35000),
('Vimal', 'vimal@example.com', 'Finance', 45000);

SELECT *
FROM employees;
```

---

# Important SQL Rules

## 1. SQL Keywords

SQL keywords are generally written in uppercase for readability.

Example:

```sql
SELECT *
FROM employees;
```

SQL is generally case-insensitive for keywords, but consistent formatting is recommended.

---

## 2. Statements Usually End With a Semicolon

Example:

```sql
SELECT *
FROM employees;
```

The semicolon indicates the end of the SQL statement in many MySQL clients.

---

## 3. String Values Use Quotes

Example:

```sql
INSERT INTO students (name)
VALUES ('Rahul');
```

String values are normally written using single quotes.

---

## 4. Numbers Usually Do Not Need Quotes

Correct:

```sql
INSERT INTO students (age)
VALUES (21);
```

Avoid treating numeric values as strings unless there is a specific reason.

---

# MySQL and SQL Comments

Comments are useful for documenting SQL code.

## Single-Line Comment

```sql
-- This is a comment
SELECT *
FROM students;
```

MySQL also supports:

```sql
# This is a comment
SELECT *
FROM students;
```

## Multi-Line Comment

```sql
/*
This is a
multi-line comment
*/

SELECT *
FROM students;
```

---

# Basic SQL Example With Comments

```sql
-- Create database
CREATE DATABASE college;

-- Select database
USE college;

-- Create table
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT
);

-- Insert data
INSERT INTO students (id, name, age)
VALUES
(1, 'Rahul', 21),
(2, 'Anu', 22);

-- Retrieve data
SELECT *
FROM students;
```

---

# Key Points

* MySQL is a relational database management system.
* MySQL stores structured data primarily in tables.
* SQL is the language used to communicate with relational databases.
* A database can contain multiple tables.
* A table contains rows and columns.
* A row represents a record.
* A column represents an attribute or field.
* A primary key uniquely identifies a record.
* A foreign key creates relationships between tables.
* Constraints help maintain data integrity.
* `SELECT` retrieves data.
* `INSERT` adds data.
* `UPDATE` modifies data.
* `DELETE` removes data.
* MySQL can be used with many programming languages.
* MySQL is widely used in web, business, and backend applications.

---

# Quick Revision

```text
MySQL
  ↓
RDBMS
  ↓
Database
  ↓
Tables
  ↓
Rows + Columns
  ↓
Records
  ↓
SQL Queries
```

SQL command categories:

```text
DDL → CREATE, ALTER, DROP, TRUNCATE

DML → INSERT, UPDATE, DELETE

DQL → SELECT

DCL → GRANT, REVOKE

TCL → COMMIT, ROLLBACK, SAVEPOINT
```

Basic database workflow:

```text
CREATE DATABASE
       ↓
USE DATABASE
       ↓
CREATE TABLE
       ↓
INSERT DATA
       ↓
SELECT DATA
       ↓
UPDATE DATA
       ↓
DELETE DATA
```

---

# Practice

Try running the following commands:

```sql
CREATE DATABASE practice_db;

USE practice_db;

CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    course VARCHAR(100)
);

INSERT INTO students
VALUES
(1, 'Rahul', 21, 'BCA'),
(2, 'Anu', 22, 'BSc CS'),
(3, 'Vimal', 21, 'BBA');

SELECT *
FROM students;
```

Then try:

```sql
UPDATE students
SET age = 23
WHERE id = 2;
```

Then:

```sql
SELECT *
FROM students;
```

Finally:

```sql
DELETE FROM students
WHERE id = 3;
```

And:

```sql
SELECT *
FROM students;
```

