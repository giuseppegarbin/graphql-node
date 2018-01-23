import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Create ApolloClient and Provider
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
    link: new HttpLink({ uri: process.env.REACT_APP_ENPOINT_URI }),
    cache: new InMemoryCache()
});


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
