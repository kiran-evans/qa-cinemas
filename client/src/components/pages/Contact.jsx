import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [header, setHeader] = useState('');
  const [userInput, setuserInput] = useState('');
  const [errorValue, setErrorValue] = useState('');
  const [successfulSubmission, setSuccessfulSubmission] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const ingredients = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const formSubmit = 'localhost:5000/api/movies';
    axios
      .post(formSubmit, {
        header: header,
        userInput: userInput,
      })
      .then(function (response) {
        console.log(response.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        if (response.status === 200) {
          setErrorValue('Submit Successful');
          setSuccessfulSubmission(true);
          setTimeout(() => {
            setSuccessfulSubmission(false);
          }, 1500);
        }
      })
      .catch((err) => {
        setErrorValue(JSON.stringify(err.response));
        console.log(JSON.stringify(err.response));
      });
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className='ContactForm'>
      <form className='IngredientForm' onSubmit={() => ingredients()}>
        <h2 className='FormHeader'>Submit a query</h2>
        <label>Header (*)</label>
        <input
          className='FormInput'
          type='text'
          required
          minLength={3}
          maxLength={20}
          onChange={(e) => setHeader(e.target.value)}
        />
        <label>Email (*)</label>
        <input
          className='FormInput'
          type='email'
          required
          onChange={(e) => setuserInput(e.target.value)}
        />

        <label>Body (*)</label>
        <input
          className='FormInputBody'
          type='text'
          required
          onChange={(e) => setuserInput(e.target.value)}
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
