import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from '@layouts/App';
import { UserProvider } from '@utils/context/userContext';
import { GlobalStyle } from '@styles/globalStyle';

render(
  <BrowserRouter>
    <UserProvider>
      <App/>
    </UserProvider>
    <GlobalStyle/>
  </BrowserRouter>, 
  document.querySelector('#app')
);