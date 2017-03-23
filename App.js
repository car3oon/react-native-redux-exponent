import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
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
        <Text style={styles.bold}>TODO List</Text>
        <TaskList
          todos={this.state.todos}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 30
  },
  bold: {
    fontWeight: 'bold',
    color: '#ff0000'
  }
})
