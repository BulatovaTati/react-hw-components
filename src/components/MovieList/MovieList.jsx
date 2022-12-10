import { NavLink } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies &&
        movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <NavLink to={`${id}`} key={id}>
                {title}
              </NavLink>
            </li>
          );
        })}
    </ul>
  );
};

export default MoviesList;
