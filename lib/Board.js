'use strict';
import {
  playerColor, color
}
from './utils';
const _ = require('lodash');
export default class Board {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.movesLeft = rows * cols;
    this.buildBoard();
  }
  buildBoard() {
    // initialize the entire board.
    // never ever use a for loop -- no need!
    this.board = _.times(this.rows).map(() => {
      // Create one row
      return _.times(this.cols).map(() => {
        return ' ';
      });
    });
  }


  isValidMove(row, col) {
    if (!this.checkDimensionBound(col) && !this.checkDimensionBound(row)) {
      return false;
    } else if (this.board[row][col] !== ' ') {
      return false;
    }
    return true;
  }

  checkDimensionBound(size) {
    // rows is chosen arbitrarily here -- it is sqaure, so rows = cols.
    return size >= 0 && size < this.rows;
  }

  makeMove(row, col, player) {
    if (!this.isValidMove(row, col)) {
      return false;
    }
    this.board[row][col] = player;
    this.movesLeft--;
    return true;
  }

  printBoard() {
    console.log(this.getRows());
  }

  getRows() {
    let ret = '';
    this.board.map(row => {
      row.map(element => {
        ret += element !== ' ' ? color(playerColor(element), false, ` ${element} `) : ' - ';
      });
      ret += '\n';
    });
    return ret;
  }
}
