# What is MongoDB?

MongoDB is a NoSQL database
It is a document database
It is schemaless

MongoDB data is stored in BSON format
BSON is a binary representation of JSON
It is very quick to serialize and also it maintains types while being stored in the database

## Pros of MongoDB

1. It is schemaless, which makes it very easy to restructure the format of our collections as we continue
2. Read/Write speeds are very quick when performing actions on a single document
3. MongoDB supports embedding documents in other documents (sub-document). This allows us to get all data at once with one read
4. Promote the saying "Data that is accessed together should be stored together"

## Cons of MongoDB

1. Documents have a maximum size of 16 MB
2. This prevents us from storing some data all in one spot. We're forced to reference data (foreign key)
3. MongoDB is a good deal slower than traditional SQL when looking up (joining) other tables

## Embedding vs Referencing

Pros for Embedding:
- Retrieve/Update all pertinent data in one call to one document (FAST. No lookups, joins are required)

Cons for Embedding:
- 16 MB Limit per document (BIG ONE)
- Can result in some data redundancy (Which is fine. Data redundancy enables Mongo to be quick)
- Could result in more information than needed being sent across the wire

Pros for Referencing:
- Avoids data redundancy (We can achieve normalization)
  - 1NF (Must have a primary key and no repeating groups)
  - 2NF (Must be in 1NF, but also no functional dependencies)
  - 3NF (Must be in 2NF, but also no transitive dependencies)
- Helps avoid that 16MB limit
- Smaller document sizes

Cons for Referencing:
- Lookups are SLOW in MongoDB
- If my app heavily requires lookups, SQL will outperform MongoDB

## MongoDB Terminology

- Embedding is storing the contents of another document inside of a document
- Referencing is similar to a foreign key in that we point to another document

SQL vs MongoDB Terms:
- Table -> Collection
- Row -> Document
- Columns -> Fields
- Join -> Lookup
