import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieCard from '../misc/MovieCard';

const ListingsGallery = (props) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/movies"); // Get all movies in the db
                setMovies(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getMovies();
    }, []);

    return (
        <div className="listingsGalleryContainer">
            <h1 className="listingsGalleryTitle">Now Showing</h1>

            <div className="moviesListContainer">
                <div className="moviesList">
                    {/* If there are movies in the state, print them. Else display error. */}
                    {movies ? movies.map(movie => (
                        // Only display movies which have already been released
                        ((Date.now() - new Date(Date.parse(movie.dateReleased))) >= 0) &&
                        <MovieCard key={movie._id} title={movie.title} classification={movie.classification} description={movie.description} dateReleased={movie.dateReleased} poster={movie.poster} actors={movie.actors} director={movie.director} showtimes={movie.showtimes} setMovie={props.setMovie} movie={movie} />
                    )) : <p>Error: Coudn't load movies. Make sure server is running!</p>}
                </div>
            </div>
        </div>
    )
}

export default ListingsGallery;