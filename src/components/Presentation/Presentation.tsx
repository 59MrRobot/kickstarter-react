import React, { useRef } from 'react'
import './Presentation.scss';

export const Presentation: React.FC = React.memo(
  () => {
    const video = useRef<HTMLVideoElement>(null);
    const play = useRef<HTMLButtonElement>(null);

    return (
      <section className="Presentation">
        <video
          poster={`${process.env.PUBLIC_URL}/images/presentation.png`}
          ref={video}
          preload="auto"
          className="Presentation__video"
          onClick={() => {
            if (video.current!.paused === false) {
              video.current!.pause();
              play.current!.style.visibility = 'visible';
            }
          }}
        >
          <source src={`${process.env.PUBLIC_URL}/videos/luna.mp4`} type="video/mp4" />
        </video>

        <button 
          className="Presentation__play" 
          ref={play}
          onClick={() => {
            if (video.current!.paused === true) {
              video.current!.play();
              play.current!.style.visibility = 'hidden';
            } else {
              video.current!.pause();
            }
          }}
        ></button>
      </section>
    )
  }
);