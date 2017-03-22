import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import promise from 'redux-promise-middleware';
import stationsReducer from './reducers/reducers';

const configureStore = () => {
  const logger = createLogger();
  const store = createStore(
    stationsReducer,
    applyMiddleware(
      logger,
      promise(),
    ),
  )

  return store;
}

export default configureStore;
