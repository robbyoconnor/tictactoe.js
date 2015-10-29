'use strict';
import Condition from './Condition';
import DiagonalWinCondition from './DiagonalWinCondition';

export default class MinorDiagonalWinCondition extends DiagonalWinCondition {
  constructor(game) {
    super(game);
    this.game = game;
  }

  isWin() {
    if (this.diagonalWin('minor')) {
      this.printWin('minor');
      return true;
    } else {
      return false;
    }
  }
}
