import api from '../utils/api';

export const GIFT_RECEIVED_FETCH = 'GIFT_RECEIVED_FETCH';
export const GIFT_SENT_FETCH = 'GIFT_SENT_FETCH';
export const GIFT_SEND = 'GIFT_SEND';

export function giftReceivedFetch() {
  return (dispatch, getState) => {
    api(getState().user).get('/gift/received')
      .then((json) => {
        dispatch(giftReceivedFetched(json.data));
      });
  }
}

function giftReceivedFetched(received) {
  return {
    type: GIFT_RECEIVED_FETCH,
    received,
  };
}

export function giftSentFetch() {
  return (dispatch, getState) => {
    api(getState().user).get('/gift/sent')
      .then((json) => {
        dispatch(giftSentFetched(json.data))
      });
  }
}

function giftSentFetched(sent) {
  return {
    type: GIFT_SENT_FETCH,
    sent,
  };
}

export function giftSend(recipientId, type, description) {
  return (dispatch, getState) => {
    api(getState().user).post('/gift/send', {
      recipientId,
      type,
      description,
    }).then(() => {
      dispatch(giftSentFetch());
      dispatch(giftSent());
    });
  }
}

function giftSent() {
  return {
    type: GIFT_SEND
  };
}