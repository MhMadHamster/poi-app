import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </AppContainer>,
    document.getElementById('app')
  )
}

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App) });
}
