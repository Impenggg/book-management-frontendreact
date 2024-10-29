import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: '1984', author: 'George Orwell', year: 1949 },
  ]);

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className="book-list">
      <h2>My Books</h2>
      {books.length === 0 ? (
        <div className="empty-state">
          <p>No books available</p>
          <Link to="/add" className="add-btn">Add Your First Book</Link>
        </div>
      ) : (
        <div className="books-grid">
          {books.map(book => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Year: {book.year}</p>
              <button onClick={() => deleteBook(book.id)} className="delete-btn">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookList; 