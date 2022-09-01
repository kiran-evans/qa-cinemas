import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieCard from '../misc/MovieCard';

const ListingsGallery = () => {

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

    return (
        <div className="listingsGalleryContainer">
            <h1 className="listingsGalleryTitle">Now Showing</h1>

            <div className="moviesListContainer">
                <div className="moviesList">
                    {movies ? movies.map(movie => (
                        ((Date.now() - new Date(Date.parse(movie.dateReleased))) >= 0) &&
                        <MovieCard key={movie._id} title={movie.title} classification={movie.classification} description={movie.description} dateReleased={movie.dateReleased} poster={movie.poster} />
                    )) : <p>Error: Coudn't load movies. Make sure server is running!</p>}
                </div>
            </div>
        </div>
    )
}

export default ListingsGallery;