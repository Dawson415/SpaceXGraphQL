import React, { Component } from 'react';
import ApolloCliect from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import logo from './logo.png';
import './App.css';
import Launches from './components/Launches';

const client = new ApolloCliect({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img src={logo} alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto' }} />
      </div>
      <Launches />
    </ApolloProvider>
  );
}

export default App;