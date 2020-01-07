import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from 'store';
import Header from 'components/header';
import Main from 'components/main';
import Footer from 'components/footer';
import 'normalize.css';
import './app.css';

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any }
}

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk),
));
/* eslint-enable */

const App: React.FC = () => (
  <Provider store={store}>
    <Header />
    <Main />
    <Footer />
  </Provider>
);

export default App;
