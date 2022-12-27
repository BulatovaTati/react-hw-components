import PropTypes from 'prop-types';
import { Title } from './Title.styled';

export const TitleEl = ({ str, color = null }) => {
  return <Title color={color}>{str}</Title>;
};

TitleEl.propTypes = {
  str: PropTypes.string,
};
