import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet,  Text } from 'react-native';

export default class Items extends Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
   this.setState({ search });
  };

 

  render() {
    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={ITEMS}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const ITEMS = [
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
