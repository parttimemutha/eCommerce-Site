import React from 'react';

const Admin = ({ users, deleteUser }) => {
  return (
    <div>
      <h2>Admin Panel</h2>
      <h3>User Management</h3>
      <ul>
        {users.map(user => (
          <li key={user.username}>
            {user.username} - {user.role}
            <button onClick={() => deleteUser(user.username)}>Delete User</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
