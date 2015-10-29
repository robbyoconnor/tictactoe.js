import Strategy from './Strategy';
import _ from 'lodash';
import {tryMove} from '../utils'
export default class CornerMoveComputerStrategy extends Strategy {
  constructor(game) {
    super(game);
    this.game = game;
  }

  move() {
    return this.findValidCornerMove();
  }


  validCornerMoves() {
    const corners = [
      [0, 0],
      [0, this.game.board.cols - 1],
      [this.game.board.rows - 1, this.game.board.cols - 1],
      [this.game.board.rows - 1, 0]
    ];
    return _.shuffle(_.filter(corners, move => {
      return this.game.board.isValidMove(move[0], move[1])
    }));
  }

  findValidCornerMove() {
    const corner = this.validCornerMoves();
    return corner ? (tryMove(this.game, corner[0],corner[1],this.game.computer.letter)) : false;
  }


}
