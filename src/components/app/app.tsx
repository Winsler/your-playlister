import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from 'store';
import { composeWithDevTools } from 'redux-devtools-extension';
import Header from 'components/header';
import Main from 'components/main';
import Footer from 'components/footer';
import 'normalize.css';
import './app.css';


const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk),
));


const App: React.FC = () => (
  <Provider store={store}>
    <Header />
    <Main />
    <Footer />
  </Provider>
);

export default App;
