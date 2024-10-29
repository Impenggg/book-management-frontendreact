import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: '',
    author: '',
    year: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to save the book
    console.log('Book added:', book);
    navigate('/');
  };

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="add-book">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Year:</label>
          <input
            type="number"
            name="year"
            value={book.year}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook; 