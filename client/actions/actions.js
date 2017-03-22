import axios from 'axios';

export const fetchStations = () => ({
  type: 'FETCH_STATIONS',
  payload: axios.get('/stations'),
});