import { useLocation } from 'react-router-dom';
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
