import propTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({
  images,
  onClick,
  handleModalImage,
  handleModalAlt,
}) => {
  return (
    <>
      <ImageGalleryList>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              webImage={webformatURL}
              largeImage={largeImageURL}
              tags={tags}
              onClick={onClick}
              handleModalImage={handleModalImage}
              handleModalAlt={handleModalAlt}
            />
          );
        })}
      </ImageGalleryList>
    </>
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
