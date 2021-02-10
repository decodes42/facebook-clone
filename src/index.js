import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { reducers, initialState } from './reducers';
import { StateProvider } from './StateProvider'


ReactDOM.render(
  <React.StrictMode>
    {/* StateProvider is pushing user data from all children. */}
    <StateProvider initialState={initialState} reducer={reducers}>

        <App />


    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();