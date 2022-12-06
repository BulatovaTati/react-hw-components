import { useState } from 'react';
import propTypes from 'prop-types';
import { Modal } from 'components/ImageFinder';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ url, largeUrl, tags }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(isOpen => !isOpen);

  return (
    <GalleryItem>
      <GalleryImage src={url} alt={tags} onClick={toggleModal} />
      {isModalOpen && (
        <Modal onModalClick={toggleModal} largeImage={largeUrl} alt={tags} />
      )}
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  url: propTypes.string.isRequired,
  largeUrl: propTypes.string.isRequired,
  tags: propTypes.string.isRequired,
};

export default ImageGalleryItem;
