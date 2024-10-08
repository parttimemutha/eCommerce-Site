import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register({ addUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('shopper');
  const navigate = useNavigate();

  const handleRegister = () => {
    const newUser = { username, password, role };
    addUser(newUser);
    alert('User registered successfully!');
    navigate('/login');
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="shopper">Shopper</option>
        <option value="seller">Seller</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
