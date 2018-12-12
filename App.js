//import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
//
//export default class App extends React.Component {
//  render() {
//    return (
//      <View style={styles.container}>
//        <Text>Open up App.js to start working on your app!</Text>
//      </View>
//    );
//  }
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});

import React, { Component } from 'react';
import { View } from 'react-native';
//import firebase from 'firebase';
import { Header } from './components/common';
//import LoginForm from './components/LoginForm';

class App extends Component {
//  componentWillMount() {
//    firebase.initializeApp({
//
//      });
//  }


  render() {
    return (
    <View>
      <Header headerText='LOGO' />
    </View>
    );
  }

  //render() {
  //  return (
  //  <View>
  //    <Header headerText='LOGO' />
  //    <LoginForm />
  //  </View>
  //  );
  //}
}

export default App;
