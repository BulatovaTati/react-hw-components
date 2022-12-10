import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/Fetch';

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
  return (
    <section>
      {reviews.length === 0 && <div>None</div>}
      <ul>
        {reviews &&
          reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>Autor: {author}</p>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Reviews;
