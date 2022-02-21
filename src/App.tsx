import React,{ Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GoogleAnalyticsInstance,intialiseAnalytics } from './GoogleAnalytics/GoogleAnalytics';

/** Here we are importing components lazily */

const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const Logout = React.lazy(() => import("./pages/Logout"));
const Forgotpassword = React.lazy(() => import("./pages/Forgotpassword"));
const Profile = React.lazy(() => import("./pages/Profile"));




function App() {
  intialiseAnalytics();
  GoogleAnalyticsInstance.googleEvent({category:'app',action:'app launched'})
  const loginUser: any = useSelector((state: any) => state.User.loginStatus);

  return (
    <>
    <Suspense fallback={<div className="lazy-load">Loading.....</div>}>
      <Router>
        { loginUser ? <Navbar /> : '' }
        {/* to check working of error boundary comment above line and uncomment below line  */}
        {/* { loginUser1 ? <Navbar /> : '' }   */}
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />}  />
          <Route path='/register' element={<Register />} />
          <Route path='/forgotpassword' element={<Forgotpassword />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </Router>
      </Suspense>
    </>
  );
}

export default App;