import React from 'react';
import Header from 'components/header';
import Main from 'components/main';
import Footer from 'components/footer';
import 'normalize.css';
import './app.css';

const App: React.FC = () => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);

export default App;
