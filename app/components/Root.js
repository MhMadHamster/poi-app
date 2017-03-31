import 'react-hot-loader/patch';
import React, { PropTypes } from 'react';
import AppContainer from '../containers/stations';
import Station from './Station';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';
import { Provider } from 'react-redux';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={ AppContainer } />
        <Route path="/station/:stationId" component={ Station } />
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root;