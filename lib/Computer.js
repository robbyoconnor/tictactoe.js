/**
 * @fileOverview Represents the Computer player
 * @name Computer.js
 * @author Robert O'Connor
 * @license MIT
 */
'use strict';
import {
  color, playerColor
}
from './utils';
import Human from './Human';
import CornerMoveComputerStrategy from './strategies/CornerMoveComputerStrategy';
import RandomLocationComputerStrategy from './strategies/RandomLocationComputerStrategy';

export default class Computer extends Human {
  /**
   *  Constructor
   * @param {string} letter The letter representing the player
   * @param {Game} game the current game
   */
  constructor(letter, game) {
    super(letter, game);
    this.letter = letter;
    this.game = game;
    this.strategies = [new CornerMoveComputerStrategy(game), new RandomLocationComputerStrategy(game)];
  }

  /**
   *
   * @returns {}
   */
  move() {
    console.log(color(playerColor(this.letter), false, "\n\nComputer's Turn\n\n"));
    let validMove = false;
    while (!validMove) {
      validMove = this.strategies[0].move();
      if (!validMove) {
        validMove = this.strategies[1].move();
      }
    }
    return true;
  }

  toString() {
    return 'Computer';
  }
}
