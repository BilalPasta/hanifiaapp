/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Sample from "./Sample";
import Stacknav from './src/practice/stacknavigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {

  myView = <View key={1} style={styles.container}>
  {/* <Stacknav/> */}
      <Sample>Hello Hanifia</Sample>
      <Text style={styles.welcome}>The basic App</Text>
      <Text style={styles.instructions}>
          To get started, edit App.js
      </Text>
      <Text style={styles.instructions}>
          {instructions}
      </Text>
  </View>;

  render() {
    return this.myView;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

