import React, { useState, useEffect } from 'react';
import './Header.css';
import Menu from '../Menu/Menu';

import { Link } from 'react-router-dom';
import Auth from "../Auth/Auth";
import CategoryList from '../CategoryList/CategoryList';
import CartLink from '../CartLink/CartLink';

const url = typeof window !== 'undefined' ? window.location.href : '';

if(url === ''){
  
}


function Header(props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    
      <header className={`Header ${props.dataClass} ${isScrolled ? 'fixed' : ''}`}>
        <div className="container">
          <div className="Head flex">
            <h1 className="logo"> <Link to="/">Versace</Link></h1>
            <nav>
              <CategoryList />
              
            
            </nav>
            <div className="icons">
              <span className='ic_menu'></span>
              <span className='ic_menu'></span>
              <span className='ic_menu'></span>
            </div>
            <Menu />
            <div className="Buttons flex">
             <Auth />
             <CartLink />
            </div>
            
          </div>
        </div>
        
      </header>
      
    </>
  );
}

export default Header;