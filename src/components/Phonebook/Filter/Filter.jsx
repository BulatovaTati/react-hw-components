import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/selectors';
import { getfilteredContacts } from 'redux/filterSlice';

import { FilterWrapper, Input, Title } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilterValue);
  const handleFilterChange = value => dispatch(getfilteredContacts(value));

  return (
    <FilterWrapper>
      <Title>Filter</Title>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={handleFilterChange}
      />
    </FilterWrapper>
  );
};

export default Filter;
