import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
      {/*<Provider store={store}>*/}
    <App />
      {/*</Provider>*/}
  </React.StrictMode>,
  document.getElementById('root'),
);


reportWebVitals();
