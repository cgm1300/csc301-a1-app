import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class Search extends Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
   this.setState({ search });
  };

  render() {
    return (
      <SearchBar placeholder="Enter product name or ID"
        onChangeText={this.updateSearch}
        value={search}
      />
    )
  }
}
