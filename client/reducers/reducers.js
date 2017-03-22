const initialState = {
  stations: [],
  stationsLoading: false,
}

function stationsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_STATIONS_PENDING':
      return {
        ...state,
        stationsLoading: true,
      }
    case 'FETCH_STATIONS_FULFILLED':
      return {
        ...state,
        stationsLoading: false,
        stations: action.payload.data,
      }
    case 'FETCH_STATIONS_REJECTED':
      return {
        ...state,
        stationsLoading: false,
      }
    default:
      return state;
  }
}

export default stationsReducer;
