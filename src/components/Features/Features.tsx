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

            <div className="Features__controls">
              <div>
                <button
                  className="Features__controls-button Features__controls-button--prev-inactive"
                  id="prevInactive"
                  ref={previous}
                  onClick={() => handlePrevious()}
                >
                </button>

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
        </div>
      </section>
    )
  }
)