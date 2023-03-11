import React from 'react'
import './Technology.scss';
import '../../styles/title.scss';

export const Technology: React.FC = React.memo(
  () => {
    return (
      <section className="Technology" id="technology">
        <div className="Technology__wrapper">
          <h2 className="title Technology__title">Technology</h2>

          <img
            src={`${process.env.PUBLIC_URL}/images/technology.png`}
            alt="technology"
            className="Technology__image"
          />
        </div>
      </section>
    )
  }
)