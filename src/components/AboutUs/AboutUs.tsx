import React from 'react'
import './AboutUs.scss';
import '../../styles/title.scss';

export const AboutUs: React.FC = React.memo(
  () => {
    return (
      <section className="AboutUs" id="about-us">
        <div className="AboutUs__wrapper">
          <div className="AboutUs__image AboutUs__image--tablet"></div>

          <div className="AboutUs__container">
            <h2 className="title AboutUs__title">DESIGNED FOR THE FUTURE</h2>

            <div className="AboutUs__image"></div>

            <p className="AboutUs__text">
              In 2014, a group of geeky industrial designers, engineering veterans and acoustic experts formed crazybaby. This is a bunch of passionate people who are crazy enough to think they can challenge the industry with disruptive audio products.
            </p>

            <a href="/" className="AboutUs__link">
              See more about us
            </a>
          </div>
        </div>
      </section>
    )
  }
)