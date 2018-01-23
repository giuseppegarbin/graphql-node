import React, { Component } from 'react'
import Task from './Task'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class TaskList extends Component {
  render() {
    // Loading
    if (this.props.taskQuery && this.props.taskQuery.loading) {
      return <img src="https://media.giphy.com/media/cZDRRGVuNMLOo/giphy.gif" />
    }
  
    // Error
    if (this.props.taskQuery && this.props.taskQuery.error) {
      return <div>Error</div>
    }
  
    // Correct
    const tasksToRender = this.props.taskQuery.allTasks

    return (
      <ul>{tasksToRender.map(task => <Task key={task.id} task={task} />)}</ul>
    ) 
  }
}

const FEED_QUERY = gql`
query taskQuery {
    allTasks {
      id
      title
      description
    }
  }
`

export default graphql(FEED_QUERY, { name: 'taskQuery' }) (TaskList)