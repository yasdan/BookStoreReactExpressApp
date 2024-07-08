import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('There was an error fetching the books!', error));
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book.bookid}>
            {book.book_title} by {book.author_name} - ${book.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
