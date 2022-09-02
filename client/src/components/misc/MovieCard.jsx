import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
    const { title, classification, description, dateReleased, poster } = props;

    const fourWeeks = 1000 * 60 * 60 * 24 * 28;
    const released = new Date(Date.parse(dateReleased));
    const movieAge = Date.now() - released;

    const navigator = useNavigate();
  
    const goToMovie = () => {
      props.setMovie(props.movie);  
      navigator('/movie');
    }

    return (
        <div className="movieCard">
            {(movieAge <= fourWeeks && movieAge >= 0) && <h2>New Release</h2>}
            {(movieAge < 0) && <h2>Coming Soon</h2>}
            <div className="moviePoster">
                {<img src={poster ? `/posters/${poster}` : '/posters/noPoster.png'} alt={'Poster for ' + title} />}
            </div>
            <h1>{title}</h1>
            <h2>{movieAge < 0 ? 'Arriving on' : 'Released on'} {new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' }).format(released)}</h2>
            <div className="movieClassification">{<img src={`/classifications/${classification}.png`} alt={`Rated ${classification} symbol`} />}</div>
            <p>{description}</p>
            <button onClick={() => goToMovie()} className="seeTimesButton">View showtimes</button>
        </div>
    )
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    classification: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    dateReleased: PropTypes.string.isRequired,
    poster: PropTypes.string
}

export default MovieCard;