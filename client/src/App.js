import React, { Component } from 'react';
import ApolloCliect from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.png';
import './App.css';
import Launches from './components/Launches';

const client = new ApolloCliect({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img src={logo} alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto' }} />
          <Route exact path="/" component={Launches} />
          <Launches />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;