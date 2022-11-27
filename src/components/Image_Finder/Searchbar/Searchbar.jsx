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

  onImageChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      return alert('Please, enter image name.');
    }
    console.log(this.state.query);
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
            onSubmit={this.onImageChange}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchSticky>
    );
  }
}
export default Searchbar;
