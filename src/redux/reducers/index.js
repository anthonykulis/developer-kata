import constants from '../constants';

const initState = {
    all: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case constants.FETCH_ALL_FISH_FULFILLED:
      const catfish = action.payload.data.map(fish => {
        return {
          ...fish,
          weight: Math.round(fish.length * fish.girth * fish.girth / 800)
        }
      });
      return {
        ...state,
        all: catfish,
      };
    default:
      return state;
  }
}
