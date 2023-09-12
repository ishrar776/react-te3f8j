import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import GlobalDataProvider from './Context';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GlobalDataProvider>
      <App />
    </GlobalDataProvider>
  </StrictMode>
);
