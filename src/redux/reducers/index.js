import constants from '../constants';

const initState = {
    all: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case constants.FETCH_ALL_FISH_FULFILLED:
      return {
        ...state,
        all: action.payload.data,
      };
    default:
      return state;
  }
}
