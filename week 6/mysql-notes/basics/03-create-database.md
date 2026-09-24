````markdown
# Create Database

A database is an organized collection of related data.

In MySQL, the `CREATE DATABASE` statement is used to create a new database.

---

## Table of Contents

- [Basic Syntax](#basic-syntax)
- [Create a Database](#create-a-database)
- [Show Databases](#show-databases)
- [Create Database If Not Exists](#create-database-if-not-exists)
- [Select a Database](#select-a-database)
- [Check Current Database](#check-current-database)
- [Create Tables Inside a Database](#create-tables-inside-a-database)
- [Drop a Database](#drop-a-database)
- [Drop Database If Exists](#drop-database-if-exists)
- [Database Naming](#database-naming)
- [Complete Example](#complete-example)
- [Useful Commands](#useful-commands)
- [Common Errors](#common-errors)
- [Best Practices](#best-practices)
- [Practice](#practice)
- [Key Points](#key-points)
- [Quick Revision](#quick-revision)

---

# Basic Syntax

The basic syntax for creating a database is:

```sql
CREATE DATABASE database_name;
````

Example:

```sql
CREATE DATABASE company;
```

This creates a database named `company`.

---

# Create a Database

Example:

```sql
CREATE DATABASE company;
```

After executing this statement, MySQL creates the `company` database.

You can verify it using:

```sql
SHOW DATABASES;
```

---

# Show Databases

The `SHOW DATABASES` statement displays the databases available on the MySQL server.

```sql
SHOW DATABASES;
```

Example output:

```text
+--------------------+
| Database           |
+--------------------+
| company            |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
```

The exact list depends on the MySQL installation and the databases you have created.

---

# Create Database If Not Exists

If a database already exists, running:

```sql
CREATE DATABASE company;
```

can produce an error.

To avoid this, use:

```sql
CREATE DATABASE IF NOT EXISTS company;
```

This tells MySQL to create the database only if it does not already exist.

Example:

```sql
CREATE DATABASE IF NOT EXISTS college;
```

---

# Select a Database

After creating a database, you normally need to select it before creating tables.

Use the `USE` statement:

```sql
USE company;
```

Now `company` is the current database for subsequent statements that do not explicitly specify another database.

---

# Check Current Database

You can check which database is currently selected using:

```sql
SELECT DATABASE();
```

Example:

```sql
USE company;

SELECT DATABASE();
```

Result:

```text
+------------+
| DATABASE() |
+------------+
| company    |
+------------+
```

If no database is selected, the result can be `NULL`.

---

# Create Tables Inside a Database

After selecting a database, you can create tables inside it.

Example:

```sql
CREATE DATABASE company;

USE company;

CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    salary DECIMAL(10,2)
);
```

Now the structure is:

```text
company
   |
   └── employees
```

---

# Show Tables

To display tables in the currently selected database:

```sql
SHOW TABLES;
```

Example:

```text
+-------------------+
| Tables_in_company |
+-------------------+
| employees         |
+-------------------+
```

---

# Create Multiple Tables

A database can contain multiple tables.

Example:

```sql
CREATE DATABASE college;

USE college;

CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT
);

CREATE TABLE courses (
    id INT PRIMARY KEY,
    course_name VARCHAR(100)
);

CREATE TABLE teachers (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);
```

The structure becomes:

```text
college
│
├── students
├── courses
└── teachers
```

---

# Create Database With IF NOT EXISTS

Recommended syntax when you are unsure whether the database already exists:

```sql
CREATE DATABASE IF NOT EXISTS college;
```

Then:

```sql
USE college;
```

This is useful in scripts that may be executed more than once.

---

# Database Name Examples

Good database names:

```text
company
college
school
hospital
ecommerce
banking
library
inventory
student_management
employee_management
```

Use names that clearly describe the purpose of the database.

---

# Database Naming Rules

Database names should generally be:

* Meaningful
* Consistent
* Easy to understand
* Easy to type
* Free from unnecessary spaces

Prefer:

```text
student_management
```

over:

```text
my database
```

When a name contains multiple words, a consistent naming convention such as `snake_case` can improve readability.

---

# Using Backticks

MySQL uses backticks to quote identifiers when necessary.

Example:

```sql
CREATE DATABASE `student_management`;
```

You may also use them with table or column names.

However, avoid using reserved words as identifiers whenever possible.

For example, instead of naming a table:

```text
order
```

you might use:

```text
orders
```

---

# Drop a Database

The `DROP DATABASE` statement permanently removes a database.

Syntax:

```sql
DROP DATABASE database_name;
```

Example:

```sql
DROP DATABASE company;
```

This removes the database and the objects inside it, such as its tables.

---

# Drop Database If Exists

To avoid an error when the database does not exist:

```sql
DROP DATABASE IF EXISTS company;
```

Example:

```sql
DROP DATABASE IF EXISTS test_database;
```

This is commonly useful in development and practice scripts.

---

# WARNING: DROP DATABASE

Be careful with:

```sql
DROP DATABASE
```

It is a destructive operation.

For example:

```sql
DROP DATABASE company;
```

can remove:

```text
company
│
├── employees
├── departments
├── projects
└── other tables
```

Do not run `DROP DATABASE` on a production database unless you are certain that it is intended.

---

# Database Creation Workflow

A common workflow is:

```text
Create Database
       ↓
Select Database
       ↓
Create Tables
       ↓
Insert Data
       ↓
Query Data
```

Example:

```sql
CREATE DATABASE company;

USE company;

CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO employees (id, name)
VALUES (1, 'Rahul');

SELECT *
FROM employees;
```

---

# Multiple Databases

A MySQL server can contain multiple databases.

Example:

```text
MySQL Server
│
├── company
│   ├── employees
│   └── departments
│
├── college
│   ├── students
│   └── courses
│
├── ecommerce
│   ├── customers
│   ├── products
│   └── orders
│
└── hospital
    ├── patients
    ├── doctors
    └── appointments
```

You can switch between databases using `USE`.

Example:

```sql
USE company;
```

Then:

```sql
SELECT DATABASE();
```

Result:

```text
company
```

Switch to another database:

```sql
USE college;
```

Check again:

```sql
SELECT DATABASE();
```

Result:

```text
college
```

---

# Fully Qualified Table Names

You can reference a table using:

```text
database_name.table_name
```

Example:

```sql
SELECT *
FROM company.employees;
```

This can be useful when working with multiple databases.

You can also insert data using a fully qualified table name:

```sql
INSERT INTO company.employees (id, name)
VALUES (1, 'Rahul');
```

---

# Database Information

You can use:

```sql
SHOW DATABASES;
```

to list databases.

You can use:

```sql
SELECT DATABASE();
```

to see the current database.

You can use:

```sql
SHOW TABLES;
```

to list tables in the current database.

You can use:

```sql
DESCRIBE employees;
```

to inspect the structure of a table.

---

# Complete Example

Create a database:

```sql
CREATE DATABASE IF NOT EXISTS company;
```

Select it:

```sql
USE company;
```

Check the selected database:

```sql
SELECT DATABASE();
```

Create a table:

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    salary DECIMAL(10,2)
);
```

Show tables:

```sql
SHOW TABLES;
```

Describe the table:

```sql
DESCRIBE employees;
```

Insert data:

```sql
INSERT INTO employees
(name, email, salary)
VALUES
('Rahul', 'rahul@example.com', 40000),
('Anu', 'anu@example.com', 35000);
```

Retrieve data:

```sql
SELECT *
FROM employees;
```

---

# Complete Database Script

```sql
-- Create database
CREATE DATABASE IF NOT EXISTS company;

-- Select database
USE company;

-- Create table
CREATE TABLE IF NOT EXISTS employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    salary DECIMAL(10,2)
);

-- Insert data
INSERT INTO employees
(name, email, salary)
VALUES
('Rahul', 'rahul@example.com', 40000),
('Anu', 'anu@example.com', 35000),
('Vimal', 'vimal@example.com', 45000);

-- Display data
SELECT *
FROM employees;
```

---

# Common Errors

## Database Already Exists

If you run:

```sql
CREATE DATABASE company;
```

when `company` already exists, MySQL can return an error.

Use:

```sql
CREATE DATABASE IF NOT EXISTS company;
```

---

## No Database Selected

If you try to create or access a table without selecting a database, you may receive an error indicating that no database is selected.

Fix:

```sql
USE company;
```

Then run your table query.

---

## Unknown Database

If you run:

```sql
USE abc;
```

and `abc` does not exist, MySQL will report that the database does not exist.

Create it first:

```sql
CREATE DATABASE abc;
```

Then:

```sql
USE abc;
```

---

# Best Practices

## 1. Use IF NOT EXISTS in Reusable Setup Scripts

```sql
CREATE DATABASE IF NOT EXISTS company;
```

---

## 2. Select the Database Explicitly

```sql
USE company;
```

This makes it clear where subsequent table operations are performed.

---

## 3. Use Meaningful Names

Prefer:

```text
employee_management
```

instead of:

```text
db1
```

---

## 4. Use a Consistent Naming Convention

For example:

```text
student_management
employee_management
online_store
hospital_management
```

---

## 5. Be Careful With DROP

Always verify the database before executing:

```sql
DROP DATABASE
```

---

# Useful Commands

```sql
-- List databases
SHOW DATABASES;

-- Create database
CREATE DATABASE company;

-- Create database if it does not exist
CREATE DATABASE IF NOT EXISTS company;

-- Select database
USE company;

-- Show current database
SELECT DATABASE();

-- Show tables
SHOW TABLES;

-- Drop database
DROP DATABASE company;

-- Drop database if it exists
DROP DATABASE IF EXISTS company;
```

---

# Key Points

* `CREATE DATABASE` creates a new database.
* `CREATE DATABASE IF NOT EXISTS` avoids an error if the database already exists.
* `SHOW DATABASES` displays available databases.
* `USE` selects the current database.
* `SELECT DATABASE()` shows the currently selected database.
* A database can contain multiple tables.
* `SHOW TABLES` displays tables in the current database.
* `DROP DATABASE` permanently removes a database and its contents.
* Fully qualified table names use the format `database_name.table_name`.
* Always be careful when using destructive commands such as `DROP DATABASE`.

---

# Quick Revision

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
```

Important commands:

```sql
SHOW DATABASES;

CREATE DATABASE company;

CREATE DATABASE IF NOT EXISTS company;

USE company;

SELECT DATABASE();

SHOW TABLES;

DROP DATABASE company;

DROP DATABASE IF EXISTS company;
```

---

# Practice

Run the following commands:

```sql
CREATE DATABASE IF NOT EXISTS practice_db;

USE practice_db;

SELECT DATABASE();

CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    course VARCHAR(100)
);

SHOW TABLES;

DESCRIBE students;
```

Insert some data:

```sql
INSERT INTO students (id, name, age, course)
VALUES
(1, 'Rahul', 21, 'BCA'),
(2, 'Anu', 22, 'BSc CS'),
(3, 'Vimal', 21, 'BBA');
```

Read the data:

```sql
SELECT *
FROM students;
```

Check the database structure:

```sql
SHOW TABLES;

DESCRIBE students;
```