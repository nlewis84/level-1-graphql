import App from './App';
import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-us-east-1.graphcms.com/v2/ckpdeursngjul01w60onr6d6q/master',
  cache: new InMemoryCache()
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
