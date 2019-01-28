/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

import Category from './src/components/Category'
import Statistics from './src/components/Statistics'
import {getDate} from './src/utility'

type Props = {}
export default class App extends Component<Props> {
  
  date = getDate()
  
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Text style={styles.welcome}>Achievements</Text>
            <Text stlye={styles.date}>{this.date()}</Text>
          </View>
          
          <View>
            <Category name='Game Development' color='gameDev' completed={true}/>
            <Category name='Graphic Design' color='graphicDesign' completed={true}/>
            <Category name='Off screen' color='offScreen' completed={true}/>
          </View>
        </View>
        
        <Statistics />
        
        <View style={styles.resultsContainer}>
          <Text style={styles.result}>100%</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 40,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 20,
    justifyContent: 'space-between'
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  welcome: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 8,
  },
  mainContainer: {
    flex: 4,
  },
  date: {
  },
  resultsContainer: {
    borderWidth: 1,
  },
  result: {
    color: 'lightgreen',
    fontSize: 40,
    fontWeight: '900',
    textAlign: 'right'
  },
})
