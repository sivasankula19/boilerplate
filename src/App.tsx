import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import { useSelector } from 'react-redux';

function App() {
  const loginUser: any = useSelector((state: any) => state.User.loginStatus);

  return (
    <>
      <Router>
        { loginUser ? <Navbar /> : '' }
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />}  />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;