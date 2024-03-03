import { Link, useLocation } from 'react-router-dom';
import css from './styles.module.css';
import PropTypes from 'prop-types';

const TrendingMovies = ({ movies, route }) => {
  const location = useLocation();
  return (
    <ul className={css.ul}>
      {movies.map(movie => {
        const path = route ? `movies/${movie.id}` : `${movie.id}`;
        return (
          <li key={movie.id}>
            <Link to={path} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

TrendingMovies.propTypes = {
  movies: PropTypes.array.isRequired,
  route: PropTypes.bool.isRequired,
};

export default TrendingMovies;
