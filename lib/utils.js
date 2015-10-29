/**
 * @fileOverview Utility functions
 * @name utils.js
 * @author Robert O'Connor
 * @license MIT
 */

'use strict';
/* eslint no-param-reassign: 2*/
import clic from 'cli-color';
import readline from 'readline-sync';

/**
 * A helper function for getting user input
 * @param {string} question The question to be asked
 * @param {string} validValues Typically a regex or array
 * @param {string} message The validation message
 * @returns {string} the user input
 */
function ask(question, validValues, message) {
  readline.setDefaultOptions({
    limit: validValues,
    limitMessage: message
  });
  return readline.question(question);
}


/**
 * Returns ANSI color strings for pretty CLI output
 * @param {string} c
 * @param {boolean} bold
 * @param {string} msg
 * @returns {string} the ANSI color string
 */
function color(c, bold, msg) {
  return bold ? clic.xterm(c).bold(msg) : clic.xterm(c)(msg);
}


/**
 * Helper function to return either red or green for the layer color.
 * @param {string} letter
 * @returns {integer} return an integer representing the xterm color.
 */
function playerColor(letter) {
  const RED = 9;
  const GREEN = 10;
  return letter === 'X' ? RED : GREEN;
}

function count(collection, player) {
  const ret = collection.reduce((cnt, element) => {
    return element === player ? cnt += 1 : cnt;
  }, 0);
  return ret;
}

/**
 * A helper function to try moves -- basically a delegate function
 * @param {Game} game The game that is currently being played
 * @param {integer} row the row
 * @param {integer} col the column
 * @param {Player} player The player whose turn it currently is
 * @returns {boolean} Whether or not it is valid.
 */
function tryMove(game, row, col, player) {
  if (game.gameOver) {
    return false;
  }
  return game.board.makeMove(parseInt(row, 10), parseInt(col, 10), player);
}

export default {
  ask, color, playerColor, count, tryMove
};
