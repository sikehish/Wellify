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
import TherapistsAroundMe from './components/TherapistsAroundMe';
import SearchTherapists from './components/SearchTherapists';

function App() {
  return (
      <>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/signup" element={<Signup />} />
          <Route  path="/admin/login" element={<AdminLogin />} />
          <Route  path="/admin/" element={<AdminDashboard />} />
          <Route  path="/profile" element={<Profile/>} />
          <Route  path="/aroundme" element={<TherapistsAroundMe/>} />
          <Route  path="/search/therapists" element={<SearchTherapists/>} />
        </Routes>
        <ToastContainer position="top-right"/>
        {/* <ToastContainer position="top-right" autoClose={3000} hideProgressBar /> */}
      </>
  );
}

export default App;
