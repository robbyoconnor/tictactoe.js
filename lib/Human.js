/**
 * @fileOverview Represents the Human player
 * @name Human.js
 * @author Robert O'Connor
 * @license MIT
 */
'use strict';

import Player from './Player';
import {
  ask, color, playerColor, tryMove
}
from './utils';

export default class Human extends Player {
  constructor(letter, game) {
    super(letter, game);
    this.letter = letter;
    this.game = game;
  }

  /**
   * Make a move!
   * @returns {boolean}  whether or not the move was successful.
   */
  move() {
    console.log(color(playerColor(this.letter), true, '\nYour Turn\n\n'));
    this.promptPlayerMove();
  }

  /**
   *Prompt the user for their move.
   */
  promptPlayerMove() {
    let valid = false;
    let error = false;
    while (!valid) {
      if (error) {
        console.error(color(9, true, `Valid values are [0 0 through ${this.game.rows - 1} ${this.game.rows - 1}]. `));
      }
      const move = ask(color(228, true, `Enter a move in the form \"0 0\" Valid values are [0 0 through ${this.game.rows - 1} ${this.game.rows - 1}]: `),
        /^\d+\s\d+$/,
        color(9, true, 'Input must be numeric and must contain a space separating the x and y inputs, such as "0 0".'));
      valid = this.validateMove(move.split(' '));
      if (!valid) {
        error = true;
      }
    }
  }


  /**
   * Validate the user's move.
   * @param {string[]} move
   * @returns {true if the move is valid, otherwise false.}
   */
  validateMove(move) {
    let err = '';
    let valid = true;
    if (!tryMove(this.game, move[0], move[1], this.letter)) {
      err = `The move (${move[0]},${move[1]}) is not valid.`;
      valid = false;
    }
    console.log(color(9, true, err));
    return valid;
  }

  toString() {
    return `Player`;
  }
}