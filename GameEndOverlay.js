'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class GameEndOverlay extends Component {
  render() {
    var board = this.props.board;

    var tie = board.tie();
    var winner = board.winner();
    if (!winner && !tie) {
      return <View />;
    }

    var message;
    if (tie) {
      message = 'It\'s a tie!';
    } else {
      message = (winner === 1 ? 'X' : 'O') + ' wins!';
    }

    return (
      <View style={overlay_styles.overlay}>
        <Text style={overlay_styles.overlayMessage}>{message}</Text>
        <TouchableHighlight
          onPress={this.props.onRestart}
          underlayColor="transparent"
          activeOpacity={0.5}>
          <View style={overlay_styles.newGame}>
            <Text style={overlay_styles.newGameText}>New Game</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

var overlay_styles = StyleSheet.create({
  // GAME OVER

  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(221, 221, 221, 0.5)',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayMessage: {
    fontSize: 40,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    fontFamily: 'AvenirNext-DemiBold',
    textAlign: 'center',
  },
  newGame: {
    backgroundColor: '#887765',
    padding: 20,
    borderRadius: 5,
  },
  newGameText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'AvenirNext-DemiBold',
  },
});

module.exports = GameEndOverlay;