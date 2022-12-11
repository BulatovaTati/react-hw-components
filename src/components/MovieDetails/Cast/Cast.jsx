import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services/Fetch';
import ImagePosterPath from '../MovieCard/ImagePoster';
import { List, Item } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [creadits, setCredits] = useState([]);

  useEffect(() => {
    async function fetchGredits() {
      try {
        const movies = await getCredits(movieId);
        setCredits(movies.cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchGredits();
  }, [movieId]);

  if (!creadits) return null;

  return (
    <section>
      {creadits.length === 0 && <div>None</div>}
      <List>
        {creadits &&
          creadits.map(({ id, character, name, profile_path }) => {
            return (
              <Item key={id}>
                <ImagePosterPath path={profile_path} alt={name} />
                <span>{name}</span>
                <span>Character: {character}</span>
              </Item>
            );
          })}
      </List>
    </section>
  );
};

export default Cast;
