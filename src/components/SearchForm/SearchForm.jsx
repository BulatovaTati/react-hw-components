import { Component } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    text: '',
  };

  handleInput = event => {
    this.setState({ text: event.currentTarget.value.toLowerCase().trim() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { text } = this.state;

    this.props.onSubmit(text);
    this.setState({ text: '' });
  };
  render() {
    const { text } = this.state;
    const { handleInput, handleSubmit } = this;

    return (
      <SearchFormStyled onSubmit={handleSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>

        <InputSearch
          onChange={handleInput}
          value={text}
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
        />
      </SearchFormStyled>
    );
  }
}
