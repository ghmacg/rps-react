import { createContext, useState } from "react";

export const RPSContext = createContext();

export function RPSContextProvider(props) {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState("choice");
  const [computerChoice, setComputerChoice] = useState("choice");
  const [game, setGame] = useState(false);

  function getResult(playerChoice, computerChoice) {
    if (playerChoice === "choice" && computerChoice === "choice") {
      return "none";
    } else if (playerChoice === "hidden" && computerChoice === "hidden") {
      return "hidden";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      return "player";
    } else if (playerChoice === computerChoice) {
      return "tie";
    } else {
      return "computer";
    }
  }

  function endGame(playerScore, computerScore) {
    if (playerScore === 3 || computerScore === 3) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <RPSContext.Provider
      value={{
        playerScore,
        setPlayerScore,
        computerScore,
        setComputerScore,
        playerChoice,
        setPlayerChoice,
        computerChoice,
        setComputerChoice,
        getResult,
        endGame,
      }}
    >
      {props.children}
    </RPSContext.Provider>
  );
}
