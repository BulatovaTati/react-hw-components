import propTypes from 'prop-types';
import { LoadMore } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <LoadMore onClick={onClick} type="button">
      Load More
    </LoadMore>
  );
};

export default Button;

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
