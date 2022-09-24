// import Button from "./Button";
import { useEffect, useState } from "react";

function App() {
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
        movies.map(movie => (
          <li key={movie.id}>
            <img src={movie.medium_cover_image} alt="영화 커버 이미지" />
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>
              {movie.genres.map(genre => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </li>
        ))
      }</ul> 
    }</div>
  );
}

export default App;
