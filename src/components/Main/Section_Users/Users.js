import React from 'react';

const Users = ({ users }) => (
  <section className="users-section">
    <div className="users-section__container">
      <ul className="users-section__list">
        {users.map(user => (
          <li className="users-section__profile-card" key={user.id}>
            <div className="users-section__user-container">
              <img
                className="users-section__user-image"
                src={user.photo}
                alt={user.name}
              />
              <p className="users-section__user-name">{user.name}</p>
              <p className="users-section__user-position">{user.position}</p>
              <p className="users-section__user-email">{user.email}</p>
              <p className="users-section__user-phone">{user.phone}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Users;
