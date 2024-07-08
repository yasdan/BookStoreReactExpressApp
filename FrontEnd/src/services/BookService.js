import axios from 'axios';

const API_URL = 'http://localhost:5000/api/books';

class BookService {
  getBooks() {
    return axios.get(API_URL);
  }

  /*getBook(bookid){
    return axios.get(`${API_URL}/${bookid}`);
  }*/
  addBook(book) {
    return axios.post(API_URL, book);
  }

  deleteBook(bookid) {
    return axios.delete(`${API_URL}/${bookid}`);
  }

  updateBook(bookid, book) {
    return axios.put(`${API_URL}/${bookid}`, book);
  }
}

export default new BookService();
