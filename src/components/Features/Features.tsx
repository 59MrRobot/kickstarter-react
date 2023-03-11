import React, { useRef, useState } from 'react';
import { Feature } from '../Feature/Feature';
import './Features.scss';
import '../../styles/title.scss';

const features = [
  {
    title: "Sound & Music",
    list: ['Feel-in-chest Base Power', 'Lossless Digital Audio Transmission', 'Easy & Stable Stereo Pairing', 'Crisp and Clear High Frequency Sound', 'Streams from Cloud Music and Local Library', 'Auto Music Playback from Last Song Stopped']
  },
  {
    title: "Connectivity",
    list: ['Hands Free Wireless Audio', 'Bluetooth 4.0 LE', 'Wi-Fi 2.4 GHz (802.11 b/g/n)', 'Smart Multiroom System Set Up', 'Party Mode with 6.0 Units and above', 'Powerful MESHNET Multi Speaker Network']
  },
  {
    title: "App Features",
    list: ['Customize Music Schedule', 'Wake Up with Favorite Songs', 'Home Detection Auto Wake Up', 'Color Wheel & Saturation Change']
  },
];

export const Features: React.FC = React.memo(
  () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const length = features.length;

    const previous = useRef<HTMLButtonElement>(null);
    const next = useRef<HTMLButtonElement>(null);

    const handleNext = () => {
      if (slideIndex < length - 1) {
        setSlideIndex((prevState: number) => (
          prevState += 1
        ))
        previous.current!.classList.add('Features__controls-button--prev-active');
        previous.current!.classList.remove('Features__controls-button--prev-inactive');
      } 

      if (slideIndex === length - 1) {
        next.current!.classList.add('Features__controls-button--next-inactive');
        next.current!.classList.remove('Features__controls-button--next-active');
      }
    }

    const handlePrevious = () => {
      if (slideIndex > 0) {
        setSlideIndex((prevState: number) => (
          prevState -= 1
        ))
        next.current!.classList.add('Features__controls-button--next-active');
        next.current!.classList.remove('Features__controls-button--next-inactive');
      }

      if (slideIndex === 0) {
        previous.current!.classList.add('Features__controls-button--prev-inactive');
        previous.current!.classList.remove('Features__controls-button--prev-active');
      }
    }

    return (
      <section className="Features" id="features">
        <div className="Features__wrapper">
          <h2 className="title Features__title">Features</h2>

          <div className="Features__slides">
            {features.map((feature, index) => (
              <Feature 
                feature={feature}
                index={index}
                mobile={true}
                slideIndex={slideIndex}
                key={feature.title}
              />
            ))}
            {/* <div className="Feature Feature--mobile feature--mobile-1" id="featureOne">
              <h3 className="feature__title">Sound & Music</h3>
              <ul className="feature__list">
                <li className="feature__item">
                  Feel-in-chest Base Power
                </li>
                <li className="feature__item">
                  Lossless Digital Audio Transmission
                </li>
                <li className="feature__item">
                  Easy & Stable Stereo Pairing
                </li>
                <li className="feature__item">
                  Crisp and Clear High Frequency Sound
                </li>
                <li className="feature__item">
                  Streams from Cloud Music and Local Library
                </li>
                <li className="feature__item">
                  Auto Music Playback from Last Song Stopped
                </li>
              </ul>
            </div> */}

            {/* <div className="feature feature--mobile feature--mobile-2" id="featureTwo">
              <h3 className="feature__title">Connectivity</h3>
              <ul className="feature__list">
                <li className="feature__item">
                  Hands Free Wireless Audio
                </li>
                <li className="feature__item">
                  Bluetooth 4.0 LE
                </li>
                <li className="feature__item">
                  Wi-Fi 2.4 GHz (802.11 b/g/n)
                </li>
                <li className="feature__item">
                  Smart Multiroom System Set Up
                </li>
                <li className="feature__item">
                  Party Mode with 6.0 Units and above
                </li>
                <li className="feature__item">
                  Powerful MESHNET Multi Speaker Network
                </li>
              </ul>
            </div> */}

            {/* <div className="feature feature--mobile feature--mobile-3" id="featureThree">
              <h3 className="feature__title">App Features</h3>
              <ul className="feature__list">
                <li className="feature__item">
                  Customize Music Schedule
                </li>
                <li className="feature__item">
                  Wake Up with Favorite Songs
                </li>
                <li className="feature__item">
                  Home Detection Auto Wake Up
                </li>
                <li className="feature__item">
                  Color Wheel & Saturation Change
                </li>
              </ul>
            </div> */}

            <div className="Features__controls">
              <div>
                <button
                  className="Features__controls-button Features__controls-button--prev-inactive"
                  id="prevInactive"
                  ref={previous}
                  onClick={() => handlePrevious()}
                >
                </button>
                {/* <button
                    className="Features__controls-button Features__controls-button--prev-active"
                    id="prevActive">
                </button> */}

                {/* <button
                    className="Features__controls-button Features__controls-button--next-inactive"
                    id="nextInactive">
                </button> */}
                <button
                  className="Features__controls-button Features__controls-button--next-active"
                  id="nextActive"
                  ref={next}
                  onClick={() => handleNext()}
                >
                </button>
              </div>

              <div className="Features__controls-number">
                <p 
                  className="Features__controls-number-prev" 
                  id="featureNumber"
                >
                  0{slideIndex + 1}
                </p>
              </div>
            </div>
          </div>

          <div className="Features__background"></div>
          
          {features.map((feature, index) => (
              <Feature 
                feature={feature}
                index={index}
                mobile={false}
                slideIndex={slideIndex}
                key={feature.title}
              />
            ))}
          {/* <div className="feature feature--1">
            <h3 className="feature__title">Sound & Music</h3>
            <ul className="feature__list">
              <li className="feature__item">
                Feel-in-chest Base Power
              </li>
              <li className="feature__item">
                Lossless Digital Audio Transmission
              </li>
              <li className="feature__item">
                Easy & Stable Stereo Pairing
              </li>
              <li className="feature__item">
                Crisp and Clear High Frequency Sound
              </li>
              <li className="feature__item">
                Streams from Cloud Music and Local Library
              </li>
              <li className="feature__item">
                Auto Music Playback from Last Song Stopped
              </li>
            </ul>
          </div>

          <div className="feature feature--2">
            <h3 className="feature__title">Connectivity</h3>
            <ul className="feature__list">
              <li className="feature__item">
                Hands Free Wireless Audio
              </li>
              <li className="feature__item">
                Bluetooth 4.0 LE
              </li>
              <li className="feature__item">
                Wi-Fi 2.4 GHz (802.11 b/g/n)
              </li>
              <li className="feature__item">
                Smart Multiroom System Set Up
              </li>
              <li className="feature__item">
                Party Mode with 6.0 Units and above
              </li>
              <li className="feature__item">
                Powerful MESHNET Multi Speaker Network
              </li>
            </ul>
          </div>

          <div className="feature feature--3">
            <h3 className="feature__title">App Features</h3>
            <ul className="feature__list">
              <li className="feature__item">
                Customize Music Schedule
              </li>
              <li className="feature__item">
                Wake Up with Favorite Songs
              </li>
              <li className="feature__item">
                Home Detection Auto Wake Up
              </li>
              <li className="feature__item">
                Color Wheel & Saturation Change
              </li>
            </ul>
          </div> */}
        </div>
      </section>
    )
  }
)