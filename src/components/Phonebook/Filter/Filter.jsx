import PropTypes from 'prop-types';
import { FilterWrapper, Input, Title } from './Filter.styled';

const Filter = ({ onSearch, value }) => {
  return (
    <FilterWrapper>
      <Title>Filter</Title>
      <Input type="text" name="filter" value={value} onChange={onSearch} />
    </FilterWrapper>
  );
};

export default Filter;

Filter.propTypes = {
  onSearch: PropTypes.func,
  value: PropTypes.string,
};
