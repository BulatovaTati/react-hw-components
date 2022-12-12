import NoInfo from 'components/NoneInfo/NoneInfo';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { animateScroll } from 'react-scroll';

import { getReviews } from 'services/Fetch';
import { List, Item } from '../Cast/Cast.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchGredits() {
      try {
        const movies = await getReviews(movieId);
        setReviews(movies.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchGredits();
  }, [movieId]);

  if (reviews) {
    animateScroll.scrollMore(600);
  }

  return (
    <section>
      {reviews.length === 0 && <NoInfo />}
      <List>
        {reviews &&
          reviews.map(({ id, author, content }) => (
            <Item
              key={id}
              style={{
                padding: '5px',
                minWidth: '350px',
                maxHeight: '260px',
                overflowY: 'scroll',
              }}
            >
              <p style={{ marginBottom: '10px' }}>
                <b>Autor: {author}</b>
              </p>
              <p>{content}</p>
            </Item>
          ))}
      </List>
    </section>
  );
};

export default Reviews;
