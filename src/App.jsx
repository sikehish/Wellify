import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import AdminLogin from './components/admin/AdminLogin.jsx';
import AdminDashboard from './components/admin/AdminDashboard.jsx';
import Home from './Home.jsx'
import Profile from './Profile.jsx'
import { useAuth } from './contexts/AuthContext';
import CreatePost from './components/Posts/CreatePost';

function App() {
  const {currentUser}= useAuth()
  return (
      <>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home />} />
          {!currentUser && <Route  path="/login" element={<Login />} />}
          {!currentUser && <Route  path="/signup" element={<Signup />} />}
          {!currentUser && <Route  path="/admin/login" element={<AdminLogin />} />}
          {currentUser && <Route  path="/admin/" element={<AdminDashboard />} />}
          {currentUser && <Route  path="/profile" element={<Profile/>} />}
          {currentUser && <Route  path="/create-post" element={<CreatePost />} />} 
          {!currentUser && <Route  path="/admin" element={<AdminDashboard />} />} 
          {/* {currentUser && <Route  path="/thera-feed" element={<Feed/>} />} */}
        </Routes>
        <ToastContainer position="top-right"/>
        {/* <ToastContainer position="top-right" autoClose={3000} hideProgressBar /> */}
      </>
  );
}

export default App;
