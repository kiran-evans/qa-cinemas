import MovieCard from '../misc/MovieCard';

const SearchResults = (props) => {

    return (
        <div className="searchResultsContainer">
            <h1 className="searchResultsTitle">Search Results</h1>

            <div className="moviesListContainer">
                <div className="moviesList">
                    {props.searchResult.length > 0 ? props.searchResult.map(movie => (
                        <MovieCard key={movie._id} title={movie.title} classification={movie.classification} description={movie.description} dateReleased={movie.dateReleased} poster={movie.poster} actors={movie.actors ? movie.actors : ''} director={movie.director ? movie.director : ''} showtimes={movie.showtimes ? movie.showtimes : []} setMovie={props.setMovie} movie={movie} />
                    ))
                        : <h2>No results</h2>}
                </div>
            </div>
        </div>
    )
}

export default SearchResults;