import axios from 'axios';

import { ROOT_URL, URL_SEND_MESSAGE } from '../endpoints';
import { addMessage } from './ChatSlice';

export const sendMessage = (messageData) => {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/${URL_SEND_MESSAGE}`, messageData)
      .then(response => {
        dispatch(addMessage(response.data));
      })
      .catch(error => {
        console.error('There was an error sending the message:', error);
       
      });
  };
};