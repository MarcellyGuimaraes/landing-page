import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles/global-styles';
import Home from './templates/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <GlobalStyles />
  </React.StrictMode>,
);
