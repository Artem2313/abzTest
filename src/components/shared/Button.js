import React from 'react';

const Button = ({ type = 'button', label = '', onClick = () => null }) => (
  <button className="button" type={type} onClick={onClick}>
    {label}
  </button>
);

export default Button;
