import React, { Component, PropTypes } from 'react'
import { ListView, StyleSheet, View } from 'react-native'
import TaskRow from './TaskRow'

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
      <TaskRow
        todo={todo}
      />
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          key={this.props.todos}
          renderRow={this._renderRow}
        />
      </View>
    )
  }
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 30
  }
})
