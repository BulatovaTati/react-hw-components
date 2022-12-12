import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import { getCredits } from 'services/Fetch';
import ImagePosterPath from '../MovieCard/ImagePoster';
import NoInfo from 'components/NoneInfo/NoneInfo';
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

  if (creadits) {
    animateScroll.scrollMore(500);
  }

  return (
    <section>
      {creadits.length === 0 && <NoInfo />}
      <List>
        {creadits &&
          creadits.map(({ id, character, name, profile_path }) => (
            <Item key={id}>
              <ImagePosterPath path={profile_path} alt={name} />
              <span>{name}</span>
              <span>Character: {character}</span>
            </Item>
          ))}
      </List>
    </section>
  );
};

export default Cast;
