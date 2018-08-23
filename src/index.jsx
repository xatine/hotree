import { React, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './store/reducers';
import App from './views/App';
import Header from './components/Header';

import './styles/main.scss';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <Fragment>
      <Header />
      <App />
    </Fragment>
  </Provider>,
  document.getElementById('root'),
);
