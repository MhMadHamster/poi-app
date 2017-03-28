import fetch from 'isomorphic-fetch';
import * as types from '../constants/ActionTypes';

const fetchStationsRequest = () => ({
  type: types.FETCH_STATIONS_REQUEST,
});

const fetchStationsSuccess = payload => ({
  type: types.FETCH_STATIONS_SUCCESS,
  payload,
});

const fetchStationsFailure = err => ({
  type: types.FETCH_STATIONS_FAILIRE,
  err,
});

export const fetchStations = () => (dispatch) => {
  dispatch(fetchStationsRequest());
  return fetch('/stations')
    .then(res => res.json())
    .then(json => dispatch(fetchStationsSuccess(json)))
    .catch(err => dispatch(fetchStationsFailure(err.message)));
}
