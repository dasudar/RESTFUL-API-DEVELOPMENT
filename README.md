# RESTFUL-API-DEVELOPMENT

*COMPANY*: CODTECH IT SOLUTIONS PVT.LTD.

*NAME*: UDAR DAS

*INTERN ID*: CT08DL480

*DOMAIN*: SOFTWARE DEVELOPMENT

*DURATION*: 8 WEEKS

*MENTOR*:  NEELA SANTOSH KUMAR

*INSTRUCTIONS*: DESIGN A RESTFUL API FOR A LIBRARY OR INVENTORY SYSTEM, IMPLEMENTING CRUD OPERATIONS.

# API Documentation – Library System

| Method | Endpoint           | Description                |
|--------|--------------------|----------------------------|
| GET    | `/api/books`       | Get all books              |
| GET    | `/api/books/:id`   | Get a single book by ID    |
| POST   | `/api/books`       | Add a new book             |
| PUT    | `/api/books/:id`   | Update a book by ID        |
| DELETE | `/api/books/:id`   | Delete a book by ID        |

# JSON Book Format:

{
  "id": 1,
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "year": 1988
}

# Setup Instructions:

1. Install Node.js (if not already)

2. Create a project folder and run:
   npm init -y
   npm install express body-parser

#  Future Enhancements: Connecting it to a real database like MongoDB.

![Output](https://github.com/user-attachments/assets/f68dc97e-a763-4b83-8671-d38e7cc120ae)

