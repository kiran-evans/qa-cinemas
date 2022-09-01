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
                <option value="">-Select a Movie-</option>
                {availableMovies.map(({title}) => <option value={title}>{title}</option>)}
            </select>
            {(selectedMovie) ? <button type="button">Book Tickets for {selectedMovie}</button> : null}
        </div>
    )

};

export default BookingPage;
