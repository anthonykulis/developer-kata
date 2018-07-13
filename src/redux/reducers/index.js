import constants from '../constants';

const initState = {
  all: [],
  species: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case constants.FETCH_ALL_FISH_FULFILLED:
      const all = action.payload.data.map(fish => {
        return {
          ...fish
        }
      });
      const species = [];
      all.forEach(fish => {
        if (species.indexOf(fish.species) < 0) {
          species.push(fish.species);
        }
      });

      return {
        ...state,
        species,
        all,
      };
    default:
      return state;
  }
    return state;
}
