import React from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton = ({ click }) => (
  <button type="button" onClick={click} className="toggle-button">
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);

export default DrawerToggleButton;
