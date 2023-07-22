import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './NavBar.css';
import companyLogo from '../Images/CompanyLogo1.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-header">
        <NavLink href="/home" className="nav-logo">
          <img src={companyLogo} alt='company-logo'/>
        </NavLink>
        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={handleMenuClick}>
          <FaBars />
        </div>
      </div>
      <div className='nav-item-list'>
        <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
                <NavLink to="/home" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/viewblog" className="nav-link">View Blogs</NavLink>
            </li>

            <li className="nav-item">
                <NavLink to="/" className="nav-link" onClick={()=>localStorage.setItem("authToken",'')}>Logout</NavLink>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

