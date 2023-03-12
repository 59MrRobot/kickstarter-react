/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './Topbar.scss';
import '../Header/Header.scss';
import { slideMenuIn } from '../../redux/menuReducer';
import { useDispatch } from "react-redux";

export const Topbar: React.FC = React.memo(
  () => {
    const dispatch = useDispatch();

    return (
      <div className="Topbar">
        <a href="/#">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.svg`}
            alt="crybaby logo"
            className="logo"
          />
        </a>

        <div className="Header__items">
          <a 
            href="/#"
            className="Topbar-link"
          >
            SPECS
          </a>

          <div>
            <button
              className="Topbar-link Topbar-link--en"
              id="english"
            >
              EN
            </button>
            /
            <button
              className="Topbar-link Topbar-link--ua"
              id="ukranian"
              >
                UA
              </button>
          </div>

          <a
            href="/#"
            className="Topbar-link Topbar-link--buy"
          >
            Buy
          </a>
        </div>

        <button
          className="Header__menu-toggler"
          onClick={() => {
            dispatch(slideMenuIn());
          }}
          ></button>
      </div>
    )
  }
)