import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/selectors';
import { getfilteredContacts } from 'redux/filterSlice';
import { FilterWrapper, Input, Title } from './Filter.styled';

const Filter = () => {
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

export default Filter;
