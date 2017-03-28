import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import stationsReducer from './reducers/reducers';

const configureStore = () => {
  const logger = createLogger();
  const store = createStore(
    stationsReducer,
    applyMiddleware(
      thunk,
      logger,
    ),
  )

  return store;
}

export default configureStore;
