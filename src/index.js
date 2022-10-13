import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const initialState = { user: 'Monica', balance: 15000 };
// kita membuat store atau brankas dari bank
// di sini kita bisa menyimpan state dalam satu objek atau single object
// untuk membuat store, perlu memberikan reducer dan initial state
const store = legacy_createStore(rootReducer, initialState);

root.render(
  <StrictMode>
    {/* provide store yang kita punya ke app */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
