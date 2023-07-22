import { BrowserRouter, Navigate ,Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Routes/Login';
import Register from './Routes/Register';
import Home from './Routes/Home';
import Blogpage from './Routes/Blogpage';
import Viewblogs from './Routes/Viewblogs';
// import PrivateRoute from './Routes/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<PrivateRouteForLogin><Login/></PrivateRouteForLogin>}/>
          <Route path='/register' element={<PrivateRouteForLogin><Register/></PrivateRouteForLogin>}/>
          <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute>}/>
          <Route path='/writeblog' element={<PrivateRoute><Blogpage/></PrivateRoute>}/>
          <Route path='/viewblog' element={<PrivateRoute><Viewblogs/></PrivateRoute>}/>
          {/* <Route exact path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/user' element={<PrivateRoute/>}>
            <Route path='home' element={<Home/>}/>
            <Route path='writeblog' element={<Blogpage/>}/>
            <Route path='viewblog' element={<Viewblogs/>}/>
          </Route> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;

const PrivateRoute=({children})=>{
  const authToken = localStorage.getItem("authToken");
  if(authToken){
    return children;
  }else{
    return <Navigate to ='/'/>
  }
}

const PrivateRouteForLogin =({children})=>{
  const authToken = localStorage.getItem("authToken");
  if(!authToken){
    return children;
  }else{
    return <Navigate to ='/home'/>
  }
}
