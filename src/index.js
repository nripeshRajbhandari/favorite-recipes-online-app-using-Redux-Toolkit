import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import store from './app/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store = {store}>
    <App />
  </Provider>
);

// const render = () =>{
//   root.render(
//     <React.StrictMode>
//       <App state = {store.getState()} dispatch = { store.dispatch }/>
//     </React.StrictMode>
//   );
// };

// store.subscribe(render);
// render();