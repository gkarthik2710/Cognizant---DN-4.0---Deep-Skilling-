import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <h1>✈️ Ticket Booking App</h1>
        <AuthButton isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <hr />
        <Routes>
          <Route path="/" element={<Navigate to={isLoggedIn ? "/user" : "/guest"} />} />
          <Route path="/guest" element={<GuestPage />} />
          <Route path="/user" element={
            isLoggedIn ? <UserPage /> : <Navigate to="/guest" />
          } />
        </Routes>
      </div>
    </Router>
  );
}

function AuthButton({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const toggleLogin = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      navigate("/guest");
    } else {
      setIsLoggedIn(true);
      navigate("/user");
    }
  };

  return (
    <button onClick={toggleLogin}>
      {isLoggedIn ? "Logout" : "Login"}
    </button>
  );
}

export default App;
