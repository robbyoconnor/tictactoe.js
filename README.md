[![Stories in Ready](https://badge.waffle.io/robbyoconnor/tictactoe.js.png?label=ready&title=Ready)](https://waffle.io/robbyoconnor/tictactoe.js)
# Tic Tac Toe written in Javascript (ES6) using Node.js
[![Code Climate](https://codeclimate.com/github/robbyoconnor/tictactoe.js/badges/gpa.svg)](https://codeclimate.com/github/robbyoconnor/tictactoe.js)
[![npm version](https://badge.fury.io/js/tictactoe.js.svg)](https://badge.fury.io/js/tictactoe.js)
[![Stories in Ready](https://badge.waffle.io/robbyoconnor/tictactoe.js.png?label=ready&title=Ready)](https://waffle.io/robbyoconnor/tictactoe.js)
![Github License](https://img.shields.io/badge/License-MIT-green.svg)
[![Made with Spacemacs](https://cdn.rawgit.com/syl20bnr/spacemacs/develop/assets/spacemacs-badge.svg)](http://github.com/syl20bnr/spacemacs)
[![forthebadge](http://forthebadge.com/images/badges/as-seen-on-tv.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/powered-by-electricity.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/powered-by-oxygen.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/powered-by-water.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-by-developers.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-git.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/no-ragrets.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-badges.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/fuck-it-ship-it.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/compatibility-emacs.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/fo-sho.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/fo-shizzle.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/for-sharks.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/oooo-kill-em.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/powered-by-netflix.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/compatibility-club-penguin.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/made-with-crayons.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/makes-people-smile.svg)](http://forthebadge.com)

**Requires Node.js 4.2+ and [Babel](https://babeljs.io/)**

#To Run

This must be run using `babel-node` for now since ES6 modules are not yet available in V8 yet, and as such are not in Node.JS yet.

**Step 1**: [Install Babel](https://www.npmjs.com/package/babel/):
```
npm install babel 
```

**Step 2**: Run it:
```sh
babel-node bin/main.js
```

**Step 3**: ???

**Step 4**: Profit!11!!
# How to play
- Specify Grid size (3x3 is the smallest; 12x12 is the largest)
- Choose whether you want to be X or O
- Computer has some intelligence, first it will try to select the corners and then after that will randomly pick a spot.
- First player is randomly chosen
- It's got color thanks to the [cli-color library](https://www.npmjs.com/package/cli-color)

## Notes about terminology used
Terminology for the diagonals is taken from Linear Algebra's Matrix terminology.

**Major Diagonal**: [0, 4, 8]

**Minor Diagonal**:  [2,4,6]

     0 | 1 | 2
     --- --- ---
     3 | 4 | 5
     --- --- ---
     6 | 7 | 8

# About the design 

- WinConditions have a common super class of Condition
- Computer Move strategies are each in their own class and again modular to improve testability with a common subclass of Strategy.
- Grid Size **must** be square ```(nxn)``` and starts at 3x3 and maxes out at 12x12. This was due to it not looking great on my system. 
 
 
This design can be  very easily tweaked to handle the [n-queens problem](http://en.wikipedia.org/wiki/Eight_queens_puzzle).

If we relax the requirement that the board size be square, then we have [Connect Four](http://en.wikipedia.org/wiki/Connect_Four).

This was ported from a [similar implementation written in ruby](https://github.com/robbyoconnor/tictactoe).

