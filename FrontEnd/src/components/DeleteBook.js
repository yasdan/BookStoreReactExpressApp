import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookService from '../services/BookService';
import 'bootstrap/dist/css/bootstrap.min.css';

const DeleteBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
   // axios.delete('http://localhost:5000/api/books/bookid')
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

  const handleDelete = async (bookid) => {
    try {
      
      await BookService.deleteBook(bookid);
      setBooks(books.filter(book => book.bookid !== bookid));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };
 
 /* const handleEdit= async (bookid) =>{
    try{
        await BookService.updateBook(bookid);
        setBooks(books.filter(book => book.bookid !== bookid));
    }catch(error){
        console.error('Error updating the book;',error);
    }
  }; */
  return (
    <div className="container mt-4">
      <h2>Manage Books</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Price</th>
            <th>Actions</th>
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
              
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(book.bookid)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteBooks;
