/**
 * @fileOverview Represents the Game state
 * @name Game.js
 * @author Robert O'Connor
 * @license MIT
 */

'use strict';
import {
  ask, playerColor, color
}
from './utils';
import Board from './Board';
import Computer from './Computer';
import Human from './Human';
import RowWinCondition from './conditions/RowWinCondition';
import ColumnWinCondition from './conditions/ColumnWinCondition';
import MainDiagonalWinCondition from './conditions/MainDiagonalWinCondition';
import MinorDiagonalWinCondition from './conditions/MinorDiagonalWinCondition';
import _ from 'lodash';

export default class Game {
  /**
   * The default constructor
   */
  constructor() {}

  /**
   * the main  entry point.
   */
  ttt() {
    console.log('Welcome to Tic Tac Toe!');
    let keepPlaying = true;
    while (keepPlaying) {
      this.startGame();
      keepPlaying = ask(color(10, true, '\nGame over, do you want play again (y/n) [case-insensitive]: '), /^[yn]$/, color(9, true, 'The only valid values are (y/n) [case-insensitive].')).toLowerCase() === 'y';
    }
  }

  /**
   * Start a new game.
   */
  startGame() {
    this.promptForGridSize();
    this.promptPlayerChoice();
    this.initializeGame();
    console.log(color(playerColor(this.turn.letter), false, `${this.turn} will go first.`));
    this.play();
    console.log(color(228, false, '\n' + '-'.repeat(80)));
  }


  /**
   * Prompt for the grid size.
   */
  promptForGridSize() {
    console.log(color(228, true, 'Grid Sizes (Max 12x12)'));
    console.log(color(228, true, `
 ----------------------
| 1.  3x3             |
| 2.  4x4             |
| 3.  5x5             |
| 4.  6x6             |
| 5.  7x7             |
| 6.  8x8             |
| 7.  9x9             |
| 8   10x10           |
| 9.  11x11           |
| 10. 12x12           |
 ---------------------\r\n`));

    const selection = ask(color(228, true, 'Select a grid size: '), ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], color(9, true, 'The only valid values are 1 through 10.\n'));

    const menu = {
      '1': 3,
      '2': 4,
      '3': 5,
      '4': 6,
      '5': 7,
      '6': 8,
      '7': 9,
      '8': 10,
      '9': 11,
      '10': 12
    };
    const size = menu[selection];
    this.board = new Board(size, size);
    this.cols = this.rows = size;

  }

  /**
   * Prompt for the player choice
   */
  promptPlayerChoice() {
    const playerChoice = ask(color(228, true, '\nPlayer Choice [X/O (case-insensitive)]: '), /^[XO]$/, color(9, true, 'The only valid values are X or O (case-insensitive).\n'));

    this.player = new Human(playerChoice, this);
    this.computer = this.player.letter === 'X' ? new Computer('O', this) : new Computer('X', this);
  }


  /**
   * Initialize the game, which randomly selects the first player and
   * sets up the win conditions
   */
  initializeGame() {
    this.gameOver = false;
    this.turn = [this.player, this.computer][_.random(1)];
    this.conditions = [new ColumnWinCondition(this), new RowWinCondition(this),
      new MinorDiagonalWinCondition(this), new MainDiagonalWinCondition(this)
    ];
  }


  /**
   * Runs a check if the game is over else it sets whose turn it is.
   */
  nextTurn() {
    if (this.gameOver) {
      return;
    } else if (this.turn === this.player) {
      this.turn = this.computer;
    } else {
      this.turn = this.player;
    }
  }

  /**
   * Let's play!
   */
  play() {
    while (!this.gameOver) {
      this.turn.move();
      this.board.printBoard();
      if (this.checkWin()) {
        this.gameOver = true;
      }
    }
  }


  /**
   * Checks if the current turn has won.
   * @returns {boolean} if the current turn has won.
   */
  checkWin() {
    // if the map contains true, then there is a winner.
    // we do not actually care what condition is triggered, since it will handle printing to the user.
    const hasWon = _.includes(_.map(this.conditions, cond => {
      return cond.isWin();
    }), true);
    if (hasWon) {
      this.winner = this.turn;
      return true;
    } else if (this.board.movesLeft === 0) {
      console.log(color(10, true, "Cat's Game!"));
      this.board.draw = true;
      this.gameOver = true;
      return false;
    } else {
      this.nextTurn();
      return false;
    }
  }
}
