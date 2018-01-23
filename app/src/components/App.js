import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import TaskList from './TaskList'


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Giuseppe</h1>
        </header>
        <TaskList />
      </div>
    );
  }
}

//const TaskData = graphql(TaskQuery)(App)

export default App;
