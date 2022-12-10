import { NavLink } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <NavLink to={`movies/${id}`} key={id}>
              {title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
