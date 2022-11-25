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
    searchImage: '',
  };

  onImageChange = e => {
    this.setState({ searchImage: e.currentTarget.value.toLowerCase() });
  };

  onImagesSubmit = e => {
    e.preventDefault();

    if (this.state.searchImage.trim() === '') {
      return alert('Please, enter image name.');
    }

    this.props.onSubmit(this.state.searchImage);

    this.setState({ searchImage: '' });
  };

  render() {
    return (
      <SearchSticky>
        <SearchForm>
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
