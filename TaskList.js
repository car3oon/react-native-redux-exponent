import React, { Component, PropTypes } from 'react'
import { ListView, View, Text } from 'react-native'

export default class TaskList extends Component {
  constructor (props, context) {
    super(props, context)

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.state = {
      dataSource: ds.cloneWithRows(props.todos)
    }
  }

  _renderRow = (todo) => {
    return (
      <Text>{todo.task}</Text>
    )
  }

  render () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        key={this.props.todos}
        renderRow={this._renderRow}
      />
    )
  }
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
}
