'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class Cell extends Component {
  cellStyle = () => {
    switch (this.props.player) {
      case 1:
        return cell_styles.cellX;
      case 2:
        return cell_styles.cellO;
      default:
        return null;
    }
  };

  textStyle = () => {
    switch (this.props.player) {
      case 1:
        return cell_styles.cellTextX;
      case 2:
        return cell_styles.cellTextO;
      default:
        return {};
    }
  };

  textContents = () => {
    switch (this.props.player) {
      case 1:
        return 'X';
      case 2:
        return 'O';
      default:
        return '';
    }
  };

  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor="transparent"
        activeOpacity={0.5}>
        <View style={[cell_styles.cell, this.cellStyle()]}>
          <Text style={[cell_styles.cellText, this.textStyle()]}>
            {this.textContents()}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

var cell_styles = StyleSheet.create({
  // CELL

  cell: {
    width: 80,
    height: 80,
    borderRadius: 5,
    backgroundColor: '#7b8994',
    margin: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellX: {
    backgroundColor: '#72d0eb',
  },
  cellO: {
    backgroundColor: '#7ebd26',
  },

  // CELL TEXT

  cellText: {
    fontSize: 50,
    fontFamily: 'AvenirNext-Bold',
  },
  cellTextX: {
    color: '#19a9e5',
  },
  cellTextO: {
    color: '#b9dc2f',
  },
});

module.exports = Cell;