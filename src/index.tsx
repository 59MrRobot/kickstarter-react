import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import './styles/_normalize.scss';
import './styles/_reset.scss';
import './styles/_typography.scss';
import App from './App';
import { Provider } from "react-redux";
import { store } from './redux/store';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
