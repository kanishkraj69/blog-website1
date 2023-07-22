import React, { useState} from 'react';
import "./Routes.css";
import { Link, Navigate } from 'react-router-dom';

const Login = () => {
    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");
    const [flag, setFlag] = useState(false);
    const [ishome, setHome] = useState(true);

    function handleLogin(e) {
        e.preventDefault();
        let usersData = JSON.parse(localStorage.getItem("userData")) || []
        console.log(usersData);
        for (var i=0; i<usersData.length; i++){
            if(usersData[i].email === emaillog && usersData[i].password ===passwordlog){
                setHome(!ishome);
                localStorage.setItem("authToken", "islogin");
                setFlag(false);
                localStorage.setItem("currentuser",usersData[i].name);
                break
            }
            else{
                setFlag(true);
                localStorage.setItem("authToken", '');
                //kanisk
            }
        }
    }
  return (
    <div className='login-container'>
      {ishome ? <form onSubmit={handleLogin}>
            <h1>Inkwell Chronicles</h1>
                <h3>LOGIN</h3>
                <div className="form-group">
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        required 
                        onChange={(event) => setEmaillog(event.target.value)} />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Enter password" required onChange={(event) => setPasswordlog(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
                <div className='to-register'>
                    <p>New User ?</p>
                    <Link to='/register' style={{textDecoration:'none'}}> 
                        <h4>Sign Up</h4>
                    </Link>
                </div>

                {flag && <alert className='alert' color='primary' variant="warning" >
                    Fill correct Info else keep trying.
                        </alert>}
            </form>
                :<Navigate to="/home"/>
            }
    </div>
  )
}

export default Login
