/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @providesModule TicTacToeApp
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import Cell from './Cell';
import Board from './Board';
import GameEndOverlay from './GameEndOverlay';

var AwesomeProject = React.createClass({
  getInitialState() {
    return { 
              board: new Board(), 
              player: 1 
           };
  },

  restartGame() {
    this.setState(this.getInitialState());
  },

  nextPlayer(): number {
    return this.state.player === 1 ? 2 : 1;
  },

  handleCellPress(row: number, col: number) {
    if (this.state.board.hasMark(row, col)) {
      return;
    }

    this.setState({
      board: this.state.board.mark(row, col, this.state.player),
      player: this.nextPlayer(),
    });
  },

  render() {
    var rows = this.state.board.grid.map((cells, row) =>
      <View key={'row' + row} style={styles.row}>
        {cells.map((player, col) =>
          <Cell
            key={'cell' + col}
            player={player}
            onPress={this.handleCellPress.bind(this, row, col)}
          />
        )}
      </View>
    );

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Rooney T4</Text>
        <View style={styles.board}>
          {rows}
        </View>
        <GameEndOverlay
          board={this.state.board}
          onRestart={this.restartGame}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a4f442'
  },
  title: {
    fontFamily: 'Chalkduster',
    fontSize: 39,
    marginBottom: 20,
  },
  board: {
    padding: 5,
    backgroundColor: '#47525d',
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
