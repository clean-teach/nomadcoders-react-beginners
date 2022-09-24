import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Hoem () {
    const [loding, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
    const json = await (await fetch('https://yts.mx/api/v2/list_movies.json')).json();
    setMovies(json.data.movies);
    setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);

    return (
    <div >
        {loding ? <strong>Loding ...</strong> : <ul>{
        movies.map(movie => console.log(movie)(
            <Movie key={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />
        ))
        }</ul> 
    }</div>
    );
}
export default Hoem;