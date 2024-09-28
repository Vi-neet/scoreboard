const homeTeamScore = document.querySelector(".home-team--score");
const awayTeamScore = document.querySelector(".away-team--score");
const resetBtn = document.querySelector(".reset");

let homeScore = 0;
let awayScore = 0;

// HOME
function increaseHomeScorebyOne() {
  homeScore++;
  homeTeamScore.textContent = homeScore;
}
function increaseHomeScorebyTwo() {
  homeScore += 2;
  homeTeamScore.textContent = homeScore;
}
function increaseHomeScorebyThree() {
  homeScore += 3;
  homeTeamScore.textContent = homeScore;
}

// AWAY

function increaseAwayScorebyOne() {
  awayScore++;
  awayTeamScore.textContent = awayScore;
}

function increaseAwayScorebyTwo() {
  awayScore += 2;
  awayTeamScore.textContent = awayScore;
}
function increaseAwayScorebyThree() {
  awayScore += 3;
  awayTeamScore.textContent = awayScore;
}

function resetScore() {
  awayScore = 0;
  homeScore = 0;
  awayTeamScore.textContent = awayScore;
  homeTeamScore.textContent = homeScore;
}
