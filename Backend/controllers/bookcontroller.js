const Book = require('../models/bookmodel');

exports.getAllBooks = (req, res) => {
  Book.getAll((err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

exports.createBook = (req, res) => {
  const bookData = req.body;
  Book.create(bookData, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ id: results.insertId, ...bookData });
    }
  });
};

// Example for getting a single book by ID
exports.getBookById = (req, res) => {
  const bookId = req.params.id;
  Book.getById(bookId, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (results.length === 0) {
      res.status(404).json({ message: 'Book not found' });
    } else {
      res.json(results[0]);
    }
  });
};

// Example for updating a book by ID
exports.updateBookById = (req, res) => {
  const bookId = req.params.id;
  const bookData = req.body;
  Book.updateById(bookId, bookData, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Book updated successfully' });
    }
  });
};

// Example for deleting a book by ID
exports.deleteBookById = (req, res) => {
  const bookId = req.params.id;
  Book.deleteById(bookId, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Book deleted successfully' });
    }
  });
};
