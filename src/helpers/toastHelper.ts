import { toastValues } from '../constants/common/toastValues';
import { toast } from 'react-toastify';

export const successToast = (message: string) =>
  toast.success(message, toastValues);

export const errorToast = (message: string) =>
  toast.error(message, toastValues);

export const infoToast = (message: string) => toast.info(message, toastValues);

export const warningToast = (message: string) =>
  toast.warning(message, toastValues);

export const darkToast = (message: string) => toast.dark(message, toastValues);
