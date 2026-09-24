````markdown
# MySQL Data Types

A **data type** defines the kind of value that a column can store.

Choosing the correct data type is important for:

- Data accuracy
- Storage efficiency
- Performance
- Data validation
- Database design

---

## Table of Contents

- [What is a Data Type?](#what-is-a-data-type)
- [Numeric Data Types](#numeric-data-types)
- [Integer Types](#integer-types)
- [TINYINT](#tinyint)
- [SMALLINT](#smallint)
- [MEDIUMINT](#mediumint)
- [INT](#int)
- [BIGINT](#bigint)
- [DECIMAL](#decimal)
- [FLOAT](#float)
- [DOUBLE](#double)
- [String Data Types](#string-data-types)
- [CHAR](#char)
- [VARCHAR](#varchar)
- [TEXT](#text)
- [TINYTEXT](#tinytext)
- [MEDIUMTEXT](#mediumtext)
- [LONGTEXT](#longtext)
- [Binary Data Types](#binary-data-types)
- [BINARY](#binary)
- [VARBINARY](#varbinary)
- [BLOB](#blob)
- [Date and Time Data Types](#date-and-time-data-types)
- [DATE](#date)
- [TIME](#time)
- [DATETIME](#datetime)
- [TIMESTAMP](#timestamp)
- [YEAR](#year)
- [Boolean Data Type](#boolean-data-type)
- [ENUM](#enum)
- [SET](#set)
- [JSON](#json)
- [Spatial Data Types](#spatial-data-types)
- [CHAR vs VARCHAR](#char-vs-varchar)
- [VARCHAR vs TEXT](#varchar-vs-text)
- [DECIMAL vs FLOAT vs DOUBLE](#decimal-vs-float-vs-double)
- [DATE vs DATETIME vs TIMESTAMP](#date-vs-datetime-vs-timestamp)
- [Choosing the Right Data Type](#choosing-the-right-data-type)
- [Practical Examples](#practical-examples)
- [Complete Example](#complete-example)
- [Best Practices](#best-practices)
- [Key Points](#key-points)
- [Quick Revision](#quick-revision)
- [Practice](#practice)

---

# What is a Data Type?

A data type tells MySQL what kind of value a column can store.

Example:

```sql
CREATE TABLE students (
    id INT,
    name VARCHAR(100),
    age INT,
    birth_date DATE
);
````

Here:

```text
id          → INT
name        → VARCHAR
age         → INT
birth_date  → DATE
```

Each column is designed to store a particular type of data.

---

# Main MySQL Data Type Categories

MySQL data types can be broadly grouped into:

```text
Numeric
   ↓
String
   ↓
Binary
   ↓
Date and Time
   ↓
Boolean
   ↓
Enumeration
   ↓
JSON
   ↓
Spatial
```

---

# Numeric Data Types

Numeric data types are used to store numbers.

They can be divided into:

```text
Integer Types
   ↓
TINYINT
SMALLINT
MEDIUMINT
INT
BIGINT

Fixed / Approximate Decimal Types
   ↓
DECIMAL
FLOAT
DOUBLE
```

---

# Integer Types

Integer types store whole numbers.

Common integer types:

| Type      | General Use           |
| --------- | --------------------- |
| TINYINT   | Very small integers   |
| SMALLINT  | Small integers        |
| MEDIUMINT | Medium-sized integers |
| INT       | Normal integers       |
| BIGINT    | Very large integers   |

---

# TINYINT

`TINYINT` is used for relatively small integer values.

Syntax:

```sql
age TINYINT
```

Example:

```sql
CREATE TABLE students (
    id INT,
    age TINYINT
);
```

Typical use cases:

* Age
* Small counters
* Status flags

A common convention is:

```text
0 → false
1 → true
```

when using `TINYINT` for Boolean-like values.

---

# SMALLINT

`SMALLINT` stores a larger range of integer values than `TINYINT`.

Example:

```sql
CREATE TABLE products (
    id INT,
    quantity SMALLINT
);
```

Useful when the values are larger than what is appropriate for `TINYINT` but do not require `INT`.

---

# MEDIUMINT

`MEDIUMINT` provides a range between `SMALLINT` and `INT`.

Example:

```sql
CREATE TABLE statistics (
    total_views MEDIUMINT
);
```

It is less commonly used than `INT`.

---

# INT

`INT` is one of the most commonly used integer data types.

Example:

```sql
CREATE TABLE employees (
    id INT,
    age INT,
    department_id INT
);
```

Common uses:

* IDs
* Age
* Quantity
* Counters
* Department IDs
* Numeric values without decimals

---

# BIGINT

`BIGINT` is used when very large integer values are required.

Example:

```sql
CREATE TABLE transactions (
    transaction_id BIGINT
);
```

Common use cases:

* Very large identifiers
* Large counters
* High-volume systems
* Large numeric ranges

---

# Signed and Unsigned Integer Types

MySQL integer types can be `SIGNED` or `UNSIGNED`.

A signed integer supports negative and positive values.

An unsigned integer supports only zero and positive values.

Example:

```sql
CREATE TABLE products (
    quantity INT UNSIGNED
);
```

This is useful when negative values do not make sense.

For example:

```text
Quantity
0
1
2
3
...
```

A negative quantity would not normally be valid.

---

# DECIMAL

`DECIMAL` stores exact fixed-point numeric values.

It is commonly used for:

* Money
* Salary
* Price
* Tax
* Discounts
* Financial values

Syntax:

```sql
DECIMAL(M,D)
```

Where:

```text
M → Total number of digits
D → Number of digits after decimal point
```

Example:

```sql
price DECIMAL(10,2)
```

This allows:

```text
12345678.90
```

as a possible maximum-format value within the specified precision.

---

## DECIMAL Example

```sql
CREATE TABLE products (
    id INT,
    name VARCHAR(100),
    price DECIMAL(10,2)
);
```

Insert:

```sql
INSERT INTO products (id, name, price)
VALUES (1, 'Laptop', 59999.99);
```

---

# FLOAT

`FLOAT` stores approximate floating-point values.

Example:

```sql
temperature FLOAT
```

It can be useful for measurements where approximate floating-point representation is acceptable.

Example:

```sql
CREATE TABLE weather (
    temperature FLOAT
);
```

---

# DOUBLE

`DOUBLE` stores double-precision floating-point values.

Example:

```sql
measurement DOUBLE
```

It provides more precision than `FLOAT` but still uses approximate floating-point representation.

---

# DECIMAL vs FLOAT vs DOUBLE

| Type    | Nature                        | Common Use                          |
| ------- | ----------------------------- | ----------------------------------- |
| DECIMAL | Exact fixed-point             | Money and financial data            |
| FLOAT   | Approximate                   | Measurements                        |
| DOUBLE  | Approximate, higher precision | Scientific/statistical calculations |

For financial values, prefer:

```sql
price DECIMAL(10,2)
```

instead of:

```sql
price FLOAT
```

or:

```sql
price DOUBLE
```

when exact decimal representation is required.

---

# String Data Types

String data types are used to store text.

Common types include:

```text
CHAR
VARCHAR
TEXT
TINYTEXT
MEDIUMTEXT
LONGTEXT
```

---

# CHAR

`CHAR` stores fixed-length strings.

Example:

```sql
gender CHAR(1)
```

Possible values:

```text
M
F
```

Another example:

```sql
country_code CHAR(2)
```

Values:

```text
IN
US
UK
```

`CHAR` is useful when values have a predictable fixed length.

---

# VARCHAR

`VARCHAR` stores variable-length strings.

Example:

```sql
name VARCHAR(100)
```

Common uses:

* Names
* Email addresses
* Phone numbers
* Usernames
* Titles
* Addresses
* Product names

Example:

```sql
CREATE TABLE users (
    id INT,
    name VARCHAR(100),
    email VARCHAR(150)
);
```

---

# VARCHAR Example

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(150),
    phone VARCHAR(20)
);
```

Insert:

```sql
INSERT INTO employees
(id, name, email, phone)
VALUES
(1, 'Rahul', 'rahul@example.com', '9876543210');
```

---

# TEXT

`TEXT` is used for larger amounts of text.

Example:

```sql
description TEXT
```

Common use cases:

* Articles
* Comments
* Descriptions
* Long messages
* Notes

Example:

```sql
CREATE TABLE products (
    id INT,
    name VARCHAR(100),
    description TEXT
);
```

---

# TINYTEXT

`TINYTEXT` is a smaller text type.

Example:

```sql
short_description TINYTEXT
```

It is useful when the amount of text is small and bounded.

---

# MEDIUMTEXT

`MEDIUMTEXT` stores larger text than `TEXT`.

Example:

```sql
article_content MEDIUMTEXT
```

Useful for larger articles or documents.

---

# LONGTEXT

`LONGTEXT` is designed for very large text values.

Example:

```sql
document_content LONGTEXT
```

Use it when very large text storage is genuinely required.

---

# Text Type Comparison

| Type       | General Use       |
| ---------- | ----------------- |
| TINYTEXT   | Small text        |
| TEXT       | Normal large text |
| MEDIUMTEXT | Larger text       |
| LONGTEXT   | Very large text   |

For normal application fields such as names and emails, `VARCHAR` is generally preferred.

---

# Binary Data Types

Binary data types store binary values.

Common types:

```text
BINARY
VARBINARY
BLOB
```

---

# BINARY

`BINARY` stores fixed-length binary data.

Example:

```sql
binary_code BINARY(16)
```

---

# VARBINARY

`VARBINARY` stores variable-length binary data.

Example:

```sql
binary_data VARBINARY(255)
```

---

# BLOB

BLOB stands for:

> Binary Large Object

BLOB types are designed for binary data.

Examples:

* Binary content
* Raw file data
* Images or other binary data

MySQL provides several BLOB sizes:

```text
TINYBLOB
BLOB
MEDIUMBLOB
LONGBLOB
```

For large files in modern applications, it is often better to store the file in object/file storage and keep its path or URL in MySQL.

---

# Date and Time Data Types

MySQL provides several date and time data types.

Common types:

```text
DATE
TIME
DATETIME
TIMESTAMP
YEAR
```

---

# DATE

`DATE` stores a date without a time.

Format:

```text
YYYY-MM-DD
```

Example:

```text
2026-08-26
```

SQL:

```sql
birth_date DATE
```

Example:

```sql
CREATE TABLE students (
    id INT,
    name VARCHAR(100),
    birth_date DATE
);
```

Insert:

```sql
INSERT INTO students
VALUES
(1, 'Rahul', '2005-08-15');
```

---

# TIME

`TIME` stores a time value.

Example:

```text
14:30:00
```

SQL:

```sql
start_time TIME
```

Example:

```sql
CREATE TABLE classes (
    id INT,
    start_time TIME
);
```

Insert:

```sql
INSERT INTO classes
VALUES
(1, '09:30:00');
```

---

# DATETIME

`DATETIME` stores both date and time.

Format:

```text
YYYY-MM-DD HH:MM:SS
```

Example:

```text
2026-08-26 14:30:00
```

SQL:

```sql
created_at DATETIME
```

Example:

```sql
CREATE TABLE orders (
    order_id INT,
    order_date DATETIME
);
```

Insert:

```sql
INSERT INTO orders
VALUES
(1, '2026-08-26 14:30:00');
```

---

# TIMESTAMP

`TIMESTAMP` stores date and time and is commonly used for event timestamps.

Example:

```sql
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

This can automatically record the time when a row is created.

Example:

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Insert:

```sql
INSERT INTO users (name)
VALUES ('Rahul');
```

The `created_at` value can be automatically generated.

---

# DATETIME vs TIMESTAMP

Both store date and time, but they have different characteristics.

| DATETIME                                                                    | TIMESTAMP                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------- |
| Stores date and time                                                        | Stores date and time                                      |
| Common for business/application dates                                       | Common for event timestamps                               |
| Wider date range                                                            | More limited date range                                   |
| Does not perform automatic timezone conversion in the same way as TIMESTAMP | MySQL handles TIMESTAMP with session time zone conversion |

For typical application fields:

```text
created_at
updated_at
```

`TIMESTAMP` is often convenient.

For business dates/times where timezone conversion behavior should not be applied:

```text
appointment_at
event_at
```

`DATETIME` may be more appropriate.

The exact choice depends on the application's timezone requirements.

---

# YEAR

`YEAR` stores a year.

Example:

```sql
birth_year YEAR
```

Example value:

```text
2000
```

Example table:

```sql
CREATE TABLE students (
    id INT,
    name VARCHAR(100),
    birth_year YEAR
);
```

---

# Boolean Data Type

MySQL supports `BOOLEAN` and `BOOL` as aliases for `TINYINT(1)`.

Example:

```sql
is_active BOOLEAN
```

Common values:

```text
TRUE
FALSE
```

Example:

```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE
);
```

You can insert:

```sql
INSERT INTO users (id, name, is_active)
VALUES
(1, 'Rahul', TRUE),
(2, 'Anu', FALSE);
```

Internally, MySQL commonly represents these as:

```text
TRUE  → 1
FALSE → 0
```

---

# ENUM

`ENUM` allows a column to store one value from a predefined list.

Example:

```sql
status ENUM('active', 'inactive', 'pending')
```

Example table:

```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    status ENUM('active', 'inactive', 'pending')
);
```

Insert:

```sql
INSERT INTO users
VALUES
(1, 'Rahul', 'active');
```

Another valid value:

```sql
INSERT INTO users
VALUES
(2, 'Anu', 'pending');
```

Only values defined by the `ENUM` are allowed.

---

# ENUM Example

```sql
CREATE TABLE orders (
    id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    status ENUM('pending', 'confirmed', 'shipped', 'delivered', 'cancelled')
);
```

Example:

```sql
INSERT INTO orders
VALUES
(1, 'Rahul', 'confirmed');
```

---

# SET

`SET` allows a column to contain zero or more values from a predefined list.

Example:

```sql
skills SET('Java', 'Python', 'MySQL', 'JavaScript')
```

Example:

```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    skills SET('Java', 'Python', 'MySQL', 'JavaScript')
);
```

Insert multiple values:

```sql
INSERT INTO employees
VALUES
(
    1,
    'Rahul',
    'Java,MySQL'
);
```

`SET` is less commonly used in application schemas than a normalized relational design.

---

# JSON

MySQL supports the `JSON` data type for storing JSON documents.

Example:

```sql
details JSON
```

Create table:

```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    details JSON
);
```

Insert JSON:

```sql
INSERT INTO users
VALUES
(
    1,
    'Rahul',
    '{"city": "Coimbatore", "age": 21}'
);
```

Retrieve:

```sql
SELECT *
FROM users;
```

---

# JSON Example

Suppose the JSON value is:

```json
{
    "city": "Coimbatore",
    "age": 21,
    "skills": [
        "JavaScript",
        "MySQL"
    ]
}
```

You can query JSON values using MySQL JSON functions and operators.

Example:

```sql
SELECT JSON_EXTRACT(
    details,
    '$.city'
)
FROM users;
```

Modern MySQL also supports the `->` and `->>` operators for JSON extraction.

Example:

```sql
SELECT details->>'$.city'
FROM users;
```

---

# Spatial Data Types

MySQL also supports spatial data types for geographic and geometric information.

Examples include:

```text
GEOMETRY
POINT
LINESTRING
POLYGON
MULTIPOINT
MULTILINESTRING
MULTIPOLYGON
GEOMETRYCOLLECTION
```

Example:

```sql
location POINT
```

These types are useful in applications involving:

* Maps
* Geographic coordinates
* Location-based services
* Spatial queries

Example:

```sql
CREATE TABLE locations (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    location POINT
);
```

---

# CHAR vs VARCHAR

## CHAR

Fixed-length string.

```sql
country_code CHAR(2)
```

Example:

```text
IN
US
UK
```

## VARCHAR

Variable-length string.

```sql
name VARCHAR(100)
```

Example:

```text
Rahul
Anu
Vimal
```

---

## Comparison

| CHAR                                       | VARCHAR                                                     |
| ------------------------------------------ | ----------------------------------------------------------- |
| Fixed-length                               | Variable-length                                             |
| Good for fixed-size values                 | Good for variable-size values                               |
| Can be useful for codes                    | Common for names and text                                   |
| May use fixed-size storage characteristics | Storage depends on actual value length plus length metadata |

For most normal user-entered text, `VARCHAR` is commonly used.

---

# VARCHAR vs TEXT

| VARCHAR                                   | TEXT                                        |
| ----------------------------------------- | ------------------------------------------- |
| Variable-length string                    | Larger text storage                         |
| Length can be explicitly defined          | Text-oriented type                          |
| Common for names, emails, titles          | Common for descriptions and long text       |
| Often easier to index with normal indexes | Indexing can have additional considerations |

Example:

```sql
name VARCHAR(100)
```

Use:

```sql
description TEXT
```

for larger text when appropriate.

---

# DECIMAL vs FLOAT vs DOUBLE

## DECIMAL

Exact fixed-point numeric value.

Use for:

```text
Price
Salary
Tax
Money
```

Example:

```sql
salary DECIMAL(10,2)
```

## FLOAT

Approximate floating-point value.

Useful for some measurements.

```sql
temperature FLOAT
```

## DOUBLE

Approximate floating-point value with higher precision than `FLOAT`.

```sql
measurement DOUBLE
```

---

# DATE vs DATETIME vs TIMESTAMP

## DATE

Only date:

```text
2026-08-26
```

Example:

```sql
birth_date DATE
```

## TIME

Only time:

```text
14:30:00
```

Example:

```sql
start_time TIME
```

## DATETIME

Date + time:

```text
2026-08-26 14:30:00
```

Example:

```sql
appointment_at DATETIME
```

## TIMESTAMP

Date + time, commonly useful for event timestamps.

Example:

```sql
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

---

# Choosing the Right Data Type

Choosing a data type depends on the data being stored.

| Requirement              | Recommended Type |
| ------------------------ | ---------------- |
| Normal ID                | INT              |
| Very large ID            | BIGINT           |
| Age                      | TINYINT or INT   |
| Quantity                 | INT              |
| Price                    | DECIMAL          |
| Salary                   | DECIMAL          |
| Percentage               | DECIMAL          |
| Name                     | VARCHAR          |
| Email                    | VARCHAR          |
| Phone Number             | VARCHAR          |
| Short Code               | CHAR             |
| Description              | TEXT             |
| Birth Date               | DATE             |
| Start Time               | TIME             |
| Appointment Date/Time    | DATETIME         |
| Created Timestamp        | TIMESTAMP        |
| Boolean Flag             | BOOLEAN          |
| Predefined single status | ENUM or VARCHAR  |
| JSON document            | JSON             |
| Geographic point         | POINT            |

---

# Phone Number Data Type

Phone numbers should generally be stored as strings rather than integers.

Use:

```sql
phone VARCHAR(20)
```

instead of:

```sql
phone BIGINT
```

Reasons include:

* Leading zeros may be significant.
* International prefixes may contain `+`.
* Phone numbers are identifiers, not quantities.
* Formatting may vary.

Example:

```text
+91 9876543210
```

A numeric data type is not appropriate for storing this representation.

---

# ZIP Code / Postal Code

Postal codes are generally better stored as strings.

Example:

```sql
postal_code VARCHAR(10)
```

Do not automatically assume postal codes should be integers because leading zeros can be meaningful.

---

# Age

Age is a numeric value.

Example:

```sql
age TINYINT
```

or:

```sql
age INT
```

For many applications, storing `birth_date DATE` is better than storing age because age changes over time.

Example:

```sql
birth_date DATE
```

Then calculate the current age when needed.

---

# Money

For money, use:

```sql
DECIMAL(10,2)
```

Example:

```sql
price DECIMAL(10,2)
```

Avoid using `FLOAT` for values that require exact decimal calculations.

---

# Percentage

A percentage can be stored using `DECIMAL`.

Example:

```sql
discount DECIMAL(5,2)
```

Possible values:

```text
0.00
10.50
25.00
100.00
```

The exact precision should be chosen based on the application's requirements.

---

# Date of Birth

Use:

```sql
birth_date DATE
```

Example:

```sql
birth_date DATE
```

Value:

```text
2005-08-15
```

---

# Created and Updated Timestamps

A common pattern is:

```sql
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

For applications that also need an update timestamp, MySQL can use:

```sql
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP
```

Example:

```sql
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);
```

---

# Practical Example: Student Table

```sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    phone VARCHAR(20),
    age TINYINT UNSIGNED,
    birth_date DATE,
    course VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Data types:

```text
id          → INT
name        → VARCHAR
email       → VARCHAR
phone       → VARCHAR
age         → TINYINT
birth_date  → DATE
course      → VARCHAR
is_active   → BOOLEAN
created_at  → TIMESTAMP
```

---

# Practical Example: Product Table

```sql
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(150) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT UNSIGNED DEFAULT 0,
    sku VARCHAR(50) UNIQUE,
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# Practical Example: Employee Table

```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    phone VARCHAR(20),
    birth_date DATE,
    salary DECIMAL(12,2),
    department_id INT,
    is_active BOOLEAN DEFAULT TRUE,
    joining_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# Complete Example

Create database:

```sql
CREATE DATABASE IF NOT EXISTS datatype_demo;

USE datatype_demo;
```

Create table:

```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    phone VARCHAR(20),
    age TINYINT UNSIGNED,
    salary DECIMAL(12,2),
    joining_date DATE,
    login_time TIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    skills SET('Java', 'Python', 'MySQL', 'JavaScript'),
    additional_info JSON
);
```

Insert data:

```sql
INSERT INTO employees
(
    employee_name,
    email,
    phone,
    age,
    salary,
    joining_date,
    login_time,
    is_active,
    skills,
    additional_info
)
VALUES
(
    'Rahul',
    'rahul@example.com',
    '+919876543210',
    25,
    45000.00,
    '2025-08-01',
    '09:30:00',
    TRUE,
    'Java,MySQL',
    '{"city": "Coimbatore", "experience": 2}'
);
```

View data:

```sql
SELECT *
FROM employees;
```

Describe the table:

```sql
DESC employees;
```

---

# Data Type Conversion

MySQL can convert values between compatible data types when required.

Example:

```sql
SELECT CAST('2026-08-26' AS DATE);
```

Another example:

```sql
SELECT CAST('100' AS UNSIGNED);
```

`CAST()` is useful when you need explicit conversion.

---

# Best Practices

## 1. Choose the Smallest Suitable Type

Do not automatically use `BIGINT` for every numeric value.

Choose a type appropriate for the expected range.

---

## 2. Use DECIMAL for Exact Financial Values

Example:

```sql
price DECIMAL(10,2)
```

---

## 3. Store Phone Numbers as Strings

Use:

```sql
phone VARCHAR(20)
```

rather than numeric types.

---

## 4. Store Postal Codes as Strings

Use:

```sql
postal_code VARCHAR(10)
```

when leading zeros or non-numeric formats may matter.

---

## 5. Prefer Birth Date Over Age

Instead of:

```sql
age INT
```

consider:

```sql
birth_date DATE
```

when the application needs a person's actual date of birth.

Age can then be calculated when required.

---

## 6. Use VARCHAR for Normal Text

Examples:

```sql
name VARCHAR(100)
email VARCHAR(150)
city VARCHAR(100)
```

---

## 7. Use TEXT for Larger Text

Example:

```sql
description TEXT
```

---

## 8. Use Appropriate Date/Time Types

Choose based on whether you need:

```text
DATE
TIME
DATETIME
TIMESTAMP
```

---

## 9. Do Not Store Everything as VARCHAR

Avoid designs such as:

```sql
age VARCHAR(10)
price VARCHAR(20)
birth_date VARCHAR(30)
```

when the values have known semantic types.

Using proper data types improves validation and makes database operations easier.

---

# Common Mistakes

## Mistake 1: Storing Money as VARCHAR

Bad:

```sql
price VARCHAR(20)
```

Better:

```sql
price DECIMAL(10,2)
```

---

## Mistake 2: Storing Phone Numbers as INT

Bad:

```sql
phone BIGINT
```

Better:

```sql
phone VARCHAR(20)
```

---

## Mistake 3: Storing Dates as VARCHAR

Bad:

```sql
birth_date VARCHAR(20)
```

Better:

```sql
birth_date DATE
```

---

## Mistake 4: Using FLOAT for Financial Values

Bad:

```sql
salary FLOAT
```

Better:

```sql
salary DECIMAL(12,2)
```

when exact decimal representation is required.

---

## Mistake 5: Using TEXT for Every String

Bad:

```sql
name TEXT
email TEXT
city TEXT
```

Usually better:

```sql
name VARCHAR(100)
email VARCHAR(150)
city VARCHAR(100)
```

---

# Key Points

* A data type defines what kind of value a column can store.
* MySQL provides numeric, string, binary, date/time, JSON, spatial, and other data types.
* `INT` is commonly used for whole numbers and identifiers.
* `BIGINT` is used when a larger integer range is required.
* `DECIMAL` is preferred for exact financial values.
* `FLOAT` and `DOUBLE` use approximate floating-point representation.
* `CHAR` is used for fixed-length strings.
* `VARCHAR` is used for variable-length strings.
* `TEXT` is used for larger text values.
* `DATE` stores dates.
* `TIME` stores times.
* `DATETIME` stores date and time.
* `TIMESTAMP` is commonly used for event timestamps.
* `BOOLEAN` is represented by MySQL as an alias of `TINYINT(1)`.
* `ENUM` restricts a value to one item from a predefined list.
* `SET` allows multiple values from a predefined list.
* `JSON` stores JSON documents.
* `POINT` and other spatial types store geographic/geometric data.
* Phone numbers should generally be stored as strings.
* Postal codes should generally be stored as strings.
* Money should generally use `DECIMAL`.
* Birth dates should generally use `DATE`.
* Choosing appropriate data types improves database design.

---

# Quick Revision

```text
NUMERIC
│
├── TINYINT
├── SMALLINT
├── MEDIUMINT
├── INT
├── BIGINT
├── DECIMAL
├── FLOAT
└── DOUBLE

STRING
│
├── CHAR
├── VARCHAR
├── TINYTEXT
├── TEXT
├── MEDIUMTEXT
└── LONGTEXT

BINARY
│
├── BINARY
├── VARBINARY
├── TINYBLOB
├── BLOB
├── MEDIUMBLOB
└── LONGBLOB

DATE / TIME
│
├── DATE
├── TIME
├── DATETIME
├── TIMESTAMP
└── YEAR

OTHER
│
├── BOOLEAN
├── ENUM
├── SET
├── JSON
└── SPATIAL TYPES
```

Common choices:

```text
ID          → INT / BIGINT
Name        → VARCHAR
Email       → VARCHAR
Phone       → VARCHAR
Age         → TINYINT / INT
Price       → DECIMAL
Salary      → DECIMAL
Description → TEXT
Birth Date  → DATE
Time        → TIME
Date + Time → DATETIME
Created At  → TIMESTAMP
True/False  → BOOLEAN
JSON Data   → JSON
Location    → POINT
```

---

# Practice

Create the database:

```sql
CREATE DATABASE IF NOT EXISTS datatype_practice;

USE datatype_practice;
```

Create a products table:

```sql
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(150) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    quantity INT UNSIGNED DEFAULT 0,
    sku VARCHAR(50) UNIQUE,
    manufacture_date DATE,
    available_time TIME,
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Insert data:

```sql
INSERT INTO products
(
    product_name,
    description,
    price,
    quantity,
    sku,
    manufacture_date,
    available_time,
    is_available
)
VALUES
(
    'Laptop',
    'Business laptop with 16GB RAM',
    59999.99,
    10,
    'LAP001',
    '2026-01-15',
    '09:00:00',
    TRUE
),
(
    'Mouse',
    'Wireless optical mouse',
    799.50,
    50,
    'MOU001',
    '2026-02-10',
    '10:00:00',
    TRUE
);
```

View the data:

```sql
SELECT *
FROM products;
```

Check the structure:

```sql
DESC products;
```

Check specific data:

```sql
SELECT
    product_name,
    price,
    quantity,
    manufacture_date,
    is_available
FROM products;
```

Try inserting another product:

```sql
INSERT INTO products
(
    product_name,
    price,
    quantity,
    sku
)
VALUES
(
    'Keyboard',
    1499.99,
    25,
    'KEY001'
);
```

Then:

```sql
SELECT *
FROM products;
```