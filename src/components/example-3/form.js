import { Component } from 'react';
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = { id: '', label: '', img: '' };

  changeValue = e => {
    const { name, value } = e.currentTarget;
    this.setState({ id: nanoid(), [name]: value });
  };

  submitSticker = e => {
    e.preventDefault();
    this.props.addSticker(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ id: '', label: '', img: '' });
  };
  render() {
    return (
      <form onSubmit={this.submitSticker}>
        <label>
          label
          <input
            name="label"
            type="text"
            value={this.state.label}
            onChange={this.changeValue}
            required
          />
        </label>
        <label>
          img
          <input
            name="img"
            type="url"
            value={this.state.img}
            onChange={this.changeValue}
            required
          />
        </label>
        <button type="submit">Send</button>
      </form>
    );
  }
}

// const Form = ({ addSticker }) => {
//   const handleSubmit = e => {
//     e.preventDefault();

//     addSticker(e.target.elements.label.value, e.target.elements.img.value);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         label
//         <input name="label" type="text" required />
//       </label>
//       <label>
//         img
//         <input name="img" type="url" required />
//       </label>
//       <button type="submit">Send</button>
//     </form>
//   );
// };
