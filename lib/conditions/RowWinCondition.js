'use strict';
import Game from '../Game';
import Condition from './Condition';
import {
  color, count, playerColor
}
from '../utils';
const _ = require('lodash');
export default class RowWinCondition extends Condition {

  constructor(game) {
    super(game);
    this.game = game;
  }

  isWin() {
    return this.checkRows();
  }

  checkRows() {
    let isWinner = false;
    _.times(this.game.rows, (row) => {
      let countInRow = count(this.row(row), this.game.turn.letter);
      if (countInRow === this.game.rows) {
        console.log(color(playerColor(this.game.turn.letter), true, `${this.game.turn} has won in row ${row}`))
        isWinner = true;
      }
    });
    return isWinner;
  }

  row(row) {
    let ret = []
    _.times(this.game.board.board.length, (col) => {
      ret.push(this.game.board.board[row][col])
    })
    return ret;
  }
}
