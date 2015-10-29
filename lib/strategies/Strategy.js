/**
 * @fileOverview The base class for Computer Strategies
 * @name Strategy.js
 * @author Robert O'Connor
 * @license MIT
 */
export default class Strategy {

  /**
   * Constructor
   * @param {Game} game the game being played.
   */
  constructor(game) {
    this.game = game;
  }

  /**
   * Makes a move.
   * @returns {boolean} if it was successful.
   */
  move() {
    return false;
  }

}