import React, {useState, useEffect } from 'react';
import "./Routes.css";
import { Link, Navigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [flag, setFlag] = useState(false);
    const [allUsers, setAllUsers] = useState(() => {
        const userData = localStorage.getItem("userData");
        return userData ? JSON.parse(userData) : [];
      });
    
    useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(allUsers));
    }, [allUsers]);

    function handleFormSubmit(e) {

        if (!name || !email || !password || !phone) {
            setFlag(true);

        } else {
            setFlag(false);
            setAllUsers([...allUsers, { email, password, name, phone}]);
            console.log("Saved in Local Storage");
            <Navigate to="/"/>
        }
    }
  return (
    <div className='register-container'>
        <form onSubmit={handleFormSubmit}>
            <h1>Inkwell Chronicles</h1>
            <h2>Sign Up</h2>
            <div className='details'>
                <input type="text" className="form-control" placeholder="Enter Full Name" onChange={(event) => setName(event.target.value)} />
                <input type="email" className="form-control" placeholder="Enter Email" onChange={(event) => setEmail(event.target.value)} />
                <input type="password" className="form-control" placeholder="Enter Password" onChange={(event) => setPassword(event.target.value)} />
                <input type="text" className="form-control" placeholder="Enter Phone Number"onChange={(event) => setPhone(event.target.value)} />
            </div>
            <button type="submit" >Sign UP</button>
            <div className='to-login'>
                <p>Already a User?</p>
                <Link to='/' style={{textDecoration:'none'}}> 
                    <h4>Login</h4>
                </Link>
            </div>
            {flag &&
                    <alert color='primary' variant="danger" >
                        I got it you are in hurry! But every Field is important!
                </alert>
                }
        </form>
    </div>
  )
}

export default Register
