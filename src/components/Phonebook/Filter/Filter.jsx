import { useDispatch, useSelector } from 'react-redux';
import { getfilteredContacts, selectFilterValue } from 'redux/filterSlice';
import { FilterWrapper, Input, Title } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilterValue);

  return (
    <FilterWrapper>
      <Title>Filter</Title>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(getfilteredContacts(e.target.value))}
      />
    </FilterWrapper>
  );
};
