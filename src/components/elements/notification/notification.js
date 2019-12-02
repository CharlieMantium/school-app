import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const errorNotification = notifyText => toast.error(notifyText);
export const successNotification = notifyText => toast(notifyText);
export const warningNotification = notifyText => toast.warn(notifyText);
