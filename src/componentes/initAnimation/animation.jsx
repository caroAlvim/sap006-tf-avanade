import React from 'react';
import ReactDom from 'react-dom';
import Initial from '../../assets/logo-avanade-icon.png';
import './animation.css';

const animationRoot = document.getElementById('animation-root');

function Animation({ isOpen }) {
  if (!isOpen) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div className="loading-div">
        <img
          src={Initial}
          id="breathing-img"
          alt="logo"
        />
      </div>
    </>,
    animationRoot,

  );
}

export default Animation;
