import { toast } from 'react-toastify';

export default function ShowSnackBarMessage(
  message: string,
  messageType: string,
) {
  if (messageType === 'success')
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  else if (messageType === 'error')
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
}
