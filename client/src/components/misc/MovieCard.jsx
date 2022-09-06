import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
    const { title, classification, description, dateReleased, poster, actors, director, showtimes } = props;

    const fourWeeks = 1000 * 60 * 60 * 24 * 28;
    const released = new Date(Date.parse(dateReleased));
    const movieAge = Date.now() - released;

    const navigator = useNavigate();
  
    const goToMovie = () => {
      props.setMovie(props.movie);  
      navigator('/movie');
    }

    return (
        <div className="movieCard" onClick={() => goToMovie()} >
            {(movieAge <= fourWeeks && movieAge >= 0) && <h2>New Release</h2>}
            {(movieAge < 0) && <h2>Coming Soon</h2>}
            {/* If no poster value is in the db, default to noPoster.png */}
            <div className="moviePoster">
                {<img src={poster ? `/posters/${poster}` : '/posters/noPoster.png'} alt={'Poster for ' + title} />}
            </div>
            <h1>{title}</h1>
            {/* If movie hasn't been released, change to 'Arriving on'. Else, convert release date into readable en-GB format. */}
            <h2>{movieAge < 0 ? 'Arriving on' : 'Released on'} {new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' }).format(released)}</h2>
            {/* Match classification value in db to corresponding /public/ image */}
            <div className="movieClassification">{<img src={`/classifications/${classification}.png`} alt={`Rated ${classification} symbol`} />}</div>
            <p>{description}</p>
            <p>Starring: {actors}</p>
            <p>Directed by: {director}</p>
            <h3>Showtimes</h3>
            <div className="showTimesList">
                {showtimes.length > 0 && movieAge >= 0 ? showtimes.map((time, i) => (
                    <div key={i} className="showTime">{time}</div>
                )) : <p>There are no showtimes for this movie yet.</p>}
                {/* If movie hasn't been released, 'Check back here on', convert release date into readable en-GB format. */}
                {movieAge < 0 && <p>Check back here on {new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' }).format(released)}!</p>}
            </div>
        </div>
    )
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    classification: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    dateReleased: PropTypes.string.isRequired,
    poster: PropTypes.string,
    actors: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    showtimes: PropTypes.array.isRequired,
}

export default MovieCard;