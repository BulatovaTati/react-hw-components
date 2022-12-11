import PropTypes from 'prop-types';
import ImagePosterPath from './ImagePoster';
import { Section, GengesList, Container, Item } from './MovieCard.styled';
import { Wrapper } from './MovieCard.styled';

const Card = ({
  movie: {
    original_title,
    overview,
    genres,
    poster_path,
    vote_average,
    release_date,
  },
}) => {
  return (
    <Section>
      <Wrapper>
        <ImagePosterPath path={poster_path} alt={original_title} />
      </Wrapper>
      <Container>
        <h1>
          {original_title} {release_date?.slice(0, 4)}
        </h1>
        <p>User Score: {(vote_average * 10).toFixed(1)}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <GengesList>
          {genres && genres.map(({ id, name }) => <Item key={id}>{name}</Item>)}
        </GengesList>
      </Container>
    </Section>
  );
};
export default Card;

Card.propTypes = {
  original_title: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
  release_date: PropTypes.string,
};
