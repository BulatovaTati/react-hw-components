import propTypes from 'prop-types';
import { Button } from './Button.styled';

export const ButtonLoadMore = ({ onClick }) => {
  return (
    <Button onClick={onClick} type="button">
      Load more
    </Button>
  );
};
Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
