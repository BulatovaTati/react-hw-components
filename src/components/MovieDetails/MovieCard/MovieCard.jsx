import ImagePosterPath from './ImagePoster';

const Card = ({
  movie: { original_title, overview, genres, poster_path, vote_average },
}) => {
  return (
    <section>
      <ImagePosterPath path={poster_path} alt={original_title} />
      <h1>{original_title}</h1>
      <p>User Score:{vote_average}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <ul>
        {genres &&
          genres.map(elem => {
            return <li key={elem.id}>{elem.name}</li>;
          })}
      </ul>
    </section>
  );
};
export default Card;
