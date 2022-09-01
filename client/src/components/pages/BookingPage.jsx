import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BookingPage = () => {
  const [availableMovies, setAvailableMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [data, setData] = useState([]);

  const [booking, setBooking] = useState({});

  const setEntry = (event) => {
    const { movieTitle, Date, Time, seats, ticketType, name, value } =
      event.target;
    setBooking((prevValue) => ({
      ...prevValue,
      [movieTitle]: value,
      [seats]: value,
      [Date]: value,
      [Time]: value,
      [ticketType]: value,
      [name]: value,
    }));
  };

  const postData = () => {
    axios.post(`http://localhost:5000/api/movies`, booking).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/movies')
      .then((res) => {
        setAvailableMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id='bookingForm'>
      <>
        <h3> Ticket Booking </h3>
        <form action='' className='form'>
          <label htmlFor='name'>Movie</label>
          <select onChange={(e) => setSelectedMovie(e.target.value)}>
            <option value=''>-Select a Movie-</option>
            {availableMovies.map(({ title }) => (
              <option value={booking.movieTitle}>{title}</option>
            ))}
          </select>
          <br />
          <label htmlFor='movieTitle'>Date</label>
          <select onChange={(e) => setSelectedDate(e.target.value)}>
            <option value=''>-Select a Date-</option>
            <option value={booking.Date}>Friday: 09/09/2022</option>
            <option value={booking.Date}>Saturday: 10/09/2022</option>
            <option value={booking.Date}>Sunday: 11/09/2022</option>
            <option value={booking.Date}>Monday: 12/09/2022</option>
            ))
          </select>
          <br />
          <br />
          <label htmlFor='movieTitle'>Time</label>
          <select onChange={(e) => setSelectedTime(e.target.value)}>
            <option value=''>-Select a Time-</option>
            <option value={booking.Time}>10:30am</option>
            <option value={booking.Time}>11:30am</option>
            <option value={booking.Time}>4pm</option>
            <option value={booking.Time}>8pm</option>
            ))
          </select>
          <br />
          <label htmlFor='seats'>No. of Seats:</label>
          <input
            type='number'
            placeholder='Enter no. of seats...'
            id='seats'
            value={booking.seats}
            onChange={setEntry}
          />
          <br />
          <p>Please select your ticket type:</p>
          <input
            type='radio'
            id='adult'
            name='ticketType'
            value={booking.ticketType}
            onChange={setEntry}
          />
          <label htmlFor='adult'>Adult</label>
          <br />
          <input
            type='radio'
            id='child'
            name='ticketType'
            value={booking.ticketType}
            onChange={setEntry}
          />
          <label htmlFor='child'>Child</label>
          <br />
          <input
            type='radio'
            id='concession'
            name='ticketType'
            value={booking.ticketType}
            onChange={setEntry}
          />
          <label htmlFor='concession'>Concession</label>
          <br />
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            placeholder='Enter name...'
            id='name'
            value={booking.name}
            onChange={setEntry}
          />
          <br />
          <button type='button' onClick={postData}>
            Book Tickets!
          </button>
        </form>
      </>
    </div>
  );
};

export default BookingPage;
