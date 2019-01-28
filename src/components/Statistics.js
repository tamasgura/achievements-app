import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

const Statistics = (props) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.heading}>Statistics</Text>
    </View>
    <View>
      <View style={styles.row}>
        <Text style={styles.text}>Days passed: </Text>
        <Text style={styles.text}>{8}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Days completed: </Text>
        <Text style={styles.text}>{8}</Text>
      </View>
    </View>
    
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 22,
    marginBottom: 6,
    borderBottomWidth: 1,
    width: '70%'
  },
  row: {
    flexDirection: 'row',
    fontSize: 18
  },
  text: {
    fontSize: 17,
  }
})

export default Statistics