import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const BookingPage = () => {
  const [availableMovies, setAvailableMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState('');
  const [selectedMovieId, setSelectedMovieId] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [numberOfSeats, setNumberOfSeats] = useState('');
  const [ticketType, setTicketType] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const Booking = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await axios.post('/api/booking', {
      title: selectedMovie.title,
      date: selectedDate,
      time: selectedTime,
      seats: numberOfSeats,
      ticketType: ticketType,
      name: name,
    });
    setIsLoading(false);
    console.log(res.data);
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/movies')
      .then((res) => {
        setAvailableMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  useEffect(() => {

    const handleSelectMovie = async () => {
      const res = await axios.get(`http://localhost:5000/api/movies/${selectedMovieId}`);
      setSelectedMovie(res.data);
    }

    handleSelectMovie();

  }, [selectedMovieId])

  return (
    <div id='bookingForm' className='ContactForm'>
      <h3> Ticket Booking </h3>
      <form className='Form' onSubmit={(e) => Booking(e)}>
        <label htmlFor='name'>Movie</label>
        <select required onChange={(e) => setSelectedMovieId(e.target.value)} value={selectedMovie._id}>
          <option value=''>-Select a Movie-</option>
          {availableMovies.map(movie => (
            <option key={movie._id} value={movie._id}>{movie.title}</option>
          ))}
        </select>

        {selectedMovie &&
          
          <div>
        
          <label htmlFor='movieTitle'>Date</label>
          <select required onChange={(e) => setSelectedDate(e.target.value)} value={selectedDate}>
            <option value=''>-Select a Date-</option>
            {selectedMovie.showdates && selectedMovie.showdates.map((showdate, i) => (
              <option key={i} value={showdate}>{showdate}</option>
            ))}
          </select>

          <label htmlFor='movieTitle'>Time</label>
          <select required onChange={(e) => setSelectedTime(e.target.value)} value={selectedTime}>
            <option value=''>-Select a Time-</option>
            {selectedMovie.showtimes && selectedMovie.showtimes.map((showtimes, i) => (
                <option key={i} value={showtimes}>{showtimes}</option>
              ))}
          </select>
        
        <label htmlFor='seats'>No. of Seats:</label>
        <input
          required
          type='number'
          placeholder='Enter no. of seats...'
          id='seats'
          onChange={(e) => setNumberOfSeats(e.target.value)}
          value={numberOfSeats}
        />
        
        <p>Please select your ticket type:</p>

        <label htmlFor='adult'>Adult</label>
        <input
          required
          type='radio'
          id='adult'
          name='ticketType'
          onChange={(e) => setTicketType(e.target.value)}
        />

        <label htmlFor='child'>Child</label>
        <input
          required
          type='radio'
          id='child'
          name='ticketType'
          onChange={(e) => setTicketType(e.target.value)}
        />

        <label htmlFor='concession'>Concession</label>
        <input
          required
          type='radio'
          id='concession'
          name='ticketType'
          onChange={(e) => setTicketType(e.target.value)}
        />

        <label htmlFor='name'>Name:</label>
        <input
          required
          type='text'
          placeholder='Enter name...'
          id='name'
          onChange={(e) => setName(e.target.value)}
        />
        
        <button type='submit'>
          {isLoading && <i className='fas fa-spinner fa-pulse' />}
          {!isLoading && 'Book Tickets!'}
        </button>
          
          </div>
        
        }
      </form>
    </div>
  );
};

export default BookingPage;
