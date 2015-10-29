'use strict';
import Game from '../Game';
import Condition from './Condition'
import {
  color, count, playerColor
}
from '../utils'
const _ = require('lodash');
export default class ColumnWinCondition extends Condition {

  constructor(game) {
    super(game);
    this.game = game;
  }

  isWin() {
    return this.checkCols();
  }

  checkCols() {
    let isWinner = false;
    _.times(this.game.cols, (col) => {
      const countInCol = count(this.col(col), this.game.turn.letter);
      if (countInCol === this.game.cols) {
        console.log(color(playerColor(this.game.turn.letter), true, `${this.game.turn} has won in column ${col}`));
        isWinner = true;
      }
    });
    return isWinner;
  }

  col(col) {
    let ret = []
    _.times(this.game.board.board.length, (column) => {
      ret.push(this.game.board.board[column][col])
    })
    return ret;
  }
}
