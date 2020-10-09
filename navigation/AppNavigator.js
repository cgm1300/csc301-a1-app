import React, { Component } from 'react';
import { Text, Navigator } from 'react-native'

export default class AppNavigator extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{title: 'CheckoutScreen', index: 0}}
        renderScene={(route, navigator) => (
          <Text>{route.title}</Text>
        )}
      style={{padding: 100}}
      />
    );
  }
}
