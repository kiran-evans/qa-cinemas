import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BookingPage = () => {
  const [availableMovies, setAvailableMovies] = useState([]);
  const [title, setSelectedMovie] = useState('');
  const [date, setSelectedDate] = useState('');
  const [time, setSelectedTime] = useState('');
  const [seats, setSelectedSeat] = useState('');
  const [ticketType, setTicketType] = useState('');
  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const Booking = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // const Submit = 'http://localhost:5000/api/booking';

    const res = await axios.post('/api/booking', {
      title: title,
      date: date,
      time: time,
      seats: seats,
      ticketType: ticketType,
      name: name,
    });
    setIsLoading(false);
    console.log(res.data);
  };

  // const getMovie = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   const Submit = 'http://localhost:5000/api/movies';

  //   const res = await axios.get(`/api/movies/${selectedMovie._id}`);
  //   setSelectedMovie(res.data);
  // };

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/movies')
      .then((res) => {
        setAvailableMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id='bookingForm' className='ContactForm'>
      <h3> Ticket Booking </h3>
      <form
        action=''
        className='Form'
        onSubmit={(e) => {
          Booking(e);
        }}
      >
        <label htmlFor='name'>Movie</label>
        <select onChange={(e) => setSelectedMovie(e.target.value)}>
          <option value=''>-Select a Movie-</option>
          {availableMovies.map(({ title }) => (
            <option
              value={title}
              onChange={(e) => setSelectedMovie(e.target.value)}
            >
              {title}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor='movieTitle'>Date</label>
        <select onChange={(e) => setSelectedDate(e.target.value)}>
          <option value=''>-Select a Date-</option>
          <option onChange={(e) => setSelectedDate(e.target.value)}>
            Friday: 09/09/2022
          </option>
          <option onChange={(e) => setSelectedDate(e.target.value)}>
            Saturday: 10/09/2022
          </option>
          <option onChange={(e) => setSelectedDate(e.target.value)}>
            Sunday: 11/09/2022
          </option>
          <option onChange={(e) => setSelectedDate(e.target.value)}>
            Monday: 12/09/2022
          </option>
          ))
        </select>
        <br />
        <br />
        <label htmlFor='movieTitle'>Time</label>
        <select onChange={(e) => setSelectedTime(e.target.value)}>
          <option value=''>-Select a Time-</option>
          {/* {selectedMovie.map((showtimes) => (
              <option value={showtimes}>{showtimes}</option>
            ))} */}
          <option>10:30am</option>
          <option>11:30am</option>
          <option>4pm</option>
          <option>8pm</option>
          ))
        </select>
        <br />
        <label htmlFor='seats'>No. of Seats:</label>
        <input
          type='number'
          placeholder='Enter no. of seats...'
          id='seats'
          onChange={(e) => setSelectedSeat(e.target.value)}
        />
        <br />
        <p>Please select your ticket type:</p>
        <input
          type='radio'
          id='adult'
          name='ticketType'
          onChange={(e) => setTicketType(e.target.value)}
        />
        <label htmlFor='adult'>Adult</label>
        <br />
        <input
          type='radio'
          id='child'
          name='ticketType'
          onChange={(e) => setTicketType(e.target.value)}
        />
        <label htmlFor='child'>Child</label>
        <br />
        <input
          type='radio'
          id='concession'
          name='ticketType'
          onChange={(e) => setTicketType(e.target.value)}
        />
        <label htmlFor='concession'>Concession</label>
        <br />
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          placeholder='Enter name...'
          id='name'
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <button type='submit'>
          {isLoading && <i className='fas fa-spinner fa-pulse' />}
          {!isLoading && 'Book Tickets!'}
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
