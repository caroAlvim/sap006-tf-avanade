import React from 'react';
import './button.css';

function Button({
  onClick,
  buttonClass,
  children,

}) {
  return (
    <button
      onClick={onClick}
      className={buttonClass}
      type="submit"
    > {children}
    </button>
  );
}

export default Button;
