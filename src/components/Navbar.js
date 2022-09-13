import React from 'react';
import '../components/App.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className='navbar'>
    <nav className='nav'>
      <h1 className='title'> MATH MAGICIANS </h1>
      <ul className='link'>
        <li>
          <Link to="/Home/" className='links'>
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className='links'>
            Calculator
          </Link>
        </li>
        <li>
          <Link to="/Quote/" className='links'>
            Quote
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;