import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieCard from '../misc/MovieCard';

const NewReleasesGallery = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/movies");
                setMovies(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getMovies();
    }, []);

    const twoWeeks = 1000 * 60 * 60 * 24 * 14;

    return (
        <div className="newReleasesGalleryContainer">
            <h1 className="newReleasesGalleryTitle">New Releases &amp; Coming Soon</h1>

            <div className="moviesListContainer">
                <div className="moviesList">
                    {movies ? movies.map(movie => (
                        ((Date.now() - new Date(Date.parse(movie.dateReleased)) < twoWeeks)) ?
                        <MovieCard key={movie._id} title={movie.title} classification={movie.classification} description={movie.description} dateReleased={movie.dateReleased} poster={movie.poster} />
                        : ''
                    )) : <p>Error: Coudn't load movies. Make sure server is running!</p>}
                </div>
            </div>
        </div>
    )
}

export default NewReleasesGallery;