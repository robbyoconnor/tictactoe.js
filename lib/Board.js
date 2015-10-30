/**
 * @fileOverview Represents the board
 * @name Board.js
 * @author Robert O'Connor
 * @license MIT
 */

'use strict';
import {
  playerColor, color
}
from './utils';
import _ from 'lodash';
export default class Board {

  /**
   * Constructor
   * @param {integer} rows rows
   * @param {integer} cols columns
   */
  constructor(rows, cols) {
    this.cols = this.rows = rows;
    this.movesLeft = rows * cols;
    // initialize the entire board.
    this.board = _.times(this.rows).map(() => {
      // Create one row
      return _.times(this.cols).map(() => {
        return ' ';
      });
    });
  }


  /**
   * Checks whether or not the move is valid
   * @param {integer} row The column
   * @param {integer} col The row
   * @returns {boolean} Whether or not the move is valid.
   */
  isValidMove(row, col) {
    if (!this.checkDimensionBound(col) && !this.checkDimensionBound(row)) {
      return false;
    } else if (this.board[row][col] !== ' ') {
      return false;
    }
    return true;
  }

  /**
   * Checks dimension bounds.
   * @param {integer} size
   * @returns {boolean}  Whether or not the dimension is in bounds.
   */
  checkDimensionBound(size) {
    // rows is chosen arbitrarily here -- it is square, so rows = cols.
    return size >= 0 && size < this.rows;
  }


  /**
   * Make a move!
   * @param {integer} row
   * @param {integer} col
   * @param {Player} player
   * @returns {boolean}  Whether or not the move was successful.
   */
  makeMove(row, col, player) {
    if (!this.isValidMove(row, col)) {
      return false;
    }
    this.board[row][col] = player;
    this.movesLeft--;
    return true;
  }

  /**
   * Print the board!
   */
  printBoard() {
    let ret = '';
    this.board.map(row => {
      row.map(element => {
        ret += element !== ' ' ? color(playerColor(element), false, ` ${element} `) : ' - ';
      });
      ret += '\n';
    });
  console.log(ret);
  }
}
