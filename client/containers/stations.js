import { connect } from 'react-redux';
import App from '../components/App';
import { fetchStations } from '../actions/actions';

const mapStateToProps = state => ({
  store: state,
});

const AppContainer = connect(
  mapStateToProps,
  { fetchStations },
)(App);

export default AppContainer;