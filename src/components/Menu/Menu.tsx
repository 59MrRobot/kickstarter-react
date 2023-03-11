/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Nav } from '../Nav';
import './Menu.scss';
import { useSelector } from 'react-redux';
import { slideMenuOut } from '../../redux/menuReducer';
import { useDispatch } from "react-redux";

export const Menu: React.FC = React.memo(
  () => {
    const showMenu = useSelector((state: any) => state.showMenu);
    const dispatch = useDispatch();
    
    return (
      <section
        className={`Menu Menu--${showMenu}`}
      >
        <div className="Menu__wrapper">
          <div className="Menu__controls">
            <a href="/#">
              <img
                src="/images/logo.svg"
                alt="crybaby logo"
                className="logo"
              />
            </a>


            <a
              href="/#"
              className="Menu__cross" 
              id="menuOff"
              onClick={() => {
                dispatch(slideMenuOut());
              }}
            ></a>
          </div>

          <Nav menu={showMenu} />
        </div>
      </section>

    )
  }
)