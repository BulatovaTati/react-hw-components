import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';

import {
  SearchSticky,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Is triggered when the form is submitted
  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return console.warn('Oops... Enter the title');
    }

    // Prop that is passed to the form to be called upon submission
    // onSearch(query);
    // setQuery('');
  };

  return (
    <SearchSticky>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          name="query"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={e => setQuery(e.target.value.toLowerCase())}
        />
        <SearchFormButton type="submit">
          <FcSearch size={30} />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
      </SearchForm>
    </SearchSticky>
  );
};
export default Searchbar;
