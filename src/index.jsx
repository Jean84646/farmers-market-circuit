import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import bg from './img/bg1.jpg';
import './img/favicon.ico';
import { HashRouter } from 'react-router-dom';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Component/>
      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
};
/*eslint-enable */
