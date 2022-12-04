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

// const reducer = (state, action) => ({
//   ...state,
//   [action.type]: state[action.type] + action.payload,
// });

// const Feedback = () => {
//   const [state, dispatch] = useReducer(reducer, {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });

//   const handleClick = name => () => {
//     dispatch({ type: name, payload: 1 });
//   };

//   const countTotalFeedBack = () =>
//     Object.values(state).reduce((acc, v) => acc + v, 0);

//   function countPositiveFeedBackPercentage() {
//     const totalFeedback = countTotalFeedBack();
//     const positiveFeedbackCount = Object.entries(state).reduce(
//       (summ, [feedbackName, value]) =>
//         feedbackName === 'good' ? summ + value : summ,
//       0
//     );

//     const percentage =
//       positiveFeedbackCount > 0
//         ? Math.round((positiveFeedbackCount / totalFeedback) * 100)
//         : 0;

//     return percentage;
//   }

//   const total = countTotalFeedBack();

//   const positivePercentage = countPositiveFeedBackPercentage();
//   const options = Object.keys(state);
//   const data = Object.entries(state);

//   return (
//     <main>
//       <Section title="Please leave feedback">
//         <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
//       </Section>
//       <Section title="Statistics">
//         {total > 0 && (
//           <Statistics
//             options={data}
//             totalFeed={total}
//             positivePercentage={positivePercentage}
//           />
//         )}

//         {!total && <Notification message="There is no feedback" />}
//       </Section>
//     </main>
//   );
// };

// ! V3

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
