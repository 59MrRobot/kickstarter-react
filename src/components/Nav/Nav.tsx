import React from 'react';
import './Nav.scss';
import cn from 'classnames';
import { slideMenuOut } from '../../redux/menuReducer';
import { useDispatch } from 'react-redux';

interface Props {
  menu?: boolean;
}

export const Nav: React.FC<Props> = React.memo(
  ({ menu }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
      dispatch(slideMenuOut());
    }

    return (
      <nav className={cn('Nav', menu && 'Nav--menu')}>
        <ul className="Nav__list">
          <li 
            className="Nav__item"
            onClick={() => {
              if (menu) {
                handleClick();
              }
            }}
          >
            <a href="#presentation" className="Nav__link">Our story</a>
          </li>
          <li 
            className="Nav__item"
            onClick={() => {
              if (menu) {
                handleClick();
              }
            }}
          >
            <a href="#about-us" className="Nav__link">About us</a>
          </li>
          <li 
            className="Nav__item"
            onClick={() => {
              if (menu) {
                handleClick();
              }
            }}
          >
            <a href="#technology" className="Nav__link">Technology</a>
          </li>
          <li 
            className="Nav__item"
            onClick={() => {
              if (menu) {
                handleClick();
              }
            }}
          >
            <a href="#features" className="Nav__link">Features</a>
          </li>
          <li 
            className="Nav__item"
            onClick={() => {
              if (menu) {
                handleClick();
              }
            }}
          >
            <a href="#questions" className="Nav__link">Get in touch</a>
          </li>
        </ul>
      </nav>
    )
  }
)