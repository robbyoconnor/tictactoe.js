'use strict';

export default class Player {

  constructor(letter, game) {
    this.letter = letter;
    this.game = game;
  }

  move() {
    return false;
  }
}
