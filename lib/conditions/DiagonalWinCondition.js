/**
 * @fileOverview The base class for all diagonal win conditions
 * @name DiagonalWinCondition.js
 * @author Robert O'Connor
 * @license MIT
 */

'use strict';
import Condition from './Condition';
import {
  color, count, playerColor
}
from '../utils';
const _ = require('lodash');
export default class DiagonalWinCondition extends Condition {

  /**
   * Constructor
   * @param {} game
   */
  constructor(game) {
    super(game);
    this.game = game;
  }

  /*
   * Given the following:
   *   0 | 1 | 2
   *   --- --- ---
   *   3 | 4 | 5
   *   --- --- ---
   *   6 | 7 | 8
   *
   *   Returns: [2, 4, 6]
   *   @returns {integer[]} an array consisting of all elements on the minor diagonal.
   */
  minorDiagonal() {
    const ret = [];
    _.times(this.game.rows, (i) => {
      ret.push(this.game.board.board[i][this.game.rows - 1 - i]);
    });
    return ret;
  }

  /*
   * Given the following:
   *   0 | 1 | 2
   *   --- --- ---
   *   3 | 4 | 5
   *   --- --- ---
   *   6 | 7 | 8
   *
   *   Returns: [0, 4, 8]
   *
   *   @returns {integer[]} an array consisting of all elements on the main diagonal.
   */
  mainDiagonal() {
    const ret = [];
    _.times(this.game.rows, (i) => {
      ret.push(this.game.board.board[i][i]);
    });
    return ret;
  }

  /**
   * Print the win message for the diagonal!
   * @param {string} diagonal
   */
  printWin(diagonal) {
    console.log(color(playerColor(this.game.turn.letter), true, `${this.game.turn} has won on the ${diagonal} diagonal`));
  }

  /**
   * counts all elements on the main diagonal and checks if the player occupies the entirety.
   * @param {string} diagonal
   * @returns {boolean} true if the player occupies the whole diagonal, otherwise false.
   */
  diagonalWin(diagonal) {
    /* eslint-disable no-exec */
    return count(eval(`this.${diagonal}Diagonal`).apply(this), this.game.turn.letter) === this.game.rows;
  }
}