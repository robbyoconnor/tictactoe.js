/**
 * @fileOverview Minor Diagonal Win Condition
 * @name MinorDiagonalWinCondition.js
 * @author Robert O'Connor
 * @license MIT
 */
'use strict';
import DiagonalWinCondition from './DiagonalWinCondition';

export default class MinorDiagonalWinCondition extends DiagonalWinCondition {
  /**
   * Constructor 
   * @param {Game} game
   */
  constructor(game) {
    super(game);
    this.game = game;
  }

  /**
   * Checks if a user has won on the minor diagonal. 
   * @returns {boolean}  Whether or the not the user has won.
   */
  isWin() {
    if (this.diagonalWin('minor')) {
      this.printWin('minor');
      return true;
    }
    return false;
  }
}