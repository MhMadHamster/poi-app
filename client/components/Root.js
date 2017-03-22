import 'react-hot-loader/patch';
import React, { PropTypes } from 'react';
import AppContainer from '../containers/stations';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={ AppContainer } />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root;