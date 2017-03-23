import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import TaskList from './TaskList'

export default class App extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      todos: [
        {
          task: 'Learn React Native'
        },
        {
          task: 'Learn Redux'
        }
      ]
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <TaskList
          todos={this.state.todos}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
})
