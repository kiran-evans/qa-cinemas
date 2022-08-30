import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
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
    const formSubmit = 'http://localhost:8080/api/donation/createForm';
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
    <div className={'FormDonation'}>
      <div className='Backround'>
        <div className='FormPage'>
          <form className='IngredientForm' onSubmit={ingredients}>
            <h1 className='FormHeader'>Submit a query</h1>
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
              className='FormInput'
              type='text'
              required
              onChange={(e) => setuserInput(e.target.value)}
            />
            <button
              className='formSubmitButton'
              type='submit'
              disabled={isLoading}
            >
              {isLoading && <i className='fas fa-spinner fa-pulse' />}
              {!isLoading && <p>Submit</p>}
            </button>
          </form>
          <h4 className='physLocation'>
            QA LONDON INTERNATIONAL HOUSE CENTRE E1W
          </h4>
          <h4 className='physLocation'>
            1st Floor International House 1 St Katharines Way London E1W 1UN
          </h4>
          <h4 className='physLocation'>
            Tel: 0345 074 7829 Fax: 0345 074 7830
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
