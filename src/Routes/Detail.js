import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loding from "../components/loding";

function Detail () {
    const [loding, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const urlParams = useParams();
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${urlParams.id}`)).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(()=>{
        getMovie();
    }, []);
    return (
        <div>
            {loding ? 
                <Loding /> : 
                <div style={{
                    background: `url(${movie.background_image_original}) no-repeat`,
                    backgroundSize: 'cover',
                    color: 'white',
                    overflow: 'hidden'
                }}>
                    <img src={movie.large_cover_image} alt={`${movie.title} cover`} style={{float: 'left'}} />
                    <div style={{float: 'left'}}>
                        <h1>Title : {movie.title}</h1>
                        <p>{movie.description_intro}</p>
                        <ul>
                            {movie.genres.map(genre=> <li key={genre}>{genre}</li>)}
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}
export default Detail;