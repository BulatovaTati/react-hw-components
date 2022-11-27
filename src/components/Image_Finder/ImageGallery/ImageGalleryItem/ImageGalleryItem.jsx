import propTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  webImage,
  largeImage,
  tags,
  onClose,
  handleModalImage,
  handleModalAlt,
}) => {
  return (
    <GalleryItem>
      <GalleryImage src={webImage} alt={tags} onClose={onClose} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webImage: propTypes.string.isRequired,
  largeImage: propTypes.string.isRequired,
  tags: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};

export default ImageGalleryItem;
