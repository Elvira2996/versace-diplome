import React, { useState } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import './Menu-resposive.css';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`Menu ${menuOpen ? 'open' : ''}`}>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className='flex'>
        <li>
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>About</Link>
        </li>
        <li>
          <Link to="/delivery" onClick={toggleMenu}>Delivery</Link>
        </li>
        <li>
          <Link to="/contacts" onClick={toggleMenu}>Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;