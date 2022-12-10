const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const noPosterImg =
  'https://sd.keepcalms.com/i/sorry-no-picture-available-2.png';

const Card = ({
  movie: { original_title, overview, genres, poster_path, vote_average },
}) => {
  return (
    <section>
      <img
        src={`${
          poster_path === null ? noPosterImg : BASE_IMG_URL + poster_path
        }`}
        alt={original_title}
        width="320"
      />
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
