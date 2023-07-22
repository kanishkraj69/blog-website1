import React from 'react';
import NavBar from '../Components/NavBar';
import './Home.css';
import { NavLink } from 'react-router-dom';
import img1 from '../Images/bg3.jpeg';
import Footer from '../Components/Footer';

const Home = () => {
  const  username = localStorage.getItem("currentuser")
  const blog = localStorage.getItem("blogList");
  if(blog === null){
    localStorage.setItem('blogList',JSON.stringify([]));
  }
  return (
    <div className='home-container'>
  <NavBar/>
  <div className='panel1'>
    <h1>WelCome!! {username}</h1>
    <h1>Words have power, wield them wisely.</h1>
    <h2>Find your voice, share your soul</h2>
    <h2>Welcome to a world of words, where inspiration and imagination come to life..</h2>
    <NavLink to="/writeblog">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="btn" type="button">
          <strong>LOG IN</strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>

          <div id="glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </button>
      </div>
    </NavLink>
  </div>
  <div className='panel2'>
    <div>
      <h1>Be limitless !! Explore New Designs</h1>
      <p>Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – 
        all with flexible layouts and hundreds of background images – or design something new.</p>
    </div>
    <div>
      <img src={img1} alt='bg1'/>
    </div>
  </div>
  <Footer/>
</div>
  )
}

export default Home