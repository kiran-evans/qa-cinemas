import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookingPage = () => {
  const [availableMovies, setAvailableMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const [selectedMovieId, setSelectedMovieId] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [numberOfAdults, setNumberOfAdults] = useState(0);
  const [numberOfConcessions, setNumberOfConcessions] = useState(0);
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const Booking = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await axios.post('http://localhost:5000/api/booking', {
      title: selectedMovie.title,
      date: selectedDate,
      time: selectedTime,
      seats: [`adults: ${numberOfAdults}`, `concessions: ${numberOfConcessions}`, `children: ${numberOfChildren}`],
      name: name,
      paid: 'false',
    });
    setIsLoading(false);
    setIsConfirmed(res);
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/movies') // Get all available movies in db
      .then((res) => {
        setAvailableMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  useEffect(() => {

    const handleSelectMovie = async () => {
      const res = await axios.get(`http://localhost:5000/api/movies/${selectedMovieId}`); // Get entire movie object from db once user selected movie
      setSelectedMovie(res.data);
    }

    handleSelectMovie();

  }, [selectedMovieId])

  return (
    <div className='bookings'>
      <div className="Form">
        <h1 className='FormHeader'> Ticket Booking </h1>

        {!isConfirmed ? // Unload the form if booking has been confirmed already
          
          <div>
            <form className='bookingForm' onSubmit={(e) => Booking(e)}>
              <label htmlFor='name'>Movie</label>
              <select required onChange={(e) => setSelectedMovieId(e.target.value)} value={selectedMovie && selectedMovie._id}>
                <option value=''>-Select a Movie-</option>
                {availableMovies.map(movie => (
                  <option key={movie._id} value={movie._id}>{movie.title}</option> // Display all available movies as options
                ))}
              </select>

              {selectedMovie && // Only load this part when a movie is selected
                
                <div className='bookingFormPartTwo'>
              
                  <label htmlFor='movieTitle'>Date</label>
                  <input type='date' required onChange={(e) => setSelectedDate(e.target.value)} value={selectedDate} />

                  <label htmlFor='movieTitle'>Time</label>
                  <select required onChange={(e) => setSelectedTime(e.target.value)} value={selectedTime}>
                    <option value=''>-Select a Time-</option>
                    {selectedMovie.showtimes && selectedMovie.showtimes.map((showtimes, i) => (
                        <option key={i} value={showtimes}>{showtimes}</option> // Map all showtimes for movie in db
                      ))}
                  </select>
                  
                  <div className="ticketType">

                    <label htmlFor='adult'>Adult</label>
                    <input
                      required
                      type='number'
                      min="0"
                      id='adult'
                      name='ticketType'
                      value={numberOfAdults}
                      onChange={(e) => setNumberOfAdults(e.target.value)}
                    />

                    <label htmlFor='child'>Child</label>
                    <input
                      required
                      type='number'
                      min="0"
                      id='child'
                      name='ticketType'
                      value={numberOfChildren}
                      onChange={(e) => setNumberOfChildren(e.target.value)}
                    />

                    <label htmlFor='concession'>Concession</label>
                    <input
                      required
                      type='number'
                      min="0"
                      id='concession'
                      name='ticketType'
                      value={numberOfConcessions}
                      onChange={(e) => setNumberOfConcessions(e.target.value)}
                    />
                        
                  </div>

                  <label htmlFor='name'>Your Name:</label>
                  <input
                    required
                    type='text'
                    placeholder='Enter name...'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  
                  {!isLoading ? <button type='submit'>Book Tickets!</button>
                    : <button disabled>Booking...</button>}
                
                </div>
              
              }
            </form>

          </div>
        
          :
          <div>
            <h2>Your booking has been confirmed!</h2>
            <Link to='/payForTickets'><p>Click here to pay for your tickets</p></Link>
          </div>
        
        }

      </div>

      
    </div>
  );
};

export default BookingPage;
