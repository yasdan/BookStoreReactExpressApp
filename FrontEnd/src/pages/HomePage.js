import React, { useState, useEffect } from 'react';
import BookService from '../services/BookService';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
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

  return (
    <div className="container mt-4">
      <h2>Book List</h2>
      <table className="table table-striped">
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
          {books.map((book) => (
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

export default HomePage;
