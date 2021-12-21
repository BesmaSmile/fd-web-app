import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from 'components/Navbar/Navbar';
import Login from 'components/Login/Login';
import Register from 'components/Register/Register';

import './App.scss';

const App = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  return (
    <Router>
      {!user && <Navbar />}
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={user ? <h1>Hello {user.firstname} {user.lastname}</h1>
              : <Navigate to="/login" />}
          />
          {!user && (
            <>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
