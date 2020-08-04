import produce from 'immer';

const INITIAL_STATE = {
  ong: null,
  load: false
};

export default function ong(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@ong/SIGN_IN_SUCCESS': {
        draft.ong = action.payload.ong;
        draft.load = true;
        break;
      }
      case '@ong/SIGN_FAILURE': {
        draft.load = false;
        break;
      }
      case '@ong/SIGN_OUT': {
        draft.ong = null;
        draft.load = false;
        break;
      }
      default:
    }
  });
}