import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';

import {
  SearchBox,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ onChange }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return console.warn('Oops... Enter the title');
    }

    onChange(query);
    setQuery('');
  };
  return (
    <SearchBox>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          name="query"
          autocomplete="off"
          placeholder="Search images and photos"
          value={query}
          onChange={e => setQuery(e.target.value.toLowerCase())}
        />
        <SearchFormButton type="submit">
          <FcSearch size={30} />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
      </SearchForm>
    </SearchBox>
  );
};
export default Searchbar;
