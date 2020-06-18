import React from 'react';
import './Users.scss';

const Users = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.id}>
        <div
          className="imageDiv"
          style={{ backgroundImage: `url(${user.photo})` }}
        ></div>

        <p>{user.name}</p>
        <p>{user.position}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </li>
    ))}
  </ul>
);

export default Users;
