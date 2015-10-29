/**
 * @fileOverview Row Win Condition checker
 * @name RowWinCondition.js
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
export default class RowWinCondition extends Condition {

  /**
   *
   * @param {Game} game
   */
  constructor(game) {
    super(game);
    this.game = game;
  }

  /**
   * Check win
   * @return {boolean} If the user has won in any row.
   */
  isWin() {
    return this.checkRows();
  }

  /**
   * Check rows one by one and if the user occupies the whole row, tell them!
   * @return {boolean} Checks all rows and returns true if the user is in the whole row.
   */
  checkRows() {
      let isWinner = false;
      _.times(this.game.rows, (row) => {
        const countInRow = count(this.row(row), this.game.turn.letter);
        if (countInRow === this.game.rows) {
          console.log(color(playerColor(this.game.turn.letter), true, `${this.game.turn} has won in row ${row}.`));
          isWinner = true;
        }
      });
      return isWinner;
    }
    /**
     * Gather the current row.
     * @param {int} row the current row
     * @return {string[]} the specified row.
     */
  row(row) {
    const ret = [];
    _.times(this.game.board.board.length, (col) => {
      ret.push(this.game.board.board[row][col]);
    });
    return ret;
  }
}
