import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalW } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ largeImage, alt, onModalClick }) => {
  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        onModalClick();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return window.removeEventListener('keydown', onKeyDown);
  }, [onModalClick]);

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onModalClick();
    }
  };

  return createPortal(
    // React does *not* create a new div. It renders the children into `domNode`.
    // `domNode` is any valid DOM node, regardless of its location in the DOM.
    <Overlay onClick={onBackdropClick}>
      <ModalW>
        <img src={largeImage} alt={alt} />
      </ModalW>
    </Overlay>,
    modalRoot
  );
};
export default Modal;

Modal.prototypes = {
  alt: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onModalClick: PropTypes.func.isRequired,
};
