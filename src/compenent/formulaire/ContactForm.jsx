import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='contact-form'>
        <div className='form-group'>
          <label htmlFor='first-name'>Prénom:</label>
          <input
            type='text'
            id='first-name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='last-name'>Nom:</label>
          <input
            type='text'
            id='last-name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>E-mail:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='form-control'
          ></textarea>
        </div>
        <button type='submit' className='btn btn-primary'>
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
