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
    const row = _.random(this.game.rows - 1);
    const col = _.random(this.game.rows - 1);
    const valid = tryMove(this.game, row, col, this.game.computer.letter)
    return valid;
  }

}