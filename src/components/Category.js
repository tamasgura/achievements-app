import React, {Component} from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

class Category extends Component {
  
  state = {
    completed: false
  }
  
  componentDidMount () {
    this.setState({completed: this.props.completed})
  }
  
  
  render () {
    return (
      <View style={styles.container}>
    
        <View style={styles.indicatorContainer}>
          <TouchableOpacity style={[styles.indicator, this.state.completed ? styles[this.props.color] : null]} onPress={() => {
            this.setState({completed: !this.state.completed})
          }} >
  
            <Icon name="md-checkmark" size={40} color="#900" />
          </TouchableOpacity>
          <View style={styles.categoryTextContainer}>
            <Text style={styles.text}>{this.props.name}</Text>
          </View>
        </View>
    
        <View style={styles.done}>
          <Text>{this.state.completed ? 'DONE !' : ''}</Text>
          
        </View>
  
      </View>
    )
  
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    // borderWidth: 1,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 14,
  },
  indicator: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eee'
  },
  gameDev: {
    backgroundColor: 'red',
  },
  graphicDesign: {
    backgroundColor: 'orange',
  },
  offScreen: {
    backgroundColor: 'lightgreen',
  },
  done: {
  
  },
})

export default Category