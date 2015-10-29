/**
 * @fileOverview Column Win Condition
 * @name ColumnWinCondition.js
 * @author Robert O'Connor
 * @license MIT
 */
'use strict';
import Condition from './Condition';
import {
  color, count, playerColor
}
from '../utils';
import _ from 'lodash';
export default class ColumnWinCondition extends Condition {

  /**
   *
   * @param {Game} game the current game
   */
  constructor(game) {
    super(game);
    this.game = game;
  }

  /**
   * Check cols one by one and if the user occupies the whole row, tell them!
   * @return {boolean} Checks all cols and returns true if the user is in the whole row.
   */
  isWin() {
    return this.checkCols();
  }

  /**
   * Check cols one by one and if the user occupies the whole row, tell them!
   * @return {boolean} Checks all cols and returns true if the user is in the whole row.
   */
  checkCols() {
    let isWinner = false
    _.times(this.game.cols, (col) => {
      const countInCol = count(this.col(col), this.game.turn.letter);
      if (countInCol === this.game.cols) {
        console.log(color(playerColor(this.game.turn.letter), true, `${this.game.turn} has won in column ${col}.`));
        isWinner = true;
      }
    });
    return isWinner;
  }

  /**
   * Gather the current col.
   * @param {int} col the current col
   * @return {string[]} the specified col.
   */
  col(col) {
    const ret = [];
    _.times(this.game.board.board.length, (row) => {
      ret.push(this.game.board.board[row][col]);
    });
    return ret;
  }
}
