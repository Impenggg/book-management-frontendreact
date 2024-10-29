import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Book Manager</Link>
        <ul className="nav-links">
          <li><Link to="/">Books</Link></li>
          <li><Link to="/add">Add Book</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 