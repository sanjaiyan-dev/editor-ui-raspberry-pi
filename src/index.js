import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import { OidcProvider } from 'redux-oidc';
import { Provider } from 'react-redux'
import store from './app/store'
import userManager from './utils/userManager'

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <OidcProvider store={store} userManager={userManager}>
//         <App />
//       </OidcProvider>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const div = document.getElementById('root')
const root = createRoot(div)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <OidcProvider store={store} userManager={userManager}>
        <App />
      </OidcProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
