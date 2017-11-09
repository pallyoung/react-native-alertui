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

import AlertUI from 'react-native-alertui';

export default class App extends Component<{}> {
  constructor(...props){
    super(...props);
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.container}>
          <AlertUI 
            title = 'Alert'
            message = 'this is a message from alertui'
            buttons ={[
              {
                text:'OK'
              },
              {
                text:'Cancel'
              }
            ]}
            />
      </View>
    );
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
