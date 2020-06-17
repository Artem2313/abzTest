import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import logo from '../../../assets/logo.svg';

const Toolbar = ({ drawerClickHandler }) => (
  <header className="toolbar container">
    <nav className="toolbar__navigation">
      <div className="toolbar__logo">
        <a href="/">
          <img src={logo} height="100%" alt="logo" />
        </a>
      </div>
      <div className="spacer" />
      <div className="toolbar__navigation-items">
        <ul>
          <li>
            <a href="/">About me</a>
          </li>
          <li>
            <a href="/">Relationships</a>
          </li>
          <li>
            <a href="/">Requirements</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
          <li>
            <a href="/">Sign Up</a>
          </li>
        </ul>
      </div>
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={drawerClickHandler} />
      </div>
    </nav>
  </header>
);

export default Toolbar;
