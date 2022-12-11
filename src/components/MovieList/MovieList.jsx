import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TrendList, Card, Link } from './MovieList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  const CreateLink = ({ id, title }) => {
    return location.pathname === '/' ? (
      <Link to={`movies/${id}`} key={id} state={{ from: location }}>
        {title}
      </Link>
    ) : (
      <Link to={`${id}`} key={id} state={{ from: location }}>
        {title}
      </Link>
    );
  };

  return (
    <TrendList>
      {movies.length > 0 &&
        movies.map(({ id, title }) => {
          return (
            <Card key={id}>
              <CreateLink id={id} title={title} />
            </Card>
          );
        })}
    </TrendList>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
