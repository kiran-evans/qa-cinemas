import { PropTypes } from "prop-types";

const MovieCard = (props) => {
    const { title, classification, description, dateReleased, poster } = props;

    return (
        <div className="movieCard">
            <div className="moviePoster">
                {<img src={poster ? `/posters/${poster}` : '/posters/noPoster.png'} alt={'Poster for ' + title} />}
            </div>
            <h1>{title}</h1>
            <h2>Released {dateReleased}</h2>
            <div className="movieClassification">{<img src={`/classifications/${classification}.png`} alt={`Rated ${classification} symbol`} />}</div>
            <p>{description}</p>
            <button className="seeTimesButton">View showtimes</button>
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