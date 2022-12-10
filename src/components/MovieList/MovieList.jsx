import { NavLink, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  const CreateLink = ({ id, title }) => {
    return location.pathname === '/' ? (
      <NavLink to={`movies/${id}`} key={id} state={{ from: location }}>
        {title}
      </NavLink>
    ) : (
      <NavLink to={`${id}`} key={id} state={{ from: location }}>
        {title}
      </NavLink>
    );
  };

  return (
    <ul>
      {movies.length > 0 &&
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
