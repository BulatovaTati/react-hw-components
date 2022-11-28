import { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';

import {
  SearchSticky,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    query: '',
  };

  // Gets the state updated
  handleChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  // Is triggered when the form is submitted
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      return toast.warn('Oops... Enter the title');
    }

    // Prop that is passed to the form to be called upon submission
    this.props.onSearch(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { query } = this.state;

    return (
      <SearchSticky>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
            <FcSearch size={30} />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="query"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}
          />
        </SearchForm>
      </SearchSticky>
    );
  }
}
export default Searchbar;
