/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './Footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer className="Footer">
      <div className="Footer__wrapper">
        <div className="Footer__controls">
          <a href="/#" className="Footer__logo">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.svg`}
              alt="crybaby logo"
              className="logo"
            />
          </a>

          <a href="#page-top" className="Footer__link">
            <img
              src={`${process.env.PUBLIC_URL}/images/footer/arrow.svg`}
              alt="back to top"
              id="topLink"
            />
          </a>
        </div>

        <div className="Footer__socials">
          <a
            href="https://www.facebook.com/hicrazybaby/"
            target="_blank"
            className="Footer__socials-icon Footer__socials-icon--facebook" rel="noreferrer"
          ></a>
          <a
            href="https://twitter.com/crazybabyaudio"
            target="_blank"
            className="Footer__socials-icon Footer__socials-icon--twitter" rel="noreferrer"
          ></a>
          <a
            href="https://www.instagram.com/crazybaby/?hl=en"
            target="_blank"
            className="Footer__socials-icon Footer__socials-icon--instagram" rel="noreferrer"
          ></a>
        </div>

        <p className="Footer__copyright">
          © 2019 All rights reserved. Terms of Use & Privacy Policy
        </p>
      </div>
    </footer>
  )
}
