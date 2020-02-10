import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const render = Component =>
  // eslint-disable-next-line react/no-render-return-value
  ReactDOM.render(<Component />, document.getElementById('root'));
render(App);

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./App', () => render(App));
