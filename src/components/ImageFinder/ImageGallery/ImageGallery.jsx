import propTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryList>
      {images.map(
        ({ id, webformatURL: url, largeImageURL: largeUrl, tags }) => (
          <ImageGalleryItem
            key={id}
            url={url}
            largeUrl={largeUrl}
            tags={tags}
          />
        )
      )}
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
};
