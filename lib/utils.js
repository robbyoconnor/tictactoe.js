'use strict';
/* eslint no-param-reassign: 2*/
import clic from 'cli-color';
import readline from 'readline-sync';

function ask(question, validValues, message) {
  readline.setDefaultOptions({
    limit: validValues,
    limitMessage: message
  });
  return readline.question(question);
}

function color(c, bold, msg) {
  return bold ? clic.xterm(c).bold(msg) : clic.xterm(c)(msg);
}

function playerColor(letter) {
  const RED = 9;
  const GREEN = 10;
  return letter === 'X' ? RED : GREEN;
}

function count(collection, player) {
  collection.reduce((cnt, element) => {
    return element === player ? cnt += 1 : cnt;
  }, 0);
}

function tryMove(game, row, col, player) {
  if (game.gameOver) {
    return false;
  }
  return game.board.makeMove(parseInt(row, 10), parseInt(col, 10), player);
}

export default {
  ask, color, playerColor, count, tryMove
};
