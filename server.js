const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let books = [
  { id: 1, title: "1984", author: "George Orwell", year: 1949 },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho", year: 1988 }
];

// Get all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Get book by ID
app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (book) res.json(book);
  else res.status(404).json({ error: "Book not found" });
});

// Create a new book
app.post('/api/books', (req, res) => {
  const { title, author, year } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
    year
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book
app.put('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (book) {
    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;
    book.year = req.body.year || book.year;
    res.json(book);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

// Delete a book
app.delete('/api/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id == req.params.id);
  if (index !== -1) {
    books.splice(index, 1);
    res.json({ message: "Book deleted successfully" });
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Library API running at http://localhost:${PORT}`);
});