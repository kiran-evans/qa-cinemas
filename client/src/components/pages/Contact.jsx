import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [header, setHeader] = useState('');
  const [userEmail, setuserEmail] = useState('');
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const contactForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await axios.post('/api/contact', {
      header: header,
      userEmail: userEmail,
      body: body,
    });
    setIsLoading(false);
    console.log(res.data);
  };

  return (
    <div className='ContactForm'>
      <form
        className=' Form'
        onSubmit={(e) => {
          contactForm(e);
        }}
      >
        <h2 className='FormHeader'>Submit a query</h2>
        <label>Header (*)</label>
        <input
          className='FormInput'
          type='text'
          required
          minLength={3}
          maxLength={20}
          onChange={(e) => setHeader(e.target.value)}
          placeholder='e.g. Love this website!'
        />
        <label>Email (*)</label>
        <input
          className='FormInput'
          type='email'
          required
          onChange={(e) => setuserEmail(e.target.value)}
          placeholder='e.g. joe.bloggs@gmail.com'
        />

        <label>Body (*)</label>
        <textarea
          className='textArea'
          type='text'
          required
          onChange={(e) => setBody(e.target.value)}
          placeholder='Type here...'
        />
        <button className='formSubmitButton' type='submit' disabled={isLoading}>
          {isLoading && <i className='fas fa-spinner fa-pulse' />}
          {!isLoading && 'Submit'}
        </button>
      </form>
      <h4 className='physLocation'>QA ltd.</h4>
      <h4 className='physLocation'>
        1st Floor, International House, 1 St Katharines Way, London E1W 1UN
      </h4>
      <h4 className='physLocation'>Tel: 0345 074 7829 | Fax: 0345 074 7830</h4>
    </div>
  );
};

export default Contact;
