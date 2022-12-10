import { NavLink, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  const CreateLink = ({ id, title }) => {
    return location.pathname === '/' ? (
      <NavLink to={`movies/${id}`} key={id}>
        {title}
      </NavLink>
    ) : (
      <NavLink to={`${id}`} key={id}>
        {title}
      </NavLink>
    );
  };

  return (
    <ul>
      {movies &&
        movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <CreateLink id={id} title={title} />
            </li>
          );
        })}
    </ul>
  );
};

export default MoviesList;
