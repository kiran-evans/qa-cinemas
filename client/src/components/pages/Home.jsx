import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieCard from '../movies/MovieCard';

const Home = () => {

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
        <div className="homeContainer">
            <h1 className="homeTitle">Now Showing</h1>

            <div className="moviesList">
                {movies.map(movie => (
                    <MovieCard key={movie.id} title={movie.title} classification={movie.classification} description={movie.description} dateReleased={movie.dateReleased} post={movie.poster} />
                ))}
            </div>
        </div>
    )
}

export default Home;