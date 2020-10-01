import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  user: {},
  playing: {},
  myList: [],
  trends: [
    {
      id: 2,
      name: 'Aimee Shields',
      typeBlood: 'A+',
      age: 29,
      profile:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      id: 3,
      name: 'Kailee Schroeder',
      typeBlood: 'O+',
      age: 22,
      profile:
        'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      id: 4,
      name: 'Suzanne Koch',
      typeBlood: 'B+',
      age: 30,
      profile:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      id: 5,
      name: 'Felicia Braun',
      typeBlood: 'B-',
      age: 24,
      profile:
        'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      id: 6,
      name: 'Hassan Barton',
      typeBlood: 'O+',
      age: 22,
      profile:
        'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      id: 7,
      name: 'Amelia Hamill',
      typeBlood: 'O-',
      age: 23,
      profile:
        'https://images.pexels.com/photos/1548164/pexels-photo-1548164.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
  ],
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
