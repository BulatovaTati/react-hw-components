import propTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => {
  return (
    <div>
      <ImageGalleryList>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              webImage={webformatURL}
              largeImage={largeImageURL}
              tags={tags}
              onClick={onClick}
            />
          );
        })}
      </ImageGalleryList>
    </div>
  );
};
export default ImageGallery;

ImageGallery.propTypes = {
  images: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ),
  onClick: propTypes.func.isRequired,
};
