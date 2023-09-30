import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <Auth0Provider
          domain="dev-mbl5lboic8rlrslv.us.auth0.com"
          clientId="bA2iqvM58BED6MGdJuT2SxUi1vZdySC4"
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
            <BrowserRouter>
          <App />
  </BrowserRouter>
        </Auth0Provider>


);



