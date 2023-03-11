import React from 'react';
import './Feature.scss';
import cn from 'classnames';

interface Props {
  feature: {
    title: string;
    list: string[];
  },
  index: number;
  mobile: boolean;
  slideIndex: number;
}

export const Feature: React.FC<Props> = React.memo(
  ({ feature, index, mobile, slideIndex }) => {
    return (
      <div className={cn(
        'Feature',
        mobile && 'Feature--mobile',
        slideIndex === index ? 'Feature--show' : 'Feature--hide',
        mobile && (slideIndex === index ? 'Feature--mobile-show' : 'Feature--mobile-hide'),
        mobile ? `Feature--mobile-${index + 1}` : `Feature--${index + 1}`)}
      >
        <h3 className="Feature__title">{feature.title}</h3>

        <ul className="Feature__list">
          {feature.list.map((item) => (
            <li className="Feature__item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    )
  }
)