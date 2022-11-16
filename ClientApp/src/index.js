import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import configureStore from './store/store';

//import {Auth0Provider} from './auth0-wrapper';
//import config from './config.json';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const store = configureStore({});

/*const onRedirectCallback = appState =>{
    window.history.replaceState(
      {},
      document.title,
      appState && appState.targetUrl ? appState.targetUrl : window.location.pathname
    )
}*/

root.render( 
     <Provider store={store} >
     <BrowserRouter basename={baseUrl}>
        <App />
     </BrowserRouter>
     </Provider>
  );
  
  /*
  <Provider store={store} >
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </Provider>
  */

  /*
  <Auth0Provider
  domain ={config.domain}
  client_id={config.clientId}
  redirect_uri={window.location.origin}
  onRedirectCallbak={onRedirectCallback} > 
      <BrowserRouter basename={baseUrl}>
          <App />
      </BrowserRouter>
    </Auth0Provider>
  */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//Redux: state managment tool. 
//entire state of the application is stored into a crentral location
//store: database of the application
//reducer: tables of the application
//Action: payloads of info that send data from your application to your store
//installation in clientApp

// npm install redux react-redux react-thunk 
//npm install redux-thunk --save


//Auth0
//button "create appliation"
//type project: single page web application
//config auth0: allowed callback URL (https:// localhost), allowed web origins (http://), allowed logout URL (https://)
//install package:
// npm install @auth0/auth0-spa-js --save
//reack wrapper : https://auth0.com/docs/quickstart/spa/react/01-login