import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './components/Admin';
import Seller from './components/Seller';
import Shopper from './components/Shopper';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const deleteUser = (username) => {
    setUsers(users.filter(user => user.username !== username));
  };

  return (
    <Router>
      <div>
        <h1>Welcome to the eCommerce Site</h1>
        {currentUser ? (
          <div>
            <p>Logged in as: {currentUser.username} ({currentUser.role})</p>
            <button onClick={() => setCurrentUser(null)}>Logout</button>
          </div>
        ) : (
          <div>
            <p>Please register or login to continue.</p>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} users={users} />} />
          <Route path="/register" element={<Register addUser={addUser} />} />
          <Route path="/admin" element={currentUser?.role === 'admin' ? <Admin users={users} deleteUser={deleteUser} /> : <Home />} />
          <Route path="/seller" element={currentUser?.role === 'seller' ? <Seller /> : <Home />} />
          <Route path="/shopper" element={currentUser?.role === 'shopper' ? <Shopper /> : <Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
