import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalW } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onModalClick();
    }
  };

  onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onModalClick();
    }
  };

  render() {
    const { largeImage, alt } = this.props;

    return createPortal(
      <Overlay onClick={this.onBackdropClick}>
        <ModalW>
          <img src={largeImage} alt={alt} />
        </ModalW>
      </Overlay>,
      modalRoot
    );
  }
}
export default Modal;

Modal.prototypes = {
  alt: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onModalClick: PropTypes.func.isRequired,
};
