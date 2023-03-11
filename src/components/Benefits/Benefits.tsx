import React from 'react';
import { Benefit } from '../Benefit';
import './Benefits.scss';

const benefits = [
  {
    image: `1.svg`,
    title: 'Futuristic Design',
    text: 'To give Luna a truly flawless look, we specifically picked aircraft grade aluminum as its material and adopted both three-dimensional stretch-bending technology and a high precision cold forging technique.'
  },
  {
    image: `2.svg`,
    title: 'Tweeter Speaker System',
    text: 'To deliver a more layered sound performance better than a sole full-range speaker, our team equipped Luna with one more tweeter speaker responsible for high-frequency sound independently.'
  },
  {
    image: `3.svg`,
    title: 'Multiroom System',
    text: 'Luna is natively compatible with your home Wi-Fi. Set up multiple speakers in different rooms to expand your music experience into the entire house.'
  },
  {
    image: `4.svg`,
    title: 'Intuitive Lighting System',
    text: 'An intuitive user interface allows you to adjust the hue and saturation of color for lighting that fits any mood and situation.'
  },
]

export const Benefits: React.FC = React.memo(
  () => {
    return (
      <section className="Benefits">
        <div className="Benefits__wrapper">
          <div className="Benefits__container">
            {benefits.map((benefit) => (
              <Benefit benefit={benefit} />
            ))}
          </div>
        </div>
      </section>
    )
  }
)