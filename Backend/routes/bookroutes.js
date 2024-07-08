const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookcontroller');

router.get('/books', bookController.getAllBooks);
router.post('/books', bookController.createBook);

// Routes for individual book operations
router.get('/books/:id', bookController.getBookById);
router.put('/books/:id', bookController.updateBookById);
router.delete('/books/:id', bookController.deleteBookById);

module.exports = router;
