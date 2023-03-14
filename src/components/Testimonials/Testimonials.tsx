import React from 'react'
import "./Testimonials.scss";

export const Testimonials: React.FC = React.memo(
  () => {
    return (
      <section className="Testimonials">
        <div className="Testimonials__wrapper">
          <p className="Testimonials__quote">
            “It really took me by surprise honestly to have such full beautiful sound that coming out of this small compact device. And with the brush aluminum surface, it feels so familiar. Like my iPhone.”
          </p>

          <img
            src={`${process.env.PUBLIC_URL}/images/testimonials/person.png`}
            alt="garrett martin"
            className="Testimonials__image"
          />

          <h3 className="Testimonials__name">Garrett Martin</h3>

          <p className="Testimonials__position">Creative Director</p>
        </div>
      </section>
    )
  }
)