import propTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ url, largeUrl, tags, onOpenModal }) => (
  <GalleryItem>
    <GalleryImage
      src={url}
      alt={tags}
      onClick={() => onOpenModal(largeUrl, tags)}
    />
  </GalleryItem>
);

ImageGalleryItem.propTypes = {
  url: propTypes.string.isRequired,
  largeUrl: propTypes.string.isRequired,
  tags: propTypes.string.isRequired,
  onOpenModal: propTypes.func.isRequired,
};

export default ImageGalleryItem;
