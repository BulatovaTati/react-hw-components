import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FetchImages from 'components/API/Fetch';
import {
  Searchbar,
  Loader,
  ImageGallery,
  Button,
  Modal,
} from '../components/ImageFinder';

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
    error: null,
    status: Status.IDLE,
    largeImage: '',
    tags: '',
  };

  componentDidUpdate(_, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;

    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      this.setState({ status: Status.PENDING });
      this.renderGallery();
    }
  }

  renderGallery = async () => {
    const { query, page } = this.state;

    try {
      const res = await FetchImages(query, page);

      if (res.hits.length < 1) {
        this.setState({
          showButton: false,
          status: Status.IDLE,
        });
        return toast.warn(
          'Sorry, there are no im  ages matching your search query. Please try again.'
        );
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...res.hits],
      }));

      this.setState({
        status: Status.RESOLVED,
        showButton: this.state.page < Math.ceil(res.total / 12) ? true : false,
      });
    } catch (error) {
      this.setState({ error });
      toast.error('Oops... Something went wrong');
    }
  };

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
    // updating Parent's state
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onOpenModal = (largeImage, tags) => {
    this.toggleModal();
    this.setState({
      largeImage,
      tags,
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { images, status, showModal, largeImage, tags, showButton } =
      this.state;

    const { getInputValue, toggleModal, loadMoreImages, onOpenModal } = this;

    return (
      <>
        <Searchbar onSearch={getInputValue} />

        {status === 'pending' && <Loader />}

        <ToastContainer autoClose={2000} />

        {images.length > 0 && (
          <ImageGallery images={images} onOpenModal={onOpenModal} />
        )}

        {showButton && <Button onClick={loadMoreImages} />}

        {showModal && (
          <Modal
            onModalClick={toggleModal}
            largeImage={largeImage}
            alt={tags}
          />
        )}
      </>
    );
  }
}
