import { Component } from 'react';
import { FcSearch } from 'react-icons/fc';

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
      return alert('Please, enter image name.');
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
            name="input"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onSearchQuery}
          />
        </SearchForm>
      </SearchSticky>
    );
  }
}
export default Searchbar;
