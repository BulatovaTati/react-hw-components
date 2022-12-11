import ImagePosterPath from './ImagePoster';
import { Section, GengesList, Container, Item } from './MovieCard.styled';
import { Img } from './MovieCard.styled';
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
      <Img>
        <ImagePosterPath path={poster_path} alt={original_title} />
      </Img>
      <Container>
        <h1>
          {original_title} {release_date?.slice(0, 4)}
        </h1>
        <p>User Score: {(vote_average * 10).toFixed(1)}%</p>
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
