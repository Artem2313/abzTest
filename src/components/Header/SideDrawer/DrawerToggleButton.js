import React from 'react';
import { ReactComponent as Menu } from '../../../assets/menu icon.svg';

const DrawerToggleButton = ({ click }) => (
  <button type="button" onClick={click} className="toggle-button">
    <Menu />
  </button>
);

export default DrawerToggleButton;
