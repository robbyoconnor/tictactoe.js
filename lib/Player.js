/**
 * @fileOverview The base class for the types of Players
 * @name Player.js
 * @author Robert O'Connor
 * @license MIT
 */
'use strict';

export default class Player {

  /**
   * constructor
   * @param {string} letter the letter (either X or O)
   * @param {Game} game The current game.
   */
  constructor(letter, game) {
    this.letter = letter;
    this.game = game;
  }

  /**
   * Make a move!
   * @returns {boolean}  whether or not the move was successful.
   */
  move() {
    return false;
  }
}