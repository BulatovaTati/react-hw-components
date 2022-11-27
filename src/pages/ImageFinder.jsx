import React, { Component } from 'react';

import FetchImages from 'components/API/Fetch';

import Searchbar from 'components/Image_Finder/Searchbar/Searchbar';
import { Loader } from 'components/Image_Finder/Loader/Loader';
import ImageGallery from 'components/Image_Finder/ImageGallery/ImageGallery';
import { Button } from 'components/Image_Finder/Button/Button.styled';
import Modal from 'components/Image_Finder/Modal/Modal';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class App extends Component {
  state = {
    images: [],
    query: '',

    page: 1,
    showButton: false,
    showModal: false,
    status: Status.IDLE,
    modalImage: '',
    imageAlt: '',
  };

  componentDidUpdate(_, prevState) {
    const prevName = prevState.query;
    const nextName = this.state.query;

    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName || prevPage !== nextPage) {
      this.setState({ status: Status.PENDING });

      FetchImages(nextName, this.state.page)
        .then(images => {
          if (images.hits.length < 1) {
            this.setState({
              showButton: false,
              status: Status.IDLE,
            });
            return alert('No images on your query');
          }

          this.setState(prevState => ({
            images: [...prevState.images, ...images.hits],
          }));

          this.setState({
            status: Status.RESOLVED,
            showButton:
              this.state.page < Math.ceil(images.total / 12) ? true : false,
          });
        })
        .catch(console.log);
    }
  }

  getInputValue = query => {
    if (query === this.state.query) {
      return;
    }

    this.setState({
      query,
      page: 1,
      images: [],
      showButton: false,
      showModal: false,
      status: Status.IDLE,
    });
  };

  loadMoreImages = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleModalImage = event => {
    this.setState({ modalImage: event });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { images, status, showModal, modalImage, imageAlt, showButton } =
      this.state;
    console.log('showModal: ', showModal);

    const {
      getInputValue,
      toggleModal,
      loadMoreImages,
      handleModalImage,
      handleModalAlt,
    } = this;

    return (
      <>
        <Searchbar onSearch={getInputValue} />

        {status === 'idle' && <h2>Search something!</h2>}

        {status === 'pending' && <Loader />}

        {images.length > 0 && (
          <ImageGallery
            images={images}
            onClick={toggleModal}
            handleModalImage={handleModalImage}
            handleModalAlt={handleModalAlt}
          />
        )}

        {showButton && <Button onClick={loadMoreImages} />}

        {showModal && (
          <Modal onClose={toggleModal}>
            <img src={modalImage} alt={imageAlt} />
          </Modal>
        )}
      </>
    );
  }
}
