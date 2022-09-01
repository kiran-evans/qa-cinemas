import { useLocation } from "react-router-dom";
import MovieCard from '../movies/MovieCard';

const SearchResults = () => {

    const location = useLocation();

    return (
        <div className="searchResultsContainer">
            <h1 className="searchResultsTitle">SearchResults</h1>

            <div className="moviesListContainer">
                <div className="moviesList">
                    {location.state.result.map(movie => (
                        <MovieCard key={movie._id} title={movie.title} classification={movie.classification} description={movie.description} dateReleased={movie.dateReleased} poster={movie.poster} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchResults;