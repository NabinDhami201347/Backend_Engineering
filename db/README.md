# [Database Models](https://www.youtube.com/watch?v=9mdadNspP_M&t=1125s&ab_channel=High-PerformanceProgramming)

![Database Model](/images/01.png)

**_Choosing the data model for an application is essential, as it can have a profound impact on performance, scalability, and maintainability. While relational databases are still the most popular, alternative models such as graph or wide-column databases may be better suited for certain scenarios._**

## Key-Value Database 🐇

![Hash Function](/images/image1.png)

![Caching](/images/picture1.png)

> **_Caching is all about quickly accessing frequently used data, and key-value stores are perfectly designed to do just that. Key-value stores are perfect for caching, because they can quickly retrieve data using a unique key, rather than searching through a large dataset. Also, key-value stores allow for many data types as value, including linked lists and hash tables._**

## Wide-column Database 🎡

## Document Database 📑

## Relational Database 👑

## Graph Database 🍇

---

## SQL (Structured Query Language) and NoSQL (Not only SQL)

SQL (Structured Query Language) and NoSQL (Not only SQL) are two different types of database management systems. They have different data models, structures, and use cases. Here's a comparison of SQL and NoSQL databases:

SQL Databases:

1. Data Model: SQL databases follow a structured data model with a predefined schema. They use tables with rows and columns to store and organize data.
2. Schema: SQL databases have a fixed schema, which means the structure of the data must be defined before inserting data into the tables.
3. Query Language: SQL databases use SQL as the standard query language for defining and manipulating data.
4. ACID Compliance: SQL databases are typically ACID compliant, ensuring data consistency and reliability.
5. Relational Model: SQL databases are based on the relational model, which allows establishing relationships between tables using primary and foreign keys.
6. Scalability: SQL databases can scale vertically (by adding more resources to a single server) or horizontally (by distributing data across multiple servers), but scaling horizontally may require additional effort.

> **_MySQL and PostgreSQL are both widely used relational database management systems (RDBMS). MySQL is known for its performance, scalability, and simplicity, making it popular for web applications. It has a large user community and is easier to work with, but has a more limited set of built-in data types compared to PostgreSQL. On the other hand, PostgreSQL offers robust data integrity, advanced features, and a wide range of built-in data types, making it suitable for complex queries and data-intensive applications. It has a strong community and is often preferred for enterprise use. Choosing between them depends on specific needs such as performance, data integrity, and complexity of the project._**

NoSQL Databases:

1. Data Model: NoSQL databases have a flexible and schema-less data model. They can store unstructured, semi-structured, and structured data.
2. Schema: NoSQL databases are schema-less, allowing for dynamic and ad-hoc changes to the data structure without a predefined schema.
3. Query Language: NoSQL databases use different query languages based on their type (e.g., MongoDB uses a document-based query language, Cassandra uses CQL).
4. ACID Compliance: NoSQL databases sacrifice ACID properties to achieve better scalability and performance. They often prioritize eventual consistency over strict consistency.
5. Non-Relational Model: NoSQL databases use different data models such as key-value, document, columnar, or graph, depending on the specific database type.
6. Scalability: NoSQL databases are designed for horizontal scalability, allowing for easier distribution of data across multiple servers. They can handle large-scale data and high-traffic applications efficiently.

> **_Choosing between SQL and NoSQL databases depends on the specific requirements of your application. SQL databases are generally well-suited for applications that require complex querying, strict data consistency, and structured data. NoSQL databases are preferred when dealing with unstructured or evolving data, high scalability, and flexible data models. It's important to evaluate your application's needs, data structure, and scalability requirements before deciding which type of database to use._**

### [Database Models](https://1levelup.dev/blog/5-database-models)
