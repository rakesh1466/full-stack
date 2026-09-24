````markdown
# Create Table

A table is the primary structure used to store data in a relational database.

A MySQL table consists of:

- Columns
- Rows
- Data types
- Constraints
- Keys

---

## Table of Contents

- [What is a Table?](#what-is-a-table)
- [Basic Syntax](#basic-syntax)
- [Create a Simple Table](#create-a-simple-table)
- [Select a Database](#select-a-database)
- [Column Definition](#column-definition)
- [Primary Key](#primary-key)
- [AUTO_INCREMENT](#auto_increment)
- [NOT NULL](#not-null)
- [UNIQUE](#unique)
- [DEFAULT](#default)
- [CHECK](#check)
- [Foreign Key](#foreign-key)
- [Multiple Constraints](#multiple-constraints)
- [Create Table If Not Exists](#create-table-if-not-exists)
- [View Tables](#view-tables)
- [Describe a Table](#describe-a-table)
- [Show Table Definition](#show-table-definition)
- [ALTER TABLE](#alter-table)
- [Add a Column](#add-a-column)
- [Modify a Column](#modify-a-column)
- [Rename a Column](#rename-a-column)
- [Drop a Column](#drop-a-column)
- [Rename a Table](#rename-a-table)
- [Drop a Table](#drop-a-table)
- [Temporary Tables](#temporary-tables)
- [Complete Example](#complete-example)
- [Best Practices](#best-practices)
- [Common Errors](#common-errors)
- [Key Points](#key-points)
- [Quick Revision](#quick-revision)
- [Practice](#practice)

---

# What is a Table?

A table is a structured collection of related data.

For example, a `students` table can store student information.

```text
students

+----+--------+-----+---------+
| id | name   | age | course  |
+----+--------+-----+---------+
| 1  | Rahul  | 21  | BCA     |
| 2  | Anu    | 22  | BSc CS  |
| 3  | Vimal  | 21  | BBA     |
+----+--------+-----+---------+
````

The table contains:

```text
Columns:
id
name
age
course

Rows:
1 | Rahul | 21 | BCA
2 | Anu   | 22 | BSc CS
3 | Vimal | 21 | BBA
```

---

# Basic Syntax

The basic syntax for creating a table is:

```sql
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype
);
```

Example:

```sql
CREATE TABLE students (
    id INT,
    name VARCHAR(100),
    age INT
);
```

---

# Select a Database

Before creating a table, select the database where the table should be created.

```sql
USE college;
```

Then create the table:

```sql
CREATE TABLE students (
    id INT,
    name VARCHAR(100),
    age INT
);
```

The structure becomes:

```text
college
   |
   └── students
```

---

# Create a Simple Table

Example:

```sql
CREATE TABLE students (
    id INT,
    name VARCHAR(100),
    age INT,
    course VARCHAR(100)
);
```

This creates a table with four columns:

| Column | Data Type    |
| ------ | ------------ |
| id     | INT          |
| name   | VARCHAR(100) |
| age    | INT          |
| course | VARCHAR(100) |

---

# Column Definition

Every column normally has:

```text
column_name + data_type + optional constraints
```

Example:

```sql
name VARCHAR(100) NOT NULL
```

Here:

```text
name       → Column name
VARCHAR    → Data type
(100)      → Maximum length
NOT NULL   → Constraint
```

Another example:

```sql
salary DECIMAL(10,2)
```

Here:

```text
salary     → Column name
DECIMAL    → Data type
(10,2)     → Precision and scale
```

---

# Primary Key

A primary key uniquely identifies each record in a table.

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

# Primary Key With Named Constraint

You can explicitly name a primary key constraint.

```sql
CREATE TABLE students (
    id INT,
    name VARCHAR(100),
    age INT,
    CONSTRAINT pk_students PRIMARY KEY (id)
);
```

This can make database definitions easier to understand and manage.

---

# AUTO_INCREMENT

`AUTO_INCREMENT` automatically generates a new numeric value when a row is inserted without specifying the value for that column.

Example:

```sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    age INT
);
```

Insert data:

```sql
INSERT INTO students (name, age)
VALUES ('Rahul', 21);
```

MySQL can automatically generate the ID.

Another insert:

```sql
INSERT INTO students (name, age)
VALUES ('Anu', 22);
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

# NOT NULL

`NOT NULL` prevents a column from containing `NULL`.

Example:

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT
);
```

The `name` column must have a value.

This is valid:

```sql
INSERT INTO students (id, name, age)
VALUES (1, 'Rahul', 21);
```

This violates the `NOT NULL` requirement:

```sql
INSERT INTO students (id, name, age)
VALUES (2, NULL, 22);
```

---

# UNIQUE

The `UNIQUE` constraint prevents duplicate values in a column or group of columns.

Example:

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(150) UNIQUE
);
```

This is valid:

```sql
INSERT INTO users (email)
VALUES ('rahul@example.com');
```

Trying to insert the same email again can violate the unique constraint.

```sql
INSERT INTO users (email)
VALUES ('rahul@example.com');
```

---

# DEFAULT

The `DEFAULT` constraint specifies a default value when a value is not supplied.

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
INSERT INTO users (name)
VALUES ('Rahul');
```

The `country` value can automatically be:

```text
India
```

---

# CHECK

The `CHECK` constraint specifies a condition that values should satisfy.

Example:

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT CHECK (age >= 18)
);
```

This is valid:

```sql
INSERT INTO students (id, name, age)
VALUES (1, 'Rahul', 21);
```

This violates the check condition:

```sql
INSERT INTO students (id, name, age)
VALUES (2, 'Anu', 15);
```

The exact behavior of `CHECK` constraints depends on the MySQL version and configuration, but modern MySQL versions enforce them.

---

# Foreign Key

A foreign key establishes a relationship between tables.

First create the parent table:

```sql
CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL
);
```

Then create the child table:

```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    name VARCHAR(100),
    department_id INT,
    FOREIGN KEY (department_id)
        REFERENCES departments(department_id)
);
```

Relationship:

```text
departments
     |
     | department_id
     ↓
employees
```

---

# Foreign Key With Named Constraint

You can name the foreign key constraint:

```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    name VARCHAR(100),
    department_id INT,
    CONSTRAINT fk_employee_department
        FOREIGN KEY (department_id)
        REFERENCES departments(department_id)
);
```

---

# Multiple Constraints

A column can have multiple constraints.

Example:

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    salary DECIMAL(10,2) CHECK (salary >= 0),
    country VARCHAR(50) DEFAULT 'India'
);
```

Here:

```text
id
→ PRIMARY KEY
→ AUTO_INCREMENT

name
→ NOT NULL

email
→ UNIQUE
→ NOT NULL

salary
→ CHECK

country
→ DEFAULT
```

---

# Create Table If Not Exists

If a table may already exist, use:

```sql
CREATE TABLE IF NOT EXISTS students (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);
```

If the table already exists, MySQL will not create another table with the same name.

---

# View Tables

To see the tables in the current database:

```sql
SHOW TABLES;
```

Example:

```text
+------------------+
| Tables_in_college|
+------------------+
| students         |
| courses          |
| teachers         |
+------------------+
```

---

# Describe a Table

Use `DESCRIBE` to view the table structure.

```sql
DESCRIBE students;
```

You can also use:

```sql
DESC students;
```

Example output:

```text
+--------+--------------+------+-----+---------+----------------+
| Field  | Type         | Null | Key | Default | Extra          |
+--------+--------------+------+-----+---------+----------------+
| id     | int          | NO   | PRI | NULL    | auto_increment |
| name   | varchar(100) | NO   |     | NULL    |                |
| age    | int          | YES  |     | NULL    |                |
+--------+--------------+------+-----+---------+----------------+
```

---

# Show Table Definition

Use:

```sql
SHOW CREATE TABLE students;
```

This displays the SQL statement used to define the table.

Example:

```sql
SHOW CREATE TABLE students;
```

This is useful for checking:

* Columns
* Data types
* Constraints
* Keys
* Table options

---

# ALTER TABLE

`ALTER TABLE` is used to modify an existing table.

You can use it to:

* Add columns
* Modify columns
* Rename columns
* Drop columns
* Add constraints
* Drop constraints
* Rename tables

---

# Add a Column

Syntax:

```sql
ALTER TABLE table_name
ADD column_name datatype;
```

Example:

```sql
ALTER TABLE students
ADD email VARCHAR(150);
```

Now the table contains:

```text
id
name
age
email
```

---

# Add Multiple Columns

You can add multiple columns using separate `ADD` clauses.

```sql
ALTER TABLE students
    ADD phone VARCHAR(15),
    ADD city VARCHAR(100);
```

---

# Add Column at a Specific Position

MySQL supports `FIRST` and `AFTER`.

Add a column at the beginning:

```sql
ALTER TABLE students
ADD student_code VARCHAR(20) FIRST;
```

Add a column after another column:

```sql
ALTER TABLE students
ADD phone VARCHAR(15) AFTER name;
```

These are mainly useful when column order matters for display or compatibility. Column order usually should not be relied upon by application logic.

---

# Modify a Column

Use `MODIFY COLUMN` to change a column definition.

Example:

```sql
ALTER TABLE students
MODIFY COLUMN name VARCHAR(200);
```

You can change properties such as:

* Data type
* Size
* Nullability
* Default value

Example:

```sql
ALTER TABLE students
MODIFY COLUMN age INT NOT NULL;
```

---

# Change a Column Name

MySQL supports `RENAME COLUMN`.

Example:

```sql
ALTER TABLE students
RENAME COLUMN name TO full_name;
```

Now:

```text
name
```

becomes:

```text
full_name
```

---

# Change Column Name and Definition

MySQL also supports `CHANGE COLUMN`.

Syntax:

```sql
ALTER TABLE table_name
CHANGE COLUMN old_name new_name datatype;
```

Example:

```sql
ALTER TABLE students
CHANGE COLUMN name full_name VARCHAR(200);
```

`CHANGE COLUMN` can rename a column and redefine its data type and attributes.

---

# Drop a Column

Use:

```sql
ALTER TABLE students
DROP COLUMN email;
```

This permanently removes the column and its data.

Be careful when dropping columns.

---

# Add a Primary Key

If a table does not already have a primary key:

```sql
ALTER TABLE students
ADD PRIMARY KEY (id);
```

---

# Add a Unique Constraint

```sql
ALTER TABLE students
ADD CONSTRAINT uq_students_email UNIQUE (email);
```

---

# Add a Foreign Key

Example:

```sql
ALTER TABLE employees
ADD CONSTRAINT fk_employee_department
FOREIGN KEY (department_id)
REFERENCES departments(department_id);
```

---

# Drop a Foreign Key

If the constraint is named:

```sql
ALTER TABLE employees
DROP FOREIGN KEY fk_employee_department;
```

---

# Drop a Primary Key

```sql
ALTER TABLE students
DROP PRIMARY KEY;
```

Be careful if other constraints or relationships depend on the key.

---

# Rename a Table

Use:

```sql
RENAME TABLE students TO college_students;
```

The table name changes from:

```text
students
```

to:

```text
college_students
```

---

# Drop a Table

To completely remove a table:

```sql
DROP TABLE students;
```

This removes:

* Table structure
* Table data

Be careful with this command.

---

# Drop Table If Exists

Use:

```sql
DROP TABLE IF EXISTS students;
```

This avoids an error if the table does not exist.

---

# TRUNCATE TABLE

`TRUNCATE TABLE` removes all rows while keeping the table structure.

```sql
TRUNCATE TABLE students;
```

After truncation:

```text
Table exists
    ↓
All rows removed
    ↓
Columns remain
    ↓
Constraints remain
```

---

# DELETE vs TRUNCATE vs DROP

| Command    |  Removes Rows | Removes Structure |
| ---------- | ------------: | ----------------: |
| DELETE     |           Yes |                No |
| TRUNCATE   | Yes, all rows |                No |
| DROP TABLE |           Yes |               Yes |

Example:

```sql
DELETE FROM students;
```

```sql
TRUNCATE TABLE students;
```

```sql
DROP TABLE students;
```

---

# Temporary Tables

A temporary table exists only for the duration of the current session.

Syntax:

```sql
CREATE TEMPORARY TABLE temporary_students (
    id INT,
    name VARCHAR(100)
);
```

Insert data:

```sql
INSERT INTO temporary_students
VALUES
(1, 'Rahul'),
(2, 'Anu');
```

Read data:

```sql
SELECT *
FROM temporary_students;
```

Temporary tables are automatically removed when the session ends.

You can also explicitly remove one:

```sql
DROP TEMPORARY TABLE temporary_students;
```

---

# Complete Example

Create a database:

```sql
CREATE DATABASE IF NOT EXISTS college;
```

Select it:

```sql
USE college;
```

Create departments:

```sql
CREATE TABLE IF NOT EXISTS departments (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(100) NOT NULL UNIQUE
);
```

Create students:

```sql
CREATE TABLE IF NOT EXISTS students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    age INT CHECK (age >= 18),
    department_id INT,
    country VARCHAR(50) DEFAULT 'India',
    FOREIGN KEY (department_id)
        REFERENCES departments(department_id)
);
```

View tables:

```sql
SHOW TABLES;
```

Describe students:

```sql
DESC students;
```

Show the complete definition:

```sql
SHOW CREATE TABLE students;
```

---

# Complete Example With Data

Insert departments:

```sql
INSERT INTO departments (department_name)
VALUES
('Computer Science'),
('Information Technology'),
('Commerce');
```

Insert students:

```sql
INSERT INTO students
(name, email, age, department_id)
VALUES
('Rahul', 'rahul@example.com', 21, 1),
('Anu', 'anu@example.com', 22, 2),
('Vimal', 'vimal@example.com', 21, 3);
```

View students:

```sql
SELECT *
FROM students;
```

View departments:

```sql
SELECT *
FROM departments;
```

---

# Create Table Using Multiple Constraints

A practical example:

```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    phone VARCHAR(15),
    age INT CHECK (age >= 18),
    salary DECIMAL(10,2) CHECK (salary >= 0),
    department_id INT,
    country VARCHAR(50) DEFAULT 'India',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (department_id)
        REFERENCES departments(department_id)
);
```

This table demonstrates:

```text
PRIMARY KEY
AUTO_INCREMENT
NOT NULL
UNIQUE
CHECK
DEFAULT
FOREIGN KEY
TIMESTAMP
```

---

# Common Errors

## Error: Table Already Exists

If you run:

```sql
CREATE TABLE students (
    id INT
);
```

and the table already exists, MySQL can return an error.

Use:

```sql
CREATE TABLE IF NOT EXISTS students (
    id INT
);
```

---

## Error: No Database Selected

If you try to create a table without selecting a database:

```sql
CREATE TABLE students (
    id INT
);
```

you may receive a `No database selected` error.

Fix:

```sql
USE college;
```

Then:

```sql
CREATE TABLE students (
    id INT
);
```

---

## Error: Duplicate Primary Key

If you insert two records with the same primary key:

```sql
INSERT INTO students (id, name)
VALUES (1, 'Rahul');

INSERT INTO students (id, name)
VALUES (1, 'Anu');
```

the second insert can fail because the primary key must be unique.

---

## Error: Duplicate Unique Value

If email is unique:

```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(150) UNIQUE
);
```

Then inserting the same email twice can cause a duplicate-key error.

---

## Foreign Key Error

If you insert a child record referring to a parent key that does not exist, the foreign key constraint can reject the operation.

Example:

```sql
INSERT INTO employees
(name, department_id)
VALUES
('Rahul', 999);
```

If department `999` does not exist in the parent table, the insert can fail.

---

# Best Practices

## 1. Use a Primary Key

Most entity tables should have a reliable primary key.

```sql
id INT PRIMARY KEY AUTO_INCREMENT
```

---

## 2. Choose Appropriate Data Types

Use the smallest suitable type that accurately represents the data.

Examples:

```sql
name VARCHAR(100)
age INT
salary DECIMAL(10,2)
birth_date DATE
```

---

## 3. Use NOT NULL When Required

If a field must always contain a value:

```sql
name VARCHAR(100) NOT NULL
```

---

## 4. Use UNIQUE for Values That Must Be Unique

Examples:

```sql
email VARCHAR(150) UNIQUE
```

---

## 5. Use Foreign Keys for Relationships

Example:

```sql
FOREIGN KEY (department_id)
REFERENCES departments(department_id)
```

---

## 6. Use CHECK for Valid Ranges

Example:

```sql
age INT CHECK (age >= 18)
```

---

## 7. Use DECIMAL for Financial Values

Prefer:

```sql
salary DECIMAL(10,2)
```

for exact financial values rather than floating-point types.

---

## 8. Avoid Unnecessary Columns

Only store information required by the application or business process.

---

## 9. Use Meaningful Names

Good:

```text
employee_id
department_id
employee_name
created_at
```

Avoid unclear names:

```text
x
data1
value
abc
```

---

## 10. Be Careful With Destructive Operations

Think carefully before running:

```sql
DROP TABLE
```

or:

```sql
DROP COLUMN
```

because existing data can be permanently removed.

---

# Important Commands

```sql
-- Create table
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

-- Create only if table does not exist
CREATE TABLE IF NOT EXISTS students (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

-- List tables
SHOW TABLES;

-- Describe table
DESCRIBE students;

-- Short form
DESC students;

-- Show complete table definition
SHOW CREATE TABLE students;

-- Add column
ALTER TABLE students
ADD email VARCHAR(150);

-- Modify column
ALTER TABLE students
MODIFY COLUMN name VARCHAR(200);

-- Rename column
ALTER TABLE students
RENAME COLUMN name TO full_name;

-- Drop column
ALTER TABLE students
DROP COLUMN email;

-- Rename table
RENAME TABLE students TO college_students;

-- Remove all rows
TRUNCATE TABLE college_students;

-- Drop table
DROP TABLE college_students;

-- Drop table if it exists
DROP TABLE IF EXISTS college_students;
```

---

# Key Points

* `CREATE TABLE` creates a new table.
* A table contains columns and rows.
* Each column has a data type.
* Constraints control what data can be stored.
* `PRIMARY KEY` uniquely identifies records.
* `AUTO_INCREMENT` can automatically generate numeric IDs.
* `NOT NULL` prevents `NULL` values.
* `UNIQUE` prevents duplicate values.
* `DEFAULT` provides a default value.
* `CHECK` enforces a condition.
* `FOREIGN KEY` creates relationships between tables.
* `SHOW TABLES` lists tables.
* `DESCRIBE` displays table structure.
* `SHOW CREATE TABLE` displays the table definition.
* `ALTER TABLE` modifies an existing table.
* `RENAME TABLE` changes a table's name.
* `TRUNCATE TABLE` removes all rows while retaining the table structure.
* `DROP TABLE` removes the table and its data.
* Temporary tables exist for the current session.

---

# Quick Revision

```text
CREATE TABLE
      ↓
Define Columns
      ↓
Choose Data Types
      ↓
Add Constraints
      ↓
Insert Data
      ↓
Query Data
```

Common constraints:

```text
PRIMARY KEY
FOREIGN KEY
NOT NULL
UNIQUE
DEFAULT
CHECK
```

Common table commands:

```text
CREATE TABLE
ALTER TABLE
SHOW TABLES
DESCRIBE
SHOW CREATE TABLE
RENAME TABLE
TRUNCATE TABLE
DROP TABLE
```

---

# Practice

Run this complete script:

```sql
CREATE DATABASE IF NOT EXISTS practice_db;

USE practice_db;

CREATE TABLE departments (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    age INT CHECK (age >= 18),
    salary DECIMAL(10,2),
    department_id INT,
    country VARCHAR(50) DEFAULT 'India',
    FOREIGN KEY (department_id)
        REFERENCES departments(department_id)
);

INSERT INTO departments (department_name)
VALUES
('IT'),
('HR'),
('Finance');

INSERT INTO employees
(employee_name, email, age, salary, department_id)
VALUES
('Rahul', 'rahul@example.com', 21, 40000, 1),
('Anu', 'anu@example.com', 22, 35000, 2),
('Vimal', 'vimal@example.com', 25, 45000, 3);

SHOW TABLES;

DESC departments;

DESC employees;

SELECT *
FROM departments;

SELECT *
FROM employees;
```

Try adding a new column:

```sql
ALTER TABLE employees
ADD phone VARCHAR(15);
```

Check the structure:

```sql
DESC employees;
```

Rename the column:

```sql
ALTER TABLE employees
RENAME COLUMN phone TO phone_number;
```

Check again:

```sql
DESC employees;
```

Finally, if you want to remove the column:

```sql
ALTER TABLE employees
DROP COLUMN phone_number;
```