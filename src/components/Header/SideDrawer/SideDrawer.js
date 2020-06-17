import React from 'react';
import { ReactComponent as Logo } from '../../../assets/logo.svg';

const SideDrawer = ({ show }) => {
  let drawerClasses = 'side-drawer';
  if (show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <div>
        <ul>
          <li>
            <Logo />
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="/">About me</a>
          </li>
          <li>
            <a href="/">Relationships</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
          <li>
            <a href="/">Sign Up</a>
          </li>
          <li>
            <a href="/">Terms and Conditions</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="/">How it works</a>
          </li>
          <li>
            <a href="/">Partnership</a>
          </li>
          <li>
            <a href="/">Help</a>
          </li>
          <li>
            <a href="/">Leave testimonials</a>
          </li>
          <li>
            <a href="/">Contact us</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="/">Articles</a>
          </li>
          <li>
            <a href="/">Our news</a>
          </li>
          <li>
            <a href="/">Testimonials</a>
          </li>
          <li>
            <a href="/">Licenses</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideDrawer;
