import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  Reducer  from './redux/reducer';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

import './asset/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore(
//   Reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

root.render(

  
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
