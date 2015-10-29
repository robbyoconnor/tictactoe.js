/**
 * @fileOverview Main Diagonal Win Condition
 * @name MainDiagonalWinCondition.js
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
   * Checks for a win on the main diagonal.
   * @returns {boolean} true if the player occupies the main diagonal
   */
  isWin() {
    if (this.diagonalWin('main')) {
      this.printWin('main');
      return true;
    }
    return false;
  }
}