import PropTypes from 'prop-types';
import { BtnItem, BtnList, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnList>
      {Object.keys(options).map((option, idx) => {
        return (
          <BtnItem key={idx}>
            <Button type="button" value={option} onClick={onLeaveFeedback}>
              {option}
            </Button>
          </BtnItem>
        );
      })}
    </BtnList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.objectOf(PropTypes.number),
};

// ! V2
// const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   return (
//     <BtnList>
//       {options.map((option, idx) => {
//         return (
//           <BtnItem key={idx}>
//             <Button type="button" onClick={onLeaveFeedback(option)}>
//               {option}
//             </Button>
//           </BtnItem>
//         );
//       })}
//     </BtnList>
//   );
// };
