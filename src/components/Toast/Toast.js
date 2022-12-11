import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Warn = () => toast.warn('Sorry, smth wrong. Please try again.');

export const WarnSearchQuery = elem =>
  toast.warn(`These aren't any movies with title ${elem}`);
