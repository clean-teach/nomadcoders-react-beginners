import ProtoTypes from 'proto-types';

function Movie ({coverImg, title, summary, genres}) {
    return (
        <li>
            <img src={coverImg} alt="영화 커버 이미지" />
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {genres.map(genre => (
                <li key={genre}>{genre}</li>
                ))}
            </ul>
        </li>
    )
}

Movie.ProtoTypes = {
    coverImg: ProtoTypes.string.isRequired,
    title: ProtoTypes.string.isRequired,
    summary: ProtoTypes.string.isRequired,
    genres: ProtoTypes.arrayOf(ProtoTypes.string).isRequired,
};

export default Movie;