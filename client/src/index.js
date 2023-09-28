import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Auth0Provider
          domain="dev-paf5fgsmwhy2v5ij.us.auth0.com"
          clientId="9uXmk45Gn3MdsWotvfdUkhYfMgi9D9hz"
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
          <App />

        </Auth0Provider>
  </BrowserRouter>
);



