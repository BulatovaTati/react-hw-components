import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FetchImages from 'components/API/Fetch';
import {
  Searchbar,
  Loader,
  ImageGallery,
  Button,
} from '../components/ImageFinder';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const ImageFinder = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(Status.IDLE);
  const [isShowButton, setIsShowButton] = useState(false);

  useEffect(() => {
    if (!query) return;

    setStatus(Status.PENDING);
    const renderGallery = async () => {
      try {
        const res = await FetchImages(query, page);

        if (res.hits.length === 0) {
          setIsShowButton(false);
          setStatus(Status.IDLE);
          return toast.warn(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }

        setImages(prev => [...prev, ...res.hits]);
        setStatus(Status.RESOLVED);
        setIsShowButton(page < Math.ceil(res.total / 12) ? true : false);
      } catch (error) {
        setStatus(Status.REJECTED);
        toast.error('Oops... Something went wrong');
      }
    };

    renderGallery();
  }, [query, page]);

  const getInputValue = newQuery => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  return (
    <>
      <Searchbar onSearch={getInputValue} />
      {status === Status.PENDING && <Loader />}
      {images.length > 0 && <ImageGallery images={images} />}
      {isShowButton && <Button onClick={() => setPage(page => page + 1)} />}
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default ImageFinder;

// const renderGallery = useCallback(async () => {
//     try {
//       const res = await FetchImages(query, page);

//       if (res.hits.length === 0) {
//         setIsShowButton(false);
//         setStatus(Status.IDLE);
//         return toast.warn(
//           'Sorry, there are no images matching your search query. Please try again.'
//         );
//       }

//       setImages(prev => [...prev, ...res.hits]);
//       setStatus(Status.RESOLVED);
//       setIsShowButton(page < Math.ceil(res.total / 12) ? true : false);
//     } catch (error) {
//       setStatus(Status.REJECTED);
//       toast.error('Oops... Something went wrong');
//     }
//   }, [page, query]);

//   useEffect(() => {
//     if (!query) return;

//     setStatus(Status.PENDING);
//     renderGallery();
//   }, [query, renderGallery]);
