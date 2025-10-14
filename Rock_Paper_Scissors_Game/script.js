const choices = document.querySelectorAll(".pickone");
const mess = document.querySelector("#mess");

let userScore = 0;
let compScore = 0;

const userScoreEl = document.querySelector("#userscore");
const compScoreEl = document.querySelector("#compscore");

const getCompChoice = () => {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * 3)];
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const playGame = (userChoice) => {
  const compChoice = getCompChoice();

  // 🟡 Draw Case
  if (userChoice === compChoice) {
    mess.innerText = `Draw! You both chose ${userChoice}`;
    mess.style.backgroundColor = "black";
    mess.style.borderRadius = "1rem";
    return;
  }

  // 🟢 Win Condition
  const userWins =
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper");

  if (userWins) {
    mess.innerText = `You Won! Your ${userChoice} beats Comp ${compChoice}`;
    userScore++;
    userScoreEl.innerText = userScore;
    mess.style.backgroundColor = "green";
    mess.style.borderRadius = "1rem";
  } else {
    mess.innerText = `You Lost! Comp ${compChoice} beats Your ${userChoice}`;
    compScore++;
    compScoreEl.innerText = compScore;
    mess.style.backgroundColor = "red";
    mess.style.borderRadius = "1rem";
  }
};
