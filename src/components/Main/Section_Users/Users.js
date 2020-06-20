import React from 'react';

const Users = ({ users, handleIncreaseUsers, countUsers, totalUsers }) => (
  <section className="users-section">
    <div className="users-section__container">
      <div>
        <h1>Our cheerful users</h1>
        <p>Attention! Sorting users by registration date</p>
      </div>
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
      <div>
        <button
          type="button"
          className="button"
          disabled={countUsers >= totalUsers}
          onClick={() => handleIncreaseUsers()}
        >
          Show more
        </button>
      </div>
    </div>
  </section>
);

export default Users;
