import * as types from '../constants/ActionTypes';

const initialState = {
  stations: [],
  stationsLoading: false,
}

function stationsReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_STATIONS_REQUEST:
      return {
        ...state,
        stationsLoading: true,
      }
    case types.FETCH_STATIONS_SUCCESS:
      return {
        ...state,
        stationsLoading: false,
        stations: action.payload,
      }
    case types.FETCH_STATIONS_FAILIRE:
      return {
        ...state,
        stationsLoading: false,
      }
    default:
      return state;
  }
}

export default stationsReducer;
