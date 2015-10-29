'use strict'
import Condition from './Condition';
import DiagonalWinCondition from './DiagonalWinCondition';


export default class MinorDiagonalWinCondition extends DiagonalWinCondition {
  constructor(game) {
    super(game);
    this.game = game;
  }

  isWin() {
    if (this.diagonalWin('main')) {
      this.printWin('main');
      return true;
    } else {
      return false;
    }
  }
}
