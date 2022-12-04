import { useState } from 'react';
import { Section, Statistics, FeedbackOptions } from 'components/Feedback';
import { Notification } from 'common/Notification/Notification';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  console.log('total: ', total);

  const options = ['good', 'neutral', 'bad'];

  const handleClick = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        throw new Error('Unknown option');
    }
  };

  // const countTotalFeedback = () => {
  //   const values = Object.values(this.state);
  //   return values.reduce((acc, value) => acc + value, 0);
  // };

  const countPositiveFeedbackPercentage = (totalFeed, good) => {
    const percentage = Math.round((good / totalFeed) * 100);
    return percentage;
  };

  // const totalFeed = countTotalFeedback();
  // const positivePercentage = countPositiveFeedbackPercentage(totalFeed, good);
  // function getTotal(total) {
  //   return setTotal(prev => prev);
  // }
  return (
    <main>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            // totalFeed={getTotal(total)}
            // positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </main>
  );
};
export default Feedback;
