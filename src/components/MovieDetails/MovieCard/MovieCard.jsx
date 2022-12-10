import ImagePosterPath from './ImagePoster';
import { Section, GengesList, Container, Item } from './MovieCard.styled';

const Card = ({
  movie: { original_title, overview, genres, poster_path, vote_average },
}) => {
  return (
    <Section>
      <ImagePosterPath path={poster_path} alt={original_title} />
      <Container>
        <h1>{original_title}</h1>
        <p>User Score: {vote_average}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <GengesList>
          {genres &&
            genres.map(elem => {
              return <Item key={elem.id}>{elem.name}</Item>;
            })}
        </GengesList>
      </Container>
    </Section>
  );
};
export default Card;
