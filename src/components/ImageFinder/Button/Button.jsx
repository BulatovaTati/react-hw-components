import propTypes from 'prop-types';
import { LoadMore } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    // This will fire when the button in Child is clicked,
    // updating Parent's state, even though button
    // is not direct descendant in the DOM.
    <LoadMore onClick={onClick} type="button">
      Load More
    </LoadMore>
  );
};

export default Button;
Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
