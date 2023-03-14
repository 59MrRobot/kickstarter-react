import React from 'react';
import './HeaderContent.scss';
import '../Header/Header.scss';

export const HeaderContent: React.FC = React.memo(
  () => {
    return (
      <div className="HeaderContent">
        <img
          src={`${process.env.PUBLIC_URL}/images/header.png`}
          alt="speakers"
          className="Header__image"
        />

        <div className="HeaderContent-text">
          <h1 className="Header__title">Futuristic Wireless Speaker</h1>

          <p className="Header__text">
            Luna’s performance is balanced and smooth in all frequency ranges which makes the music both naturally pleasant and distinctly more layered.
          </p>
        </div>
      </div>
    )
  }
)