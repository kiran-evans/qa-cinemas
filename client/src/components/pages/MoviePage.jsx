const MoviePage = (props) => {
    const { movie } = props;

    const fourWeeks = 1000 * 60 * 60 * 24 * 28;
    const released = new Date(Date.parse(movie.dateReleased));
    const movieAge = Date.now() - released;
    
    return (
        <div className="moviePage">
            <div className="movieInfo">
                <div className="moviePagePoster">
                    {<img src={movie.poster ? `/posters/${movie.poster}` : '/posters/noPoster.png'} alt={'Poster for ' + movie.title} />}
                </div>
                <div className="moviePageText">
                    {(movieAge <= fourWeeks && movieAge >= 0) && <h2>New Release</h2>}
                    {(movieAge < 0) && <h2>Coming Soon</h2>}
                    <h1>{movie.title}</h1>
                    <h2>{movieAge < 0 ? 'Arriving on' : 'Released on'} {new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' }).format(released)}</h2>
                    <div className="movieClassification">{<img src={`/classifications/${movie.classification}.png`} alt={`Rated ${movie.classification} symbol`} />}</div>
                    <p>{movie.description}</p>
                    <p>Director: {movie.director}</p>
                    <p>Actors: {movie.actors}</p>
                </div>
            </div>
            <div className="movieShowtimes">
                <h3>Showtimes</h3>
                <div className="showTimesList">
                    {movie.showtimes.length > 0 && movieAge >= 0 ? movie.showtimes.map((time, i) => (
                        <div key={i} className="showTime">{time}</div>
                    )) : <p>There are no showtimes for this movie.</p>}
                    {movieAge < 0 && <p>Check back here on {new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' }).format(released)}!</p>}
                </div>
            </div>
        </div>
    )
}

export default MoviePage;