import PropTypes from 'prop-types';
import {
  Item,
  List,
  Text,
  Stars,
  Stats,
  IconGood,
  IconBad,
  IconNeutral,
} from './Statistics.styled';

import { IconContext } from 'react-icons';
import { AiFillStar } from 'react-icons/ai';

const Statistics = ({ good, neutral, bad, totalFeed, positivePercentage }) => {
  const starArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const totalPositiveStars = Math.floor(positivePercentage / 10);

  return (
    <List>
      <Item>
        <IconGood />
        <Text>Good: {good}</Text>
      </Item>
      <Item>
        <IconNeutral />
        <Text>Neutral: {neutral}</Text>
      </Item>
      <Item>
        <IconBad />
        <Text>Bad: {bad}</Text>
      </Item>
      <Item>
        <Text>Total: {totalFeed}</Text>
      </Item>
      <Item>
        <Text>Positive feedback: {positivePercentage} %</Text>
      </Item>
      <Item>
        <Stars>
          {starArr.map((_, index) => (
            <IconContext.Provider
              key={index}
              value={{
                color: `${index >= totalPositiveStars ? '#ccc' : 'orange'}`,
              }}
            >
              <AiFillStar />
            </IconContext.Provider>
          ))}

          <Stats>
            {totalPositiveStars} / {starArr.length}
          </Stats>
        </Stars>
      </Item>
    </List>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
