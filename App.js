import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Hello in World of <Text style={styles.bold}>react-native</Text> and <Text style={styles.bold}>Expo</Text>!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bold: {
    fontWeight: 'bold',
    color: '#ff0000'
  }
})
