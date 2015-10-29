/**
 * @fileOverview Corner move strategy (randomly pick a corner)
 * @name CornerMoveComputerStrategy.js
 * @author Robert O'Connor
 * @license MIT
 */
import Strategy from './Strategy';
import _ from 'lodash';
import {
  tryMove
}
from '../utils';
export default class CornerMoveComputerStrategy extends Strategy {
  /**
   * Constructor
   * @param {Game} game current game.
   */
  constructor(game) {
      super(game);
      this.game = game;
    }
    /**
     * Make a move!
     */
  move() {
    return this.findValidCornerMove();
  }

  /**
   * Find all open corners.
   * @return {integer[]} an array containing all open corners in a random order.
   */
  validCornerMoves() {
      const corners = [
        [0, 0],
        [0, this.game.board.cols - 1],
        [this.game.board.rows - 1, this.game.board.cols - 1],
        [this.game.board.rows - 1, 0]
      ];
      return _.shuffle(_.filter(corners, move => {
        return this.game.board.isValidMove(move[0], move[1]);
      }));
    }
    /**
     * Find all valid moves and try one.
     */
  findValidCornerMove() {
    const corner = this.validCornerMoves();
    return corner ? (tryMove(this.game, corner[0], corner[1], this.game.computer.letter)) : false;
  }


}