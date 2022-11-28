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

  onSearchQuery = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      return toast.warn('Oops... Enter the title');
    }

    this.props.onSearch(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchSticky>
        <SearchForm onSubmit={this.handleFormSubmit}>
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
            value={this.state.query}
            onChange={this.onSearchQuery}
          />
        </SearchForm>
      </SearchSticky>
    );
  }
}
export default Searchbar;
