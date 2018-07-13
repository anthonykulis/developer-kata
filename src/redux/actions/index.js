import axios from 'axios';
import constants from '../constants';

const url = 'https://868r1t0.restletmocks.net';

export function fetchAllFish() {
  return {
    type: constants.FETCH_ALL_FISH,
    payload: axios.get(`${url}/catfish`).then(response => response)
  }
}