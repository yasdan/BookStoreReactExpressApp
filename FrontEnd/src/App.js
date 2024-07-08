import React from 'react';
//import './App.css';
import './styles/mystyles.css';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import SearchBooks from './components/SearchBook';
import DeleteBooks from './components/DeleteBook';

function App() {
  return (
    <div className="App">
      <h1>ASKY Book Store</h1>
      <BookForm />
      <SearchBooks />
     <DeleteBooks />
     <BookList />
    </div>
  );
}

export default App;
