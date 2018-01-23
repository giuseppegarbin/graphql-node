import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Import ApolloClient
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'



class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Giuseppe</h1>
        </header>
        <p>I'm going to list the task here</p>
      </div>
    );
  }
}

// Query
const TaskQuery = gql`
  query TaskQuery {
    allTasks {
      id
      title
      description
    }
  }
`
const TaskData = graphql(TaskQuery)(App)

export default TaskData;
