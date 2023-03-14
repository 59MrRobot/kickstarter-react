import React from 'react';
import './Form.scss';
import '../../styles/button.scss';

export const Form: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <form
      action="#"
      method="post"
      className="Form Questions__form"
      id="form"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        name="email"
        placeholder="Your email"
        className="Form__field"
        required
      />
      <textarea
        name="message"
        placeholder="Your message"
        className="Form__field Form__field--message"
        required></textarea>

      <button className="button Form__button">Send</button>
    </form>
  )
}