import React from 'react';
import './Benefit.scss';

interface Props {
  benefit: {
    image: string;
    title: string;
    text: string;
  }
}

export const Benefit: React.FC<Props> = React.memo(
  ({ benefit }) => {
    return (
      <div className="Benefit">
        <img
          src={`${process.env.PUBLIC_URL}/images/benefits/${benefit.image}`}
          alt="compass icon"
          className="Benefit__image"
        />

        <h3 className="Benefit__title">{benefit.title}</h3>

        <p className="Benefit__text">{benefit.text}</p>
      </div>
    )
  }
)