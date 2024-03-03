import { NavLink } from 'react-router-dom';
import css from './styles.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &:visited {
    color: black;
  }

  &.active {
    color: orange;
  }
`;

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.ul}>
          <li>
            <StyledLink to="/">HOME</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">MOVIES</StyledLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
