/**
 * @fileOverview Base class for all win conditions
 * @name Condition.js
 * @author Robert O'Connor
 * @license MIT
 */
'use strict';
export default class Condition {

  /**
   *
   * @param {Game} game
   */
  constructor(game) {
    this.game = game;
  }

  /**
   * Checks if a user has a won.
   * @returns {boolean} true if won, else false.
   */
  isWin() {
    return false;
  }
}
