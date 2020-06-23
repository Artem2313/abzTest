import React from 'react';
import { Link } from 'react-scroll';
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
            <Link to="About me" spy smooth>
              About me
            </Link>
          </li>
          <li>
            <Link to="Requirements" spy smooth>
              Relationships
            </Link>
          </li>
          <li>
            <Link to="Requirements" spy smooth>
              Requirements
            </Link>
          </li>
          <li>
            <Link to="Users" spy smooth>
              Users
            </Link>
          </li>
          <li>
            <Link to="Sign up" spy smooth>
              Sign Up
            </Link>
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
