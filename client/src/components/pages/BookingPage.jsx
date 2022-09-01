import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

const BookingPage = () => {

    const [availableMovies, setAvailableMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState('');

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/movies")
            .then(res => {
                setAvailableMovies(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div id="bookingForm">
            <select onChange={(e) => setSelectedMovie(e.target.value)}>
                {availableMovies.map(({title}) => <option value={title}>{title}</option>)}
            </select>
            <button type="button">Book Tickets for {selectedMovie}</button>
        </div>
    )

};

export default BookingPage;
