import React from 'react';
import './Footer.css'; 
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="company-info">
          <h3>Celebal Technologies</h3>
          <p>123 Main Street, City,<br/> Country</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: enterprisesales@celebaltech.com</p>
        </div>
        <div className="company-info">
          <h3>Our services</h3>
          <p>Azure</p>
          <p>Big Data</p>
          <p>Data Science</p>
          <p>MS Teams</p>
        </div>
        <div className="company-info">
          <h3>POWER PLATFORM</h3>
          <p>Power BI</p>
          <p>PowerApps</p>
          <p>Power Automate</p>
          <p>Dynamic 365</p>
        </div>
        <div className="footer-links">
          <h3>Use Full Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="https://celebaltech.com/aboutus">About</a></li>
            <li><a href="https://celebaltech.com/blogs">Blogs</a></li>
            <li><a href="https://life-at-celebal.azurewebsites.net/">Life@celebal</a></li>
            <li><a href='https://careers.celebaltech.com/#/careers'>Career</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com/celebaltechnologies/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/celebaltech?lang=en" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/celebaltechnologies" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/celebaltechnologies/?hl=en" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCm23EobkgaSU3WN_nWC78Tw" target="_blank" rel="noopener noreferrer">
                You Tube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom-main'>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Company. All rights reserved.</p>
          <p> ❤ with Love kanishk Raj</p>
        </div>
        <div className='footer-social-media'>
          <a href='https://twitter.com/celebaltech?lang=en'><FaTwitter style={{ color: '#1DA1F2' }}/></a>
          <a href='https://www.facebook.com/celebaltechnologies/'><FaFacebookF style={{ color: '#1877F2' }}/></a>
          <a href='https://www.instagram.com/celebaltechnologies/?hl=en'><FaInstagram style={{ color: '#E4405F' }}/></a>
          <a href='https://www.linkedin.com/company/celebaltechnologies'><FaLinkedinIn style={{ color: '#0A66C2' }}/></a>
          <a href='https://www.youtube.com/channel/UCm23EobkgaSU3WN_nWC78Tw'><FaYoutube style={{ color: '#FF0000' }}/></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer