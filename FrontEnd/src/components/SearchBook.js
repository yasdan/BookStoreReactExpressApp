import React, { useState, useEffect } from 'react';
import BookService from '../services/BookService';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBooks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const response = await BookService.getBooks();
      setBooks(response.data);
    } catch (error) {
      console.error('Error loading books:', error);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter(book =>
        book.book_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  }, [searchTerm, books]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search by title or author..."
          className="form-control"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <table className="table table-striped table-primary">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book.bookid}>
              <td>{book.bookid}</td>
              <td>{book.book_title}</td>
              <td>{book.author_name}</td>
              <td>{book.gener}</td>
              <td>{book.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchBooks;
