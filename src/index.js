import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// ! For Redux Toolkit
// import { PersistGate } from 'redux-persist/integration/react';
// import {  persistor } from 'redux/store';
import { ThemeProvider } from 'styled-components';
import { store } from 'redux/store';

import { App } from 'components/App';
import { theme } from 'services/theme';
import { GlobalStyle } from 'services/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
        {/* </PersistGate> */}
      </Provider>
    </ThemeProvider>
    <GlobalStyle />
  </React.StrictMode>
);
