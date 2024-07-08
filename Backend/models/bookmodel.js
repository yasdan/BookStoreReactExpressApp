const connection = require('../config/db');

const Book = {
  getAll: (callback) => {
    const query = 'SELECT * FROM Book';
    connection.query(query, callback);
  },

  create: (data, callback) => {
    const query = 'INSERT INTO Book SET ?';
    connection.query(query, data, callback);
  },

  // Example for getting a book by ID
  getById: (bookId, callback) => {
    const query = 'SELECT * FROM Book WHERE bookid = ?';
    connection.query(query, [bookId], callback);
  },

  // Example for updating a book by ID
  updateById: (bookId, data, callback) => {
    const query = 'UPDATE Book SET ? WHERE bookid = ?';
    connection.query(query, [data, bookId], callback);
  },

  // Example for deleting a book by ID
  deleteById: (bookId, callback) => {
    const query = 'DELETE FROM Book WHERE bookid = ?';
    connection.query(query, [bookId], callback);
  }
};

module.exports = Book;
