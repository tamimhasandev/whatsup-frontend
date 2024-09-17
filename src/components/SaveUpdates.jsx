/* eslint-disable react/prop-types */
import { toast } from 'react-toastify';
import host from '../../env';
import Button from './Button';

export default function SaveUpdates({ newItems, changedItems }) {
  async function saveHandler() {
    try {
      const res = await fetch(host, {
        method: 'POST',
        body: JSON.stringify([...newItems, ...changedItems]),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();

      if (data.status === 200) {
        toast.success(data.updateStatus);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
  return <Button onClick={saveHandler} text="Save Updates" />;
}
