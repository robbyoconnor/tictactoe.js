'use strict'
import Condition from './Condition'
import Game from '../Game';
import {
  color, count, playerColor
}
from '../utils'
const _ = require('lodash');
export default class DiagonalWinCondition extends Condition {

  constructor(game) {
      super(game);
      this.game = game;
    }
    /*
     Given the following:
     0 | 1 | 2
     --- --- ---
     3 | 4 | 5
     --- --- ---
     6 | 7 | 8

     Returns: [2, 4, 6]*/
  minorDiagonal() {
    let ret = [];
    _.times(this.game.rows, (i) => {
      ret.push(this.game.board.board[i][this.game.rows-1-i]);
    });
    return ret;
  }

  /*
   Given the following:
   0 | 1 | 2
   --- --- ---
   3 | 4 | 5
   --- --- ---
   6 | 7 | 8


   Returns: [0, 4, 8] */
  mainDiagonal() {
    let ret = [];
    _.times(this.game.rows, (i) => {
      ret.push(this.game.board.board[i][i]);
    });
    return ret;
  }

  printWin(diagonal) {
    console.log(color(playerColor(this.game.turn.letter), true, `${this.game.turn} has won on the ${diagonal} diagonal`));
  }

  diagonalWin(diagonal) {
    return count(eval(`this.${diagonal}Diagonal`).apply(this), this.game.turn.letter) === this.game.rows;
  }

}
