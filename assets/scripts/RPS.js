function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    return "Error";
  } /* Making the input lower case if it is acceptable, otherwise throw an error. */
}

function getComputerChoice() {
  const number = Math.floor(
    Math.random() * 3
  ); /* random float between 0-1, times 3 and rounded gives a random whoe number of 0,1 or 2.*/
  if (number === 0) {
    return "rock";
  } else if (number === 1) {
    return "paper";
  } else {
    return "scissors";
  } /* Create a random number and use it to pick rock, paper or scissors. */
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    /* Check for a tie. */
    return "Tie.";
  } else if (userChoice === "rock") {
    /* Check if the computer beats the users choice. */
    if (computerChoice === "paper") {
      return "Computer won.";
    } else {
      /* If the player did make this choice and the computer didn't just win, the player must have won. */
      return "Player won.";
    }
  } else if (userChoice === "paper") {
    /* Check if the computer beats the users choice again. */
    if (computerChoice === "scissors") {
      return "Computer won.";
    } else {
      /* If the player did make this choice and the computer didn't just win, the player must have won. */
      return "Player won.";
    }
  } else if (userChoice === "scissers") {
    /* Check if the computer beats the user for a final time. */
    if (computerChoice === "rock") {
      return "Computer won.";
    } else {
      /* If the player did make this choice and the computer didn't just win, the player must have won. */
      return "Player won.";
    }
  } else {
    return "what...";
  } /* If no one was won then things went very wrong some how... */
}

function playRPS(input) {
  const userInput =
    getUserChoice(input); /* Clean userChoice from the HTML file. */
  if (userInput === "Error") {
    alert(input + " is not a valid input."); /* If input is erroneous, break. */
  } else {
    const computerChoice =
      getComputerChoice(); /* Get a random computer choice. */
    const winner = determineWinner(
      userInput,
      computerChoice
    ); /* Check who won and set that to a variable. */
    alert(
      "The computer chose: " +
        computerChoice +
        "\nYou chose: " +
        userInput +
        "\n" +
        winner
    ); /* create a pop up in the window with who won.*/
  }
}
