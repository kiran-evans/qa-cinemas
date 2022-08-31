import { PropTypes } from "prop-types";

const MovieCard = (props) => {
    const { title, classification, description, dateReleased, poster } = props;

    return (
        <div className="movieCard">
            <div className="moviePoster">
                {poster ? <img src={poster} alt={'Poster for ' + title} /> : <p>No poster available</p>}
            </div>
            <h1>{title}</h1>
            <h2>Released {dateReleased}</h2>
            <div className="movieClassification">{classification}</div>
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