import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" style={{ minHeight: '100vh' }}>
        <Navbar />
        <div className="container" style={{ padding: '20px' }}>
          <Routes>
            <Route exact path="/" element={<BookList />} />
            <Route path="/add" element={<AddBook />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
