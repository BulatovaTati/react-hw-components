import propTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ url, largeImageURL, tags, openModal }) => (
  <GalleryItem>
    <GalleryImage
      src={url}
      alt={tags}
      onClick={() => openModal(largeImageURL, tags)}
    />
  </GalleryItem>
);

ImageGalleryItem.propTypes = {
  url: propTypes.string.isRequired,
  largeImageURL: propTypes.string.isRequired,
  tags: propTypes.string.isRequired,
  openModal: propTypes.func.isRequired,
};

export default ImageGalleryItem;
