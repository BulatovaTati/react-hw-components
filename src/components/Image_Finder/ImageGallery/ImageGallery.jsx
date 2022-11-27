import propTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <ImageGalleryList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          url={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          openModal={onOpenModal}
        />
      ))}
    </ImageGalleryList>
  );
};
export default ImageGallery;

ImageGallery.propTypes = {
  images: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ),
  onOpenModal: propTypes.func.isRequired,
};
