````markdown
# SELECT

`SELECT` is used to retrieve data from one or more tables in MySQL.

It is one of the most frequently used SQL commands.

---

## Table of Contents

- [What is SELECT?](#what-is-select)
- [Basic Syntax](#basic-syntax)
- [Select All Columns](#select-all-columns)
- [Select Specific Columns](#select-specific-columns)
- [Select a Single Column](#select-a-single-column)
- [Select Multiple Columns](#select-multiple-columns)
- [Column Aliases](#column-aliases)
- [Table Aliases](#table-aliases)
- [SELECT with WHERE](#select-with-where)
- [SELECT with ORDER BY](#select-with-order-by)
- [SELECT DISTINCT](#select-distinct)
- [SELECT with LIMIT](#select-with-limit)
- [SELECT with Expressions](#select-with-expressions)
- [Arithmetic Operations](#arithmetic-operations)
- [String Concatenation](#string-concatenation)
- [SELECT Constants](#select-constants)
- [SELECT Functions](#select-functions)
- [SELECT from Multiple Tables](#select-from-multiple-tables)
- [SELECT with NULL](#select-with-null)
- [SELECT with BETWEEN](#select-with-between)
- [SELECT with IN](#select-with-in)
- [SELECT with LIKE](#select-with-like)
- [SELECT with AND](#select-with-and)
- [SELECT with OR](#select-with-or)
- [SELECT with NOT](#select-with-not)
- [SELECT with CASE](#select-with-case)
- [SELECT with GROUP BY](#select-with-group-by)
- [SELECT with HAVING](#select-with-having)
- [SELECT with JOIN](#select-with-join)
- [SELECT from Another Database](#select-from-another-database)
- [Execution Order](#execution-order)
- [Common Mistakes](#common-mistakes)
- [Best Practices](#best-practices)
- [Complete Example](#complete-example)
- [Key Points](#key-points)
- [Quick Revision](#quick-revision)
- [Practice](#practice)

---

# What is SELECT?

The `SELECT` statement retrieves data from a database.

Example:

```sql
SELECT *
FROM students;
````

This returns all columns and rows from the `students` table.

---

# Basic Syntax

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

Use `*` to select all columns.

```sql
SELECT *
FROM students;
```

Example table:

```text
+----+--------+-----+---------+
| id | name   | age | course  |
+----+--------+-----+---------+
| 1  | Rahul  | 21  | BCA     |
| 2  | Anu    | 22  | BSc CS  |
| 3  | Vimal  | 21  | BBA     |
+----+--------+-----+---------+
```

Query:

```sql
SELECT *
FROM students;
```

Result:

```text
+----+--------+-----+---------+
| id | name   | age | course  |
+----+--------+-----+---------+
| 1  | Rahul  | 21  | BCA     |
| 2  | Anu    | 22  | BSc CS  |
| 3  | Vimal  | 21  | BBA     |
+----+--------+-----+---------+
```

---

# Select a Single Column

```sql
SELECT name
FROM students;
```

Result:

```text
+--------+
| name   |
+--------+
| Rahul  |
| Anu    |
| Vimal  |
+--------+
```

---

# Select Multiple Columns

```sql
SELECT name, age
FROM students;
```

Result:

```text
+--------+-----+
| name   | age |
+--------+-----+
| Rahul  | 21  |
| Anu    | 22  |
| Vimal  | 21  |
+--------+-----+
```

Another example:

```sql
SELECT name, course, age
FROM students;
```

---

# Select Columns in a Different Order

You can choose the order in which columns appear.

```sql
SELECT course, name, age
FROM students;
```

The table itself is not changed.

Only the order of columns in the result changes.

---

# Column Aliases

An alias gives a temporary name to a column in the result.

Syntax:

```sql
SELECT column_name AS alias_name
FROM table_name;
```

Example:

```sql
SELECT name AS student_name
FROM students;
```

Result:

```text
+--------------+
| student_name |
+--------------+
| Rahul        |
| Anu          |
| Vimal        |
+--------------+
```

The original column name in the table does not change.

---

# AS Keyword Is Optional

This:

```sql
SELECT name AS student_name
FROM students;
```

can also be written as:

```sql
SELECT name student_name
FROM students;
```

Using `AS` is generally clearer.

---

# Alias With Multiple Columns

```sql
SELECT
    name AS student_name,
    age AS student_age,
    course AS student_course
FROM students;
```

---

# Alias With Expressions

```sql
SELECT
    price,
    price * 1.18 AS price_with_tax
FROM products;
```

The alias is only for the result.

---

# Table Aliases

Table aliases provide shorter names for tables.

Syntax:

```sql
SELECT s.name
FROM students AS s;
```

You can omit `AS`:

```sql
SELECT s.name
FROM students s;
```

Table aliases are especially useful when working with multiple tables.

Example:

```sql
SELECT
    s.name,
    d.department_name
FROM students AS s
JOIN departments AS d
    ON s.department_id = d.department_id;
```

---

# SELECT With WHERE

`WHERE` filters rows.

Example:

```sql
SELECT *
FROM students
WHERE age = 21;
```

Only students whose age is `21` are returned.

---

# SELECT With Comparison Operators

Common comparison operators:

```text
=
!=
<>
>
<
>=
<=
```

Examples:

```sql
SELECT *
FROM students
WHERE age = 21;
```

```sql
SELECT *
FROM students
WHERE age > 20;
```

```sql
SELECT *
FROM students
WHERE age >= 21;
```

```sql
SELECT *
FROM students
WHERE age < 25;
```

```sql
SELECT *
FROM students
WHERE age <= 22;
```

---

# SELECT DISTINCT

`DISTINCT` removes duplicate values from the result.

Example:

```sql
SELECT course
FROM students;
```

Possible result:

```text
BCA
BCA
BBA
BSc CS
```

Using:

```sql
SELECT DISTINCT course
FROM students;
```

Result:

```text
BCA
BBA
BSc CS
```

---

# DISTINCT With Multiple Columns

```sql
SELECT DISTINCT course, age
FROM students;
```

Here MySQL considers the combination of `course` and `age`.

---

# SELECT With LIMIT

`LIMIT` restricts the number of rows returned.

Example:

```sql
SELECT *
FROM students
LIMIT 5;
```

This returns at most five rows.

---

# LIMIT With OFFSET

Syntax:

```sql
SELECT *
FROM students
LIMIT offset, row_count;
```

Example:

```sql
SELECT *
FROM students
LIMIT 5, 10;
```

This skips the first 5 rows and returns up to the next 10 rows.

Modern MySQL also supports:

```sql
SELECT *
FROM students
LIMIT 10 OFFSET 5;
```

---

# SELECT With ORDER BY

`ORDER BY` sorts the result.

Example:

```sql
SELECT *
FROM students
ORDER BY age;
```

By default, sorting is ascending.

Equivalent:

```sql
SELECT *
FROM students
ORDER BY age ASC;
```

Descending:

```sql
SELECT *
FROM students
ORDER BY age DESC;
```

---

# SELECT With Multiple Sorting Columns

```sql
SELECT *
FROM students
ORDER BY age ASC, name ASC;
```

MySQL first sorts by `age`.

If two students have the same age, it sorts those rows by `name`.

---

# SELECT With WHERE and ORDER BY

```sql
SELECT *
FROM students
WHERE age >= 21
ORDER BY name ASC;
```

---

# SELECT With WHERE, ORDER BY and LIMIT

```sql
SELECT *
FROM students
WHERE age >= 21
ORDER BY age DESC
LIMIT 5;
```

This:

1. Filters students aged 21 or older.
2. Sorts them by age descending.
3. Returns up to five rows.

---

# SELECT With Expressions

You can perform calculations inside `SELECT`.

Example:

```sql
SELECT
    price,
    price * 2 AS double_price
FROM products;
```

Another example:

```sql
SELECT
    salary,
    salary * 12 AS annual_salary
FROM employees;
```

---

# Arithmetic Operations

SQL supports arithmetic operators:

```text
+
-
*
/
%
```

Example:

```sql
SELECT
    price,
    price + 100 AS increased_price
FROM products;
```

Subtract:

```sql
SELECT
    price,
    price - 100 AS reduced_price
FROM products;
```

Multiply:

```sql
SELECT
    price,
    price * 1.18 AS price_with_tax
FROM products;
```

Divide:

```sql
SELECT
    salary,
    salary / 12 AS monthly_amount
FROM employees;
```

Modulo:

```sql
SELECT
    quantity,
    quantity % 2 AS remainder
FROM products;
```

---

# SELECT Constants

You can select values without using a table.

```sql
SELECT 10;
```

Result:

```text
10
```

You can also use aliases:

```sql
SELECT 10 AS number;
```

---

# SELECT Multiple Constants

```sql
SELECT
    10 AS number,
    'Hello' AS message,
    TRUE AS status;
```

---

# SELECT Current Date and Time

```sql
SELECT CURRENT_DATE();
```

Current time:

```sql
SELECT CURRENT_TIME();
```

Current date and time:

```sql
SELECT CURRENT_TIMESTAMP();
```

---

# SELECT Functions

Functions can be used inside `SELECT`.

Example:

```sql
SELECT UPPER(name)
FROM students;
```

Another:

```sql
SELECT LOWER(name)
FROM students;
```

Numeric:

```sql
SELECT ROUND(price, 2)
FROM products;
```

Date:

```sql
SELECT YEAR(birth_date)
FROM students;
```

Aggregate:

```sql
SELECT COUNT(*)
FROM students;
```

Functions are covered in more detail in the `functions/` section.

---

# SELECT With NULL

You cannot correctly check `NULL` using:

```sql
WHERE phone = NULL;
```

Use:

```sql
WHERE phone IS NULL;
```

Example:

```sql
SELECT *
FROM students
WHERE phone IS NULL;
```

For non-NULL:

```sql
SELECT *
FROM students
WHERE phone IS NOT NULL;
```

---

# SELECT With BETWEEN

`BETWEEN` checks whether a value falls within an inclusive range.

Example:

```sql
SELECT *
FROM employees
WHERE salary BETWEEN 30000 AND 50000;
```

The boundaries are included.

Equivalent conceptually to:

```sql
WHERE salary >= 30000
AND salary <= 50000;
```

---

# SELECT With IN

`IN` checks whether a value matches one of several values.

Example:

```sql
SELECT *
FROM students
WHERE course IN ('BCA', 'BBA');
```

This is often cleaner than:

```sql
SELECT *
FROM students
WHERE course = 'BCA'
   OR course = 'BBA';
```

---

# SELECT With NOT IN

```sql
SELECT *
FROM students
WHERE course NOT IN ('BCA', 'BBA');
```

This returns rows whose course is not one of those values.

Be careful with `NULL` values when using `NOT IN`.

---

# SELECT With LIKE

`LIKE` is used for pattern matching.

Example:

```sql
SELECT *
FROM students
WHERE name LIKE 'R%';
```

This finds names starting with `R`.

---

## `%` Wildcard

`%` represents zero or more characters.

Starts with R:

```sql
WHERE name LIKE 'R%';
```

Ends with `a`:

```sql
WHERE name LIKE '%a';
```

Contains `a`:

```sql
WHERE name LIKE '%a%';
```

---

# `_` Wildcard

`_` represents exactly one character.

Example:

```sql
SELECT *
FROM students
WHERE name LIKE 'A_u';
```

This can match names such as:

```text
Anu
Ayu
```

depending on the actual data.

---

# SELECT With AND

`AND` requires all conditions to be true.

```sql
SELECT *
FROM students
WHERE age >= 21
AND course = 'BCA';
```

Both conditions must match.

---

# SELECT With OR

`OR` requires at least one condition to be true.

```sql
SELECT *
FROM students
WHERE course = 'BCA'
OR course = 'BBA';
```

---

# SELECT With NOT

`NOT` reverses a condition.

Example:

```sql
SELECT *
FROM students
WHERE NOT age = 21;
```

Equivalent in this simple case:

```sql
SELECT *
FROM students
WHERE age <> 21;
```

---

# Combining AND and OR

Example:

```sql
SELECT *
FROM students
WHERE
    age >= 21
    AND
    (course = 'BCA' OR course = 'BBA');
```

Use parentheses to make the intended logic clear.

---

# SELECT With CASE

`CASE` allows conditional logic in a query.

Example:

```sql
SELECT
    name,
    age,
    CASE
        WHEN age >= 18 THEN 'Adult'
        ELSE 'Minor'
    END AS age_group
FROM students;
```

Example result:

```text
+-------+-----+-----------+
| name  | age | age_group |
+-------+-----+-----------+
| Rahul | 21  | Adult     |
| Anu   | 22  | Adult     |
+-------+-----+-----------+
```

---

# CASE With Multiple Conditions

```sql
SELECT
    name,
    salary,
    CASE
        WHEN salary >= 50000 THEN 'High'
        WHEN salary >= 30000 THEN 'Medium'
        ELSE 'Low'
    END AS salary_category
FROM employees;
```

---

# SELECT With GROUP BY

`GROUP BY` groups rows based on one or more columns.

Example:

```sql
SELECT
    department,
    COUNT(*) AS employee_count
FROM employees
GROUP BY department;
```

This is commonly used with aggregate functions.

---

# SELECT With HAVING

`HAVING` filters grouped results.

Example:

```sql
SELECT
    department,
    COUNT(*) AS employee_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;
```

`WHERE` filters rows before grouping.

`HAVING` filters groups after grouping.

---

# SELECT With JOIN

`SELECT` can retrieve data from multiple related tables.

Example:

```sql
SELECT
    students.name,
    departments.department_name
FROM students
INNER JOIN departments
    ON students.department_id = departments.department_id;
```

This combines information from two tables.

JOINs are covered in detail in the `joins/` section.

---

# SELECT From Multiple Tables

Example:

```sql
SELECT
    s.name,
    d.department_name
FROM students AS s
JOIN departments AS d
    ON s.department_id = d.department_id;
```

Aliases make the query easier to read.

---

# SELECT From Another Database

You can specify the database name.

Syntax:

```sql
SELECT *
FROM database_name.table_name;
```

Example:

```sql
SELECT *
FROM company.employees;
```

This allows you to query a table without first switching the current database.

---

# SELECT With DISTINCT and ORDER BY

Example:

```sql
SELECT DISTINCT department
FROM employees
ORDER BY department ASC;
```

---

# SELECT With DISTINCT and LIMIT

```sql
SELECT DISTINCT department
FROM employees
LIMIT 5;
```

---

# SELECT With ORDER BY and LIMIT

```sql
SELECT *
FROM employees
ORDER BY salary DESC
LIMIT 10;
```

This is a common pattern for retrieving the highest-paid employees.

---

# Find the Highest Salary

```sql
SELECT *
FROM employees
ORDER BY salary DESC
LIMIT 1;
```

---

# Find the Lowest Salary

```sql
SELECT *
FROM employees
ORDER BY salary ASC
LIMIT 1;
```

---

# Find Top 5 Salaries

```sql
SELECT *
FROM employees
ORDER BY salary DESC
LIMIT 5;
```

---

# Find Employees From a Department

```sql
SELECT *
FROM employees
WHERE department = 'IT';
```

---

# Find Employees With Salary Range

```sql
SELECT *
FROM employees
WHERE salary BETWEEN 30000 AND 60000;
```

---

# Find Employees With Specific Departments

```sql
SELECT *
FROM employees
WHERE department IN ('IT', 'HR', 'Finance');
```

---

# Find Names Starting With A

```sql
SELECT *
FROM employees
WHERE employee_name LIKE 'A%';
```

---

# Find Names Ending With A

```sql
SELECT *
FROM employees
WHERE employee_name LIKE '%a';
```

---

# Find Names Containing "an"

```sql
SELECT *
FROM employees
WHERE employee_name LIKE '%an%';
```

---

# SELECT With COUNT

```sql
SELECT COUNT(*) AS total_students
FROM students;
```

Example result:

```text
+---------------+
| total_students|
+---------------+
| 100           |
+---------------+
```

---

# SELECT With SUM

```sql
SELECT SUM(salary) AS total_salary
FROM employees;
```

---

# SELECT With AVG

```sql
SELECT AVG(salary) AS average_salary
FROM employees;
```

---

# SELECT With MIN

```sql
SELECT MIN(salary) AS minimum_salary
FROM employees;
```

---

# SELECT With MAX

```sql
SELECT MAX(salary) AS maximum_salary
FROM employees;
```

Aggregate functions are covered in:

```text
functions/04-aggregate-functions.md
```

---

# SELECT With Subquery

A `SELECT` statement can contain another `SELECT`.

Example:

```sql
SELECT *
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);
```

This returns employees whose salary is above the average salary.

Subqueries are covered in:

```text
advanced/01-subqueries.md
```

---

# SELECT Execution Order

Although we usually write a query like:

```sql
SELECT
FROM
WHERE
GROUP BY
HAVING
ORDER BY
LIMIT;
```

MySQL logically processes the query in an order similar to:

```text
FROM
  ↓
WHERE
  ↓
GROUP BY
  ↓
HAVING
  ↓
SELECT
  ↓
ORDER BY
  ↓
LIMIT
```

Understanding this helps explain many SQL behaviors.

---

# Example of Execution Order

Query:

```sql
SELECT
    department,
    COUNT(*) AS total
FROM employees
WHERE salary > 30000
GROUP BY department
HAVING COUNT(*) > 2
ORDER BY total DESC
LIMIT 5;
```

Conceptually:

```text
1. FROM
   ↓
2. WHERE
   ↓
3. GROUP BY
   ↓
4. HAVING
   ↓
5. SELECT
   ↓
6. ORDER BY
   ↓
7. LIMIT
```

---

# Common Mistakes

## Mistake 1: Forgetting FROM

Incorrect:

```sql
SELECT name;
```

unless `name` is an expression or variable available in the query context.

Correct for a table column:

```sql
SELECT name
FROM students;
```

---

## Mistake 2: Using Wrong Column Name

If the table contains:

```text
student_name
```

but you write:

```sql
SELECT name
FROM students;
```

MySQL can return an unknown-column error.

Check the structure:

```sql
DESC students;
```

---

## Mistake 3: Incorrect NULL Comparison

Incorrect:

```sql
SELECT *
FROM students
WHERE phone = NULL;
```

Correct:

```sql
SELECT *
FROM students
WHERE phone IS NULL;
```

---

## Mistake 4: Missing Quotes Around Strings

Incorrect:

```sql
SELECT *
FROM students
WHERE course = BCA;
```

Correct:

```sql
SELECT *
FROM students
WHERE course = 'BCA';
```

---

## Mistake 5: Forgetting Parentheses

For complex conditions, use parentheses.

Instead of relying on:

```sql
SELECT *
FROM students
WHERE age >= 18
AND course = 'BCA'
OR course = 'BBA';
```

write:

```sql
SELECT *
FROM students
WHERE age >= 18
AND (course = 'BCA' OR course = 'BBA');
```

This makes the intended logic explicit.

---

## Mistake 6: Using SELECT * Everywhere

While:

```sql
SELECT *
FROM students;
```

is useful for learning and exploration, application code should often request only the columns it needs.

Prefer:

```sql
SELECT id, name, course
FROM students;
```

---

# Best Practices

## 1. Select Only Required Columns

Prefer:

```sql
SELECT id, name, email
FROM users;
```

when those are the only fields required.

---

## 2. Use Meaningful Aliases

Good:

```sql
SELECT
    salary * 12 AS annual_salary
FROM employees;
```

---

## 3. Use Table Aliases in Joins

Good:

```sql
SELECT
    s.name,
    d.department_name
FROM students AS s
JOIN departments AS d
    ON s.department_id = d.department_id;
```

---

## 4. Use Parentheses for Complex Conditions

Example:

```sql
WHERE age >= 18
AND (course = 'BCA' OR course = 'BBA');
```

---

## 5. Use ORDER BY When Result Order Matters

Do not assume rows are returned in a particular order unless you specify:

```sql
ORDER BY
```

---

## 6. Use LIMIT for Large Result Sets

Example:

```sql
SELECT *
FROM products
LIMIT 50;
```

---

## 7. Use WHERE Carefully

Always check the condition when querying sensitive data.

---

# Complete Example

Create database:

```sql
CREATE DATABASE IF NOT EXISTS select_practice;

USE select_practice;
```

Create departments:

```sql
CREATE TABLE departments (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(100) NOT NULL UNIQUE
);
```

Create employees:

```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    department_id INT,
    salary DECIMAL(10,2),
    age INT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (department_id)
        REFERENCES departments(department_id)
);
```

Insert departments:

```sql
INSERT INTO departments
(department_name)
VALUES
('IT'),
('HR'),
('Finance');
```

Insert employees:

```sql
INSERT INTO employees
(employee_name, email, department_id, salary, age)
VALUES
('Rahul', 'rahul@example.com', 1, 45000, 25),
('Anu', 'anu@example.com', 2, 40000, 24),
('Vimal', 'vimal@example.com', 1, 55000, 28),
('Arun', 'arun@example.com', 3, 50000, 30),
('Priya', 'priya@example.com', 2, 42000, 26);
```

---

## Select Everything

```sql
SELECT *
FROM employees;
```

---

## Select Specific Columns

```sql
SELECT
    employee_id,
    employee_name,
    salary
FROM employees;
```

---

## Select With Alias

```sql
SELECT
    employee_name AS name,
    salary AS monthly_salary
FROM employees;
```

---

## Select With WHERE

```sql
SELECT *
FROM employees
WHERE salary > 45000;
```

---

## Select With AND

```sql
SELECT *
FROM employees
WHERE salary > 40000
AND age >= 25;
```

---

## Select With OR

```sql
SELECT *
FROM employees
WHERE department_id = 1
OR department_id = 2;
```

---

## Select With IN

```sql
SELECT *
FROM employees
WHERE department_id IN (1, 2);
```

---

## Select With BETWEEN

```sql
SELECT *
FROM employees
WHERE salary BETWEEN 40000 AND 50000;
```

---

## Select With LIKE

```sql
SELECT *
FROM employees
WHERE employee_name LIKE 'A%';
```

---

## Select With ORDER BY

```sql
SELECT *
FROM employees
ORDER BY salary DESC;
```

---

## Select With LIMIT

```sql
SELECT *
FROM employees
ORDER BY salary DESC
LIMIT 3;
```

---

## Select With DISTINCT

```sql
SELECT DISTINCT department_id
FROM employees;
```

---

## Select With JOIN

```sql
SELECT
    e.employee_name,
    d.department_name,
    e.salary
FROM employees AS e
INNER JOIN departments AS d
    ON e.department_id = d.department_id;
```

---

## Select With Aggregate Function

```sql
SELECT
    COUNT(*) AS total_employees
FROM employees;
```

---

## Select With GROUP BY

```sql
SELECT
    department_id,
    COUNT(*) AS employee_count
FROM employees
GROUP BY department_id;
```

---

## Select With HAVING

```sql
SELECT
    department_id,
    COUNT(*) AS employee_count
FROM employees
GROUP BY department_id
HAVING COUNT(*) >= 2;
```

---

# Key Points

* `SELECT` retrieves data from tables.
* `*` selects all columns.
* Specific columns can be selected by name.
* `AS` creates column aliases.
* Table aliases simplify complex queries.
* `WHERE` filters rows.
* `DISTINCT` removes duplicate result values.
* `ORDER BY` sorts results.
* `LIMIT` restricts the number of returned rows.
* `BETWEEN` checks a range.
* `IN` checks a list of values.
* `LIKE` performs pattern matching.
* `%` represents zero or more characters.
* `_` represents one character.
* `IS NULL` checks for `NULL`.
* `IS NOT NULL` checks for non-NULL values.
* `AND`, `OR`, and `NOT` combine conditions.
* `CASE` provides conditional logic.
* `GROUP BY` groups rows.
* `HAVING` filters groups.
* `JOIN` retrieves related data from multiple tables.
* Aggregate functions such as `COUNT`, `SUM`, `AVG`, `MIN`, and `MAX` can be used with `SELECT`.
* `SELECT` can also contain expressions, functions, and subqueries.

---

# Quick Revision

Basic:

```sql
SELECT *
FROM students;
```

Specific columns:

```sql
SELECT name, age
FROM students;
```

Condition:

```sql
SELECT *
FROM students
WHERE age >= 18;
```

Sorting:

```sql
SELECT *
FROM students
ORDER BY age DESC;
```

Unique:

```sql
SELECT DISTINCT course
FROM students;
```

Limit:

```sql
SELECT *
FROM students
LIMIT 10;
```

Pattern:

```sql
SELECT *
FROM students
WHERE name LIKE 'A%';
```

Range:

```sql
SELECT *
FROM students
WHERE age BETWEEN 18 AND 25;
```

List:

```sql
SELECT *
FROM students
WHERE course IN ('BCA', 'BBA');
```

NULL:

```sql
SELECT *
FROM students
WHERE phone IS NULL;
```

Grouping:

```sql
SELECT course, COUNT(*)
FROM students
GROUP BY course;
```

Join:

```sql
SELECT
    s.name,
    d.department_name
FROM students s
JOIN departments d
    ON s.department_id = d.department_id;
```

---

# Practice

Use the `select_practice` database created above.

## Question 1

Display all employees.

```sql
SELECT *
FROM employees;
```

---

## Question 2

Display only employee name and salary.

```sql
SELECT
    employee_name,
    salary
FROM employees;
```

---

## Question 3

Find employees with salary greater than 45000.

```sql
SELECT *
FROM employees
WHERE salary > 45000;
```

---

## Question 4

Find employees aged between 25 and 30.

```sql
SELECT *
FROM employees
WHERE age BETWEEN 25 AND 30;
```

---

## Question 5

Find employees whose names start with `A`.

```sql
SELECT *
FROM employees
WHERE employee_name LIKE 'A%';
```

---

## Question 6

Find employees from IT or HR.

```sql
SELECT *
FROM employees
WHERE department_id IN (1, 2);
```

---

## Question 7

Display employees from highest salary to lowest salary.

```sql
SELECT *
FROM employees
ORDER BY salary DESC;
```

---

## Question 8

Display the top 3 highest-paid employees.

```sql
SELECT *
FROM employees
ORDER BY salary DESC
LIMIT 3;
```

---

## Question 9

Display unique department IDs.

```sql
SELECT DISTINCT department_id
FROM employees;
```

---

## Question 10

Display employee names with their department names.

```sql
SELECT
    e.employee_name,
    d.department_name
FROM employees AS e
INNER JOIN departments AS d
    ON e.department_id = d.department_id;
```