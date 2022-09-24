import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie ({coverImg, title, summary, genres}) {
    return (
        <li>
            <img src={coverImg} alt="영화 커버 이미지" />
            <h2><Link to="/detail">{title}</Link></h2>
            <p>{summary}</p>
            <ul>
                {genres.map(genre => (
                <li key={genre}>{genre}</li>
                ))}
            </ul>
        </li>
    )
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;