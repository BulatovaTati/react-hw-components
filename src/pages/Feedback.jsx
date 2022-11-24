import React, { Component } from 'react';
import { Section, Statistics, FeedbackOptions } from 'components/Feedback';
import { Notification } from 'common/Notification/Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = (totalFeed, good) => {
    const percentage = Math.round((good / totalFeed) * 100);
    return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;

    const totalFeed = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(
      totalFeed,
      good
    );
    const options = Object.keys(this.state);

    return (
      <main>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onClick={this.handleClick} />
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
  }
}
export default Feedback;
