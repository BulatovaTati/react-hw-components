import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      return toast.warn('Oops... Enter the title');
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
      <ToastContainer autoClose={2000} />
    </SearchBox>
  );
};
export default Searchbar;
