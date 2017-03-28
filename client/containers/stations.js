import { connect } from 'react-redux';
import App from '../components/App';
import { fetchStations } from '../actions/actions';

const mapStateToProps = state => ({
  store: state,
});

const mapDispatchToProps = dispatch => ({
  fetchStations() {
    dispatch(fetchStations())
  }
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;