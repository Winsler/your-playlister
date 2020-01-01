import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';

const loadDom = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  );
};

const script = document.createElement('script');
script.src = 'https://apis.google.com/js/api.js';

script.addEventListener('load', () => {
  window.gapi.load('client:auth2', () => {
    window.gapi.client
      .init({
        clientId: process.env.REACT_APP_YOUTUBE_CLIENT_ID!,
        scope: 'https://www.googleapis.com/auth/youtube.force-ssl',
      })
      .then(() => {
        window.gapi.client.load('youtube', 'v3', loadDom);
      })
      .catch(window.console.log);
  });
});

document.body.appendChild(script);
