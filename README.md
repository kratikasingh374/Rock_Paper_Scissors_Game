Rock — Paper — Scissors Game (HTML / CSS / JS)

Simple browser game where a user plays Rock, Paper, Scissors against the computer. The computer randomly chooses its move; the user clicks one of three images (rock / paper / scissors). A live scoreboard shows User and Computer scores and displays the round result.

Demo / Preview

(Replace with a screenshot or GIF of your game in the README if you want)

Features

Clickable images for Rock, Paper, and Scissors.

Computer makes a random choice each round.

Round outcome shown (Win / Lose / Draw).

Live scoreboard that updates user and computer scores.

Smooth UI with basic CSS styling and responsive layout.

Lightweight — only HTML, CSS, and vanilla JavaScript.

How to play

Open index.html in your browser.

Click one of the three images (rock / paper / scissors).

The computer will randomly pick its move.

The result of the round (You Win / You Lose / Draw) will display.

Scores update automatically. Play until you decide to reset or close the page.

Files / Project structure
rock-paper-scissors/
├─ index.html          # Game markup, images and scoreboard container
├─ styles.css          # Styling and responsive layout
├─ script.js           # Game logic: user clicks, computer random choice, scoring
├─ assets/
│  ├─ rock.png
│  ├─ paper.png
│  └─ scissors.png
└─ README.md

Implementation overview (logic)

Each clickable image has a data attribute for the choice: data-choice="rock" (or paper / scissors).

On click:

Read the user's choice.

Generate computer choice with Math.random() from ['rock','paper','scissors'].

Compare choices using rules:

Rock beats Scissors

Scissors beats Paper

Paper beats Rock

Update the UI:

Show both choices (icons or text).

Display round result message.

Increment relevant score and update scoreboard.

Setup / Run

Clone or download the repository.

Make sure index.html, styles.css, script.js and assets/ are in the same folder.

Open index.html in any modern browser (Chrome, Firefox, Edge).

Play!
