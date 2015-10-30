/**
 * @fileOverview Randomly pick a location.
 * @name RandomLocationComputerStrategy.js
 * @author Robert O'Connor
 * @license MIT
 */
import _ from 'lodash';
import Strategy from './Strategy';

import {
  tryMove
}
from '../utils';
export default class RandomLocationComputerStrategy extends Strategy {

  /**
   * Ctor
   * @param {Game} game The current game
   */
  constructor(game) {
    super(game);
    this.game = game;
  }

  /**
   * Make a move!
   * @return {boolean} whether or not the move was valid.
   */
  move() {
      return this.pickRandomCell();
    }
    /**
     * Pick a random cell.
     * @return {boolean} whether or not the move was valid.
     */
  pickRandomCell() {
    const row = this.randomNum();
    const col = this.randomNum();
    const valid = tryMove(this.game, row, col, this.game.computer.letter)
    return valid;
  }

  /**
   * Utility function.
   * @return {integer} a random number between 0 and rows-1. 
   */
  randomNum() {
    return _.random(this.game.rows - 1);
  }
}