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
   * Display the menu for the grid size.
   */
  displayMenuForGridSize() {
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
  }

  /**
   * Prompt for the grid size.
   */
  promptForGridSize() {
    this.displayMenuForGridSize();
    const selection = ask(color(228, true, 'Select a grid size: '), ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], color(9, true, 'The only valid values are 1 through 10.\n'));
    this.createGridForGame(selection);
  }

  /**
   * Create the grid
   * @param {string} choice the user's choice.
   */
  createGridForGame(choice) {
    const menu = {
      '1': '3x3',
      '2': '4x4',
      '3': '5x5',
      '4': '6x6',
      '5': '7x7',
      '6': '8x8',
      '7': '9x9',
      '8': '10x10',
      '9': '11x11',
      '10': '12x12'
    };
    this.createBoard(parseInt(menu[choice].split('x')[0], 10));
  }

  /**
   * Create the board
   * @param {integer} size the size
   */
  createBoard(size) {
    this.board = new Board(size, size);
    this.rows = size;
    this.cols = size;
  }


  /**
   * Prompt for the player choice
   */
  promptPlayerChoice() {
    const choice = ask(color(228, true, '\nPlayer Choice [X/O (case-insensitive)]: '), /^[XO]$/, color(9, true, 'The only valid values are X or O (case-insensitive).\n'));

    this.createPlayers(choice);
  }

  /**
   * Create the players
   * @param {string} choice the player's choice.
   */
  createPlayers(choice) {
    this.createPlayer(choice);
    console.log(color(playerColor(this.player.letter), false, `\nPlayer is ${this.player.letter}\n`));
    this.createComputer();

    console.log(color(playerColor(this.computer.letter), false, `Computer is ${this.computer.letter}\n`));
  }

  /**
   * Create the Human player
   * @param {string} playerChoice the player's choice
   */
  createPlayer(playerChoice) {
    this.player = new Human(playerChoice, this);
  }

  /**
   * Create the Computer player
   */
  createComputer() {
    this.computer = this.player.letter === 'X' ? new Computer('O', this) : new Computer('X', this);
  }

  /**
   * Initialize the game, which randomly selects the first player and
   * sets up the win conditions
   */
  initializeGame() {
    this.gameOver = false;
    this.turn = this.firstPlayer();
    this.conditions = [new ColumnWinCondition(this), new RowWinCondition(this),
      new MinorDiagonalWinCondition(this), new MainDiagonalWinCondition(this)
    ];
  }

  /**
   * Randomly select first user.
   * @returns {Player} either the Computer or the Human will be returned.
   */
  firstPlayer() {
    const player = [this.player, this.computer];
    const turn = player[_.random(1)];
    return turn;
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


  /**
   * Let's play!
   */
  play() {
    while (!this.gameOver) {
      this.makePlay(this.turn);
    }
  }

  /**
   * Make a play!
   * @param {string} player
   */
  makePlay(player) {
    player.move();
    this.board.printBoard();
    if (this.checkWin()) {
      this.gameOver = true;
    }
  }
}