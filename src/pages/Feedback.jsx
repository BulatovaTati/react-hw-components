import { useState } from 'react';
import { Section, Statistics, FeedbackOptions } from 'components/Feedback';
import { Notification } from 'common/Notification/Notification';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = (totalFeed, good) => {
    const percentage = Math.round((good / totalFeed) * 100);
    return percentage;
  };

  const totalFeed = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage(totalFeed, good);
  // const options = Object.keys(this.state);

  return (
    <main>
      <Section title="Please leave feedback">
        <FeedbackOptions options={[good, neutral, bad]} onClick={handleClick} />
      </Section>

      <Section title="Statistics">
        {totalFeed > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeed={totalFeed}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </main>
  );
};
export default Feedback;
