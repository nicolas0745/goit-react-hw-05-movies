import { fetchTrendMovies } from 'js/fetchApi';
import { lazy, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './styles.module.css';

const TrendingMovies = lazy(() => import('../../components/TrendingMovies'));

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const fetchMovies = async value => {
    const { results } = await fetchTrendMovies(
      `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`
    );
    return results;
  };

  useEffect(() => {
    let searchValue = searchParams.get('query');
    const fetch = async () => {
      if (searchValue) {
        const results = await fetchMovies(searchValue);
        setMovies(results);
      }
    };
    fetch();
  }, [searchParams]);

  const onHandleSubmit = async e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.search.value;
    const results = await fetchMovies(searchValue);
    setSearchParams({ query: searchValue });
    setMovies(results);
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={onHandleSubmit} className={css.form}>
        <input type="text" name="search" required />
        <button type="submit">Search</button>
      </form>
      <div>
        {movies.length ? (
          <TrendingMovies movies={movies} route={false} />
        ) : undefined}
      </div>
    </>
  );
};

export default Movies;
