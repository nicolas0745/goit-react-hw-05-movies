import { nanoid } from 'nanoid';
import { useLocation } from 'react-router-dom';
import css from './styles.module.css';

const Cast = () => {
  const location = useLocation();
  const castInfo = location.state.cast;

  return (
    castInfo && (
      <div>
        <ul>
          {castInfo.map(e => {
            const path = e.profile_path
              ? `https://image.tmdb.org/t/p/w200${e.profile_path}`
              : 'https://cdn.vectorstock.com/i/1000x1000/63/10/photo-coming-soon-picture-frame-vector-32416310.webp';
            return (
              <li key={nanoid()}>
                <img src={path} alt="img" className={css.img} />
                <h5>{e.name ?? 'No name'}</h5>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
};

export default Cast;
