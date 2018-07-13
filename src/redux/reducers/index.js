import constants from '../constants';

const initState = {
  all: [],
  sortedByLength: [],
  species: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case constants.FETCH_ALL_FISH_FULFILLED:
      const all = action.payload.data.map(fish => {
        return {
          ...fish,
          weight: Math.round(fish.length * fish.girth * fish.girth / 800)
        }
      });
      const species = [];
      all.forEach(fish => {
        if (species.indexOf(fish.species) < 0) {
          species.push(fish.species);
        }
      });
      const sortedByLength = all.sort((a, b) => {
        return b.length - a.length;
      });
      return {
        ...state,
        all,
        sortedByLength
      };
    default:
      return state;
  }
}
