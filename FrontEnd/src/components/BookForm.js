import React, { useState } from 'react';
import axios from 'axios';

function BookForm() {
  const [book, setBook] = useState({ book_title: '', author_name: '', price: '', gener: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/books', book)
      .then(response => {
        console.log('Book added:', response.data);
        // Optionally, clear the form or give feedback
      })
      .catch(error => console.error('There was an error adding the book!', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="book_title" value={book.book_title} onChange={handleChange} placeholder="Book Title" />
      <input type="text" name="author_name" value={book.author_name} onChange={handleChange} placeholder="Author Name" />
      <input type="number" name="price" value={book.price} onChange={handleChange} placeholder="Price" />
      <input type="text" name="gener" value={book.gener} onChange={handleChange} placeholder="Genre" />
      <button className='btn btn-primary' type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
