import _ from 'lodash';
import Strategy from './Strategy'
import {tryMove} from '../utils';
export default class RandomLocationComputerStrategy extends Strategy {
  constructor(game) {
    super(game);
    this.game = game
  }

  move() {
    return this.pickRandomCell();
  }

  pickRandomCell() {
    const row = this.randomNum();
    const col = this.randomNum();
    let valid = tryMove(this.game,row,col,this.game.computer.letter)
    if(valid) console.log(`(${row},${col})`)
    return valid;
  }

  randomNum() {
    return _.random(this.game.rows-1);
  }
}
