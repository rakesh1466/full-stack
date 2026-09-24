````markdown
# WHERE

The `WHERE` clause is used to filter rows based on a condition.

It is one of the most important parts of SQL because it allows you to retrieve, update, or delete only the records that match a specific condition.

---

## Table of Contents

- [What is WHERE?](#what-is-where)
- [Basic Syntax](#basic-syntax)
- [WHERE With SELECT](#where-with-select)
- [Comparison Operators](#comparison-operators)
- [Equal To](#equal-to)
- [Not Equal To](#not-equal-to)
- [Greater Than](#greater-than)
- [Less Than](#less-than)
- [Greater Than or Equal To](#greater-than-or-equal-to)
- [Less Than or Equal To](#less-than-or-equal-to)
- [WHERE With Strings](#where-with-strings)
- [WHERE With Numbers](#where-with-numbers)
- [WHERE With Dates](#where-with-dates)
- [WHERE With AND](#where-with-and)
- [WHERE With OR](#where-with-or)
- [WHERE With NOT](#where-with-not)
- [Combining AND and OR](#combining-and-and-or)
- [WHERE With BETWEEN](#where-with-between)
- [WHERE With IN](#where-with-in)
- [WHERE With NOT IN](#where-with-not-in)
- [WHERE With LIKE](#where-with-like)
- [WHERE With NOT LIKE](#where-with-not-like)
- [WHERE With NULL](#where-with-null)
- [WHERE With IS NULL](#where-with-is-null)
- [WHERE With IS NOT NULL](#where-with-is-not-null)
- [WHERE With Boolean Values](#where-with-boolean-values)
- [WHERE With Expressions](#where-with-expressions)
- [WHERE With Functions](#where-with-functions)
- [WHERE With CASE](#where-with-case)
- [WHERE With Subqueries](#where-with-subqueries)
- [WHERE With UPDATE](#where-with-update)
- [WHERE With DELETE](#where-with-delete)
- [Operator Precedence](#operator-precedence)
- [Complete Example](#complete-example)
- [Common Mistakes](#common-mistakes)
- [Best Practices](#best-practices)
- [Key Points](#key-points)
- [Quick Revision](#quick-revision)
- [Practice](#practice)

---

# What is WHERE?

The `WHERE` clause filters records.

Without `WHERE`:

```sql
SELECT *
FROM employees;
````

MySQL returns all employees.

With `WHERE`:

```sql
SELECT *
FROM employees
WHERE salary > 40000;
```

MySQL returns only employees whose salary is greater than `40000`.

---

# Basic Syntax

```sql
SELECT column1, column2
FROM table_name
WHERE condition;
```

Example:

```sql
SELECT *
FROM students
WHERE age >= 18;
```

---

# WHERE With SELECT

Example table:

```text
students

+----+--------+-----+---------+
| id | name   | age | course  |
+----+--------+-----+---------+
| 1  | Rahul  | 21  | BCA     |
| 2  | Anu    | 22  | BSc CS  |
| 3  | Vimal  | 17  | BBA     |
| 4  | Priya  | 20  | BCA     |
+----+--------+-----+---------+
```

Query:

```sql
SELECT *
FROM students
WHERE age >= 18;
```

Result:

```text
+----+--------+-----+---------+
| id | name   | age | course  |
+----+--------+-----+---------+
| 1  | Rahul  | 21  | BCA     |
| 2  | Anu    | 22  | BSc CS  |
| 4  | Priya  | 20  | BCA     |
+----+--------+-----+---------+
```

---

# Comparison Operators

Common comparison operators:

| Operator | Meaning                  |
| -------- | ------------------------ |
| `=`      | Equal to                 |
| `!=`     | Not equal to             |
| `<>`     | Not equal to             |
| `>`      | Greater than             |
| `<`      | Less than                |
| `>=`     | Greater than or equal to |
| `<=`     | Less than or equal to    |

---

# Equal To

Use:

```sql
=
```

Example:

```sql
SELECT *
FROM students
WHERE age = 21;
```

String example:

```sql
SELECT *
FROM students
WHERE course = 'BCA';
```

---

# Not Equal To

You can use:

```sql
!=
```

or:

```sql
<>
```

Example:

```sql
SELECT *
FROM students
WHERE age != 21;
```

Equivalent:

```sql
SELECT *
FROM students
WHERE age <> 21;
```

---

# Greater Than

Use:

```sql
>
```

Example:

```sql
SELECT *
FROM employees
WHERE salary > 50000;
```

This returns employees whose salary is greater than `50000`.

---

# Less Than

Use:

```sql
<
```

Example:

```sql
SELECT *
FROM students
WHERE age < 18;
```

---

# Greater Than or Equal To

Use:

```sql
>=
```

Example:

```sql
SELECT *
FROM employees
WHERE salary >= 50000;
```

This includes employees with salary exactly `50000`.

---

# Less Than or Equal To

Use:

```sql
<=
```

Example:

```sql
SELECT *
FROM students
WHERE age <= 21;
```

---

# WHERE With Strings

String values should normally be written using quotes.

Example:

```sql
SELECT *
FROM students
WHERE name = 'Rahul';
```

Another:

```sql
SELECT *
FROM employees
WHERE department = 'IT';
```

Incorrect:

```sql
SELECT *
FROM students
WHERE name = Rahul;
```

Correct:

```sql
SELECT *
FROM students
WHERE name = 'Rahul';
```

---

# WHERE With Numbers

Numbers do not need quotes.

Correct:

```sql
SELECT *
FROM students
WHERE age = 21;
```

Avoid:

```sql
SELECT *
FROM students
WHERE age = '21';
```

Although MySQL may perform type conversion in some situations, using the appropriate type consistently is better.

---

# WHERE With Dates

Dates are commonly written using:

```text
YYYY-MM-DD
```

Example:

```sql
SELECT *
FROM employees
WHERE joining_date = '2025-08-01';
```

Date range:

```sql
SELECT *
FROM employees
WHERE joining_date >= '2025-01-01';
```

---

# WHERE With AND

`AND` requires all conditions to be true.

Example:

```sql
SELECT *
FROM employees
WHERE salary > 40000
AND department = 'IT';
```

Both conditions must match.

---

# Multiple AND Conditions

```sql
SELECT *
FROM employees
WHERE salary > 40000
AND age >= 25
AND department = 'IT';
```

All three conditions must be true.

---

# WHERE With OR

`OR` requires at least one condition to be true.

Example:

```sql
SELECT *
FROM students
WHERE course = 'BCA'
OR course = 'BBA';
```

This returns students enrolled in either course.

---

# Multiple OR Conditions

```sql
SELECT *
FROM students
WHERE
    course = 'BCA'
    OR course = 'BBA'
    OR course = 'BSc CS';
```

A cleaner version is often:

```sql
SELECT *
FROM students
WHERE course IN ('BCA', 'BBA', 'BSc CS');
```

---

# WHERE With NOT

`NOT` reverses a condition.

Example:

```sql
SELECT *
FROM students
WHERE NOT course = 'BCA';
```

This returns students whose course is not `BCA`.

Equivalent:

```sql
SELECT *
FROM students
WHERE course <> 'BCA';
```

---

# Combining AND and OR

Consider:

```sql
SELECT *
FROM students
WHERE age >= 18
AND course = 'BCA'
OR course = 'BBA';
```

Because of operator precedence, this is interpreted roughly as:

```text
(age >= 18 AND course = 'BCA')
OR course = 'BBA'
```

If you intend:

```text
age >= 18
AND
(course = 'BCA' OR course = 'BBA')
```

write:

```sql
SELECT *
FROM students
WHERE age >= 18
AND (
    course = 'BCA'
    OR course = 'BBA'
);
```

Use parentheses for clarity.

---

# WHERE With BETWEEN

`BETWEEN` checks whether a value is within a range.

The boundaries are included.

Example:

```sql
SELECT *
FROM employees
WHERE salary BETWEEN 30000 AND 50000;
```

This includes:

```text
30000
40000
50000
```

Equivalent:

```sql
SELECT *
FROM employees
WHERE salary >= 30000
AND salary <= 50000;
```

---

# BETWEEN With Dates

```sql
SELECT *
FROM employees
WHERE joining_date
BETWEEN '2025-01-01' AND '2025-12-31';
```

For `DATETIME` columns, be careful with end-of-day boundaries.

For example:

```sql
WHERE created_at BETWEEN '2026-01-01' AND '2026-01-31'
```

may exclude values later on `2026-01-31` depending on the time component.

A safer half-open range is often:

```sql
WHERE created_at >= '2026-01-01'
AND created_at < '2026-02-01';
```

---

# WHERE With IN

`IN` checks whether a value matches any value in a list.

Example:

```sql
SELECT *
FROM students
WHERE course IN ('BCA', 'BBA');
```

Equivalent to:

```sql
SELECT *
FROM students
WHERE course = 'BCA'
OR course = 'BBA';
```

---

# IN With Numbers

```sql
SELECT *
FROM employees
WHERE department_id IN (1, 2, 3);
```

---

# IN With Strings

```sql
SELECT *
FROM employees
WHERE department IN ('IT', 'HR', 'Finance');
```

---

# IN With Dates

```sql
SELECT *
FROM employees
WHERE joining_date IN (
    '2025-01-01',
    '2025-02-01',
    '2025-03-01'
);
```

---

# WHERE With NOT IN

`NOT IN` excludes matching values.

Example:

```sql
SELECT *
FROM students
WHERE course NOT IN ('BCA', 'BBA');
```

This returns students whose course is neither `BCA` nor `BBA`.

## Important NULL Warning

`NOT IN` can produce unexpected results if the compared expression or list contains `NULL`.

For example:

```sql
WHERE department_id NOT IN (1, 2, NULL)
```

should generally be avoided.

When dealing with nullable columns, explicitly handle `NULL` using:

```sql
IS NULL
```

or:

```sql
IS NOT NULL
```

---

# WHERE With LIKE

`LIKE` is used for pattern matching.

Example:

```sql
SELECT *
FROM students
WHERE name LIKE 'R%';
```

This finds names beginning with `R`.

---

# `%` Wildcard

`%` represents zero or more characters.

Starts with `R`:

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

Contains `rah`:

```sql
WHERE name LIKE '%rah%';
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

Possible matches:

```text
Anu
Ayu
```

depending on the data.

---

# LIKE Examples

Starts with:

```sql
WHERE name LIKE 'A%';
```

Ends with:

```sql
WHERE name LIKE '%a';
```

Contains:

```sql
WHERE name LIKE '%an%';
```

Second character is `a`:

```sql
WHERE name LIKE '_a%';
```

Exactly three characters:

```sql
WHERE name LIKE '___';
```

---

# WHERE With NOT LIKE

```sql
SELECT *
FROM students
WHERE name NOT LIKE 'A%';
```

This excludes names starting with `A`.

---

# WHERE With NULL

`NULL` means missing or unknown.

You cannot reliably compare `NULL` using:

```sql
=
```

or:

```sql
!=
```

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

# WHERE With IS NULL

```sql
SELECT *
FROM students
WHERE phone IS NULL;
```

This returns rows where `phone` has no value.

---

# WHERE With IS NOT NULL

```sql
SELECT *
FROM students
WHERE phone IS NOT NULL;
```

This returns rows where `phone` contains a value.

---

# NULL With Multiple Conditions

Example:

```sql
SELECT *
FROM employees
WHERE phone IS NULL
AND department = 'IT';
```

---

# WHERE With Boolean Values

Suppose:

```sql
is_active BOOLEAN
```

You can query:

```sql
SELECT *
FROM users
WHERE is_active = TRUE;
```

Or:

```sql
SELECT *
FROM users
WHERE is_active = FALSE;
```

You can also commonly write:

```sql
SELECT *
FROM users
WHERE is_active;
```

and:

```sql
SELECT *
FROM users
WHERE NOT is_active;
```

depending on the desired style.

---

# WHERE With Expressions

You can use expressions in conditions.

Example:

```sql
SELECT *
FROM employees
WHERE salary * 12 > 600000;
```

This finds employees whose calculated annual salary exceeds `600000`.

Another:

```sql
SELECT *
FROM products
WHERE price * quantity > 100000;
```

---

# WHERE With Functions

Functions can be used in conditions.

Example:

```sql
SELECT *
FROM students
WHERE LENGTH(name) > 5;
```

Another:

```sql
SELECT *
FROM employees
WHERE UPPER(department) = 'IT';
```

Date example:

```sql
SELECT *
FROM employees
WHERE YEAR(joining_date) = 2025;
```

However, applying a function to an indexed column can sometimes prevent efficient index usage. When performance matters, prefer range conditions where possible.

---

# WHERE With CASE

You can use `CASE` inside a condition, although simpler conditions are usually preferable.

Example:

```sql
SELECT *
FROM employees
WHERE
    CASE
        WHEN department = 'IT' THEN salary
        ELSE 0
    END > 40000;
```

A simpler equivalent for this example is:

```sql
SELECT *
FROM employees
WHERE department = 'IT'
AND salary > 40000;
```

---

# WHERE With Subqueries

A subquery can be used inside `WHERE`.

Example:

```sql
SELECT *
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);
```

This finds employees whose salary is greater than the average salary.

Another example:

```sql
SELECT *
FROM employees
WHERE department_id IN (
    SELECT department_id
    FROM departments
    WHERE department_name = 'IT'
);
```

Subqueries are covered in:

```text
advanced/01-subqueries.md
```

---

# WHERE With UPDATE

`WHERE` is extremely important when updating records.

Example:

```sql
UPDATE employees
SET salary = 50000
WHERE employee_id = 1;
```

Only employee `1` is updated.

Without `WHERE`:

```sql
UPDATE employees
SET salary = 50000;
```

Every employee can be updated.

---

# WHERE With DELETE

Example:

```sql
DELETE FROM employees
WHERE employee_id = 1;
```

Only employee `1` is deleted.

Without `WHERE`:

```sql
DELETE FROM employees;
```

All rows can be deleted.

---

# WHERE With ORDER BY

`WHERE` filters rows before the final sorting.

Example:

```sql
SELECT *
FROM employees
WHERE salary > 40000
ORDER BY salary DESC;
```

Process:

```text
employees
    ↓
WHERE salary > 40000
    ↓
ORDER BY salary DESC
    ↓
result
```

---

# WHERE With LIMIT

Example:

```sql
SELECT *
FROM employees
WHERE department = 'IT'
ORDER BY salary DESC
LIMIT 5;
```

This returns the top five IT employees by salary.

---

# WHERE With DISTINCT

```sql
SELECT DISTINCT department
FROM employees
WHERE salary > 40000;
```

This first filters the rows and then returns unique departments from the result.

---

# WHERE With GROUP BY

Example:

```sql
SELECT
    department,
    COUNT(*) AS employee_count
FROM employees
WHERE salary > 40000
GROUP BY department;
```

Here:

```text
WHERE
```

filters individual rows before grouping.

---

# WHERE vs HAVING

This is an important distinction.

## WHERE

Filters rows before grouping.

```sql
SELECT
    department,
    COUNT(*)
FROM employees
WHERE salary > 40000
GROUP BY department;
```

## HAVING

Filters groups after grouping.

```sql
SELECT
    department,
    COUNT(*) AS employee_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;
```

Simple rule:

```text
WHERE  → filters rows
HAVING → filters groups
```

---

# WHERE With JOIN

`WHERE` can filter joined results.

Example:

```sql
SELECT
    e.employee_name,
    d.department_name,
    e.salary
FROM employees AS e
JOIN departments AS d
    ON e.department_id = d.department_id
WHERE e.salary > 40000;
```

Here:

```text
JOIN
 ↓
Combine related rows
 ↓
WHERE
 ↓
Filter result
```

---

# Operator Precedence

When multiple operators are used, MySQL follows operator precedence rules.

For logical conditions, a useful simplified order is:

```text
NOT
 ↓
AND
 ↓
OR
```

For example:

```sql
WHERE A OR B AND C
```

is interpreted as:

```text
A OR (B AND C)
```

not:

```text
(A OR B) AND C
```

If you want a specific grouping, use parentheses.

```sql
WHERE (A OR B)
AND C
```

---

# Complete Example

Create database:

```sql
CREATE DATABASE IF NOT EXISTS where_practice;

USE where_practice;
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
    city VARCHAR(100),
    phone VARCHAR(20),
    is_active BOOLEAN DEFAULT TRUE,
    joining_date DATE,
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
('Finance'),
('Marketing');
```

Insert employees:

```sql
INSERT INTO employees
(
    employee_name,
    email,
    department_id,
    salary,
    age,
    city,
    phone,
    is_active,
    joining_date
)
VALUES
(
    'Rahul',
    'rahul@example.com',
    1,
    45000,
    25,
    'Coimbatore',
    '9876543210',
    TRUE,
    '2025-01-10'
),
(
    'Anu',
    'anu@example.com',
    2,
    40000,
    24,
    'Chennai',
    '9876543211',
    TRUE,
    '2025-02-15'
),
(
    'Vimal',
    'vimal@example.com',
    1,
    55000,
    28,
    'Coimbatore',
    NULL,
    TRUE,
    '2024-05-20'
),
(
    'Arun',
    'arun@example.com',
    3,
    50000,
    30,
    'Bangalore',
    '9876543213',
    FALSE,
    '2023-03-10'
),
(
    'Priya',
    'priya@example.com',
    2,
    42000,
    26,
    'Chennai',
    NULL,
    TRUE,
    '2025-06-01'
);
```

---

# Basic WHERE Queries

## Salary Greater Than 45000

```sql
SELECT *
FROM employees
WHERE salary > 45000;
```

---

## Salary Greater Than or Equal To 50000

```sql
SELECT *
FROM employees
WHERE salary >= 50000;
```

---

## Salary Less Than 50000

```sql
SELECT *
FROM employees
WHERE salary < 50000;
```

---

## Salary Between 40000 and 50000

```sql
SELECT *
FROM employees
WHERE salary BETWEEN 40000 AND 50000;
```

---

## Employees From IT

```sql
SELECT *
FROM employees
WHERE department_id = 1;
```

---

## Employees From IT or HR

```sql
SELECT *
FROM employees
WHERE department_id IN (1, 2);
```

---

## Employees Not in IT

```sql
SELECT *
FROM employees
WHERE department_id <> 1;
```

---

## Employees From Coimbatore

```sql
SELECT *
FROM employees
WHERE city = 'Coimbatore';
```

---

## Names Starting With A

```sql
SELECT *
FROM employees
WHERE employee_name LIKE 'A%';
```

---

## Names Ending With A

```sql
SELECT *
FROM employees
WHERE employee_name LIKE '%a';
```

---

## Names Containing "vi"

```sql
SELECT *
FROM employees
WHERE employee_name LIKE '%vi%';
```

---

## Employees Without Phone Numbers

```sql
SELECT *
FROM employees
WHERE phone IS NULL;
```

---

## Employees With Phone Numbers

```sql
SELECT *
FROM employees
WHERE phone IS NOT NULL;
```

---

## Active Employees

```sql
SELECT *
FROM employees
WHERE is_active = TRUE;
```

---

## Inactive Employees

```sql
SELECT *
FROM employees
WHERE is_active = FALSE;
```

---

## Employees Older Than 25

```sql
SELECT *
FROM employees
WHERE age > 25;
```

---

## Employees Aged 25 or Above From IT

```sql
SELECT *
FROM employees
WHERE age >= 25
AND department_id = 1;
```

---

## IT or HR Employees With Salary Above 40000

```sql
SELECT *
FROM employees
WHERE salary > 40000
AND department_id IN (1, 2);
```

---

## Employees Who Joined in 2025

Simple year-based query:

```sql
SELECT *
FROM employees
WHERE YEAR(joining_date) = 2025;
```

For an indexed `joining_date`, a range query is often more efficient:

```sql
SELECT *
FROM employees
WHERE joining_date >= '2025-01-01'
AND joining_date < '2026-01-01';
```

---

# WHERE With UPDATE Example

Increase salary for IT employees:

```sql
UPDATE employees
SET salary = salary * 1.10
WHERE department_id = 1;
```

Verify:

```sql
SELECT *
FROM employees
WHERE department_id = 1;
```

---

# WHERE With DELETE Example

Delete inactive employees:

```sql
DELETE FROM employees
WHERE is_active = FALSE;
```

Before deleting, verify:

```sql
SELECT *
FROM employees
WHERE is_active = FALSE;
```

---

# Complex WHERE Example

Find active IT or HR employees who earn at least 40000:

```sql
SELECT *
FROM employees
WHERE is_active = TRUE
AND department_id IN (1, 2)
AND salary >= 40000;
```

---

# Another Complex Example

Find employees who:

* Are at least 25 years old
* Live in Coimbatore or Chennai
* Earn more than 40000

```sql
SELECT *
FROM employees
WHERE age >= 25
AND city IN ('Coimbatore', 'Chennai')
AND salary > 40000;
```

---

# Key Points

* `WHERE` filters rows.
* `WHERE` is commonly used with `SELECT`, `UPDATE`, and `DELETE`.
* `=` checks equality.
* `!=` and `<>` check inequality.
* `>` checks greater than.
* `<` checks less than.
* `>=` checks greater than or equal to.
* `<=` checks less than or equal to.
* `AND` requires all conditions to be true.
* `OR` requires at least one condition to be true.
* `NOT` reverses a condition.
* `BETWEEN` checks an inclusive range.
* `IN` checks a list of values.
* `NOT IN` excludes values but requires care with `NULL`.
* `LIKE` performs pattern matching.
* `%` represents zero or more characters.
* `_` represents exactly one character.
* `IS NULL` checks for missing values.
* `IS NOT NULL` checks for non-NULL values.
* Parentheses should be used to make complex conditions clear.
* `WHERE` filters rows before `GROUP BY`.
* `HAVING` filters grouped results.
* Always use caution when using `WHERE` with `UPDATE` and `DELETE`.

---

# Quick Revision

Basic:

```sql
SELECT *
FROM employees
WHERE salary > 40000;
```

Equal:

```sql
WHERE department = 'IT'
```

Not equal:

```sql
WHERE department <> 'IT'
```

Greater:

```sql
WHERE salary > 40000
```

Less:

```sql
WHERE salary < 40000
```

Range:

```sql
WHERE salary BETWEEN 30000 AND 50000
```

List:

```sql
WHERE department IN ('IT', 'HR')
```

Pattern:

```sql
WHERE name LIKE 'A%'
```

NULL:

```sql
WHERE phone IS NULL
```

AND:

```sql
WHERE age >= 18
AND salary > 30000
```

OR:

```sql
WHERE department = 'IT'
OR department = 'HR'
```

NOT:

```sql
WHERE NOT is_active
```

Complex:

```sql
WHERE age >= 18
AND (
    department = 'IT'
    OR department = 'HR'
);
```

---

# Practice

Use the `where_practice` database.

## Question 1

Find all employees whose salary is greater than `45000`.

```sql
SELECT *
FROM employees
WHERE salary > 45000;
```

---

## Question 2

Find employees whose age is between `25` and `30`.

```sql
SELECT *
FROM employees
WHERE age BETWEEN 25 AND 30;
```

---

## Question 3

Find employees from IT and HR.

```sql
SELECT *
FROM employees
WHERE department_id IN (1, 2);
```

---

## Question 4

Find employees whose names start with `P`.

```sql
SELECT *
FROM employees
WHERE employee_name LIKE 'P%';
```

---

## Question 5

Find employees who do not have a phone number.

```sql
SELECT *
FROM employees
WHERE phone IS NULL;
```

---

## Question 6

Find active employees.

```sql
SELECT *
FROM employees
WHERE is_active = TRUE;
```

---

## Question 7

Find employees from Coimbatore earning more than `40000`.

```sql
SELECT *
FROM employees
WHERE city = 'Coimbatore'
AND salary > 40000;
```

---

## Question 8

Find employees who are either from Coimbatore or Chennai and earn more than `40000`.

```sql
SELECT *
FROM employees
WHERE city IN ('Coimbatore', 'Chennai')
AND salary > 40000;
```

---

## Question 9

Find employees who joined during 2025.

```sql
SELECT *
FROM employees
WHERE joining_date >= '2025-01-01'
AND joining_date < '2026-01-01';
```

---

## Question 10

Find active employees from IT or HR who are at least 25 years old.

```sql
SELECT *
FROM employees
WHERE is_active = TRUE
AND department_id IN (1, 2)
AND age >= 25;
```