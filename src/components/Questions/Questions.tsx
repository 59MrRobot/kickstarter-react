import React from 'react';
import './Questions.scss';
import '../../styles/title.scss';
import { Form } from '../Form';

export const Questions: React.FC = () => {
  return (
    <section className="Questions" id="questions">
      <div className="Questions__wrapper">
        <h2 className="title Questions__title">DO YOU HAVE ANY QUESTIONS?</h2>

        <Form />
      </div>
    </section>
  )
}
