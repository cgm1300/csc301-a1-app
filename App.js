import React from 'react';
import { AppLoading } from 'expo';
import { Text, View, StyleSheet, Platform, AsyncStorage } from 'react-native';
import Parse from 'parse/react-native.js';
import AppNavigator from './navigation/AppNavigator';
import CheckoutScreen from './screens/CheckoutScreen';
// import keys from './constants/keys';

var Parse = require('parse/react-native.js');
Parse.setAsyncStorage(AsyncStorage);
// Parse.initialize

export default class App extends React.component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image source={require('./assets/images/loading.png')} />
        <AppNavigator />;
      </View>
    );
  }
}

const styles = StyleSheet.create({
          container: {
                      borderRadius: 4,
                      borderWidth: 0.5,
                      borderColor: '#d6d7da'
                    },
          title: {
                      fontSize: 19,
                      fontWeight: 'bold'
                    },
          activeTitle: {
                      color: 'red'
                    }
});
