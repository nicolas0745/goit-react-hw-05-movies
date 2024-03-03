import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchTrendMovies } from 'js/fetchApi';
import { useEffect, useState } from 'react';
import css from './styles.module.css';

const Movie = () => {
  const location = useLocation();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [castInfo, setCastInfo] = useState(null);
  const [reviews, setReviews] = useState(null);
  const backUrl = location.state?.from ?? '/movies';
  useEffect(() => {
    const fetchMovie = async () => {
      const movieInfo = await fetchTrendMovies(
        `https://api.themoviedb.org/3/movie/${id}`
      );
      const { cast } = await fetchTrendMovies(
        `https://api.themoviedb.org/3/movie/${id}/credits`
      );

      const { results } = await fetchTrendMovies(
        `https://api.themoviedb.org/3/movie/${id}/reviews`
      );
      setReviews(results);
      setMovie(movieInfo);
      setCastInfo(cast);
    };
    fetchMovie();
  }, [id]);
  return (
    movie && (
      <div className={css.container}>
        <Link to={backUrl} className={css.backLink}>
          {' '}
          {'<- go back'}
        </Link>
        <div className={css.movie_info}>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt=""
          />
          <div className={css.movieDescription}>
            <h1>{movie.title}</h1>
            <p>User score : {movie.popularity}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p className={css.genres}>
              {movie.genres.map(genre => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </p>
          </div>
        </div>
        <div className={css.aditionalInfo}>
          <h3>Additional information</h3>
          <div className={css.links}>
            <Link to="cast" state={{ cast: castInfo, from: backUrl }}>
              Cast
            </Link>
            <Link to="Reviews" state={{ infoReviews: reviews, from: backUrl }}>
              Reviews
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    )
  );
};

export default Movie;
