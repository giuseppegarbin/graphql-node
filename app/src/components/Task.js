import React, { Component } from 'react'

class Task extends Component {
  render() {
    return (
      <li>{this.props.task.title} ({this.props.task.description})</li>
    )
  }
}

export default Task