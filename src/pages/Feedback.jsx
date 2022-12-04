import { useEffect, useState } from 'react';
import { Section, Statistics, FeedbackOptions } from 'components/Feedback';
import { Notification } from 'common/Notification/Notification';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const handleClick = e => {
    const { value } = e.target;

    switch (value) {
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

  useEffect(() => {
    setTotal(good + neutral + bad);
    setPositivePercentage(Math.round((good / total) * 100));
  }, [good, neutral, bad, total, positivePercentage]);

  return (
    <main>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeed={total}
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

// !V2
// const Feedback = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const handleClick = e => {
//     const { value } = e.target;

//     switch (value) {
//       case 'good':
//         setGood(state => state + 1);
//         break;
//       case 'neutral':
//         setNeutral(state => state + 1);
//         break;

//       case 'bad':
//         setBad(state => state + 1);
//         break;

//       default:
//         throw new Error('Unknown option');
//     }
//   };

//   const total = good + neutral + bad;
//   const positivePercentage = Math.round((good / total) * 100);

//   return (
//     <main>
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={{ good, neutral, bad }}
//           onLeaveFeedback={handleClick}
//         />
//       </Section>

//       <Section title="Statistics">
//         {total > 0 ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             totalFeed={total}
//             positivePercentage={positivePercentage}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </Section>
//     </main>
//   );
// };
