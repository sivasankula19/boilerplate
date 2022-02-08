import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Forgotpassword from './pages/Forgotpassword';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />}  />
          <Route path='/register' element={<Register />} />
          <Route path='/forgotpassword' element={<Forgotpassword />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;