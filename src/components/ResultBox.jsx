import { useContext } from "react";
import { RPSContext } from "../context/RPSContext";

function getEndText(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return "agh you win";
  } else if (playerScore < computerScore) {
    return "GAME OVER loser";
  }
}

function getGameText(result) {
  if (result === "tie") {
    return "stupid game, it's a tie";
  } else if (result === "player") {
    return "bla bla bla you win";
  } else if (result === "computer") {
    return "you lose! ha ha loser";
  } else {
    return "make your choice!";
  }
}

function createDiv() {
  const {
    playerScore,
    computerScore,
    playerChoice,
    computerChoice,
    getResult,
    endGame,
  } = useContext(RPSContext);
  const result = getResult(playerChoice, computerChoice);
  const game = endGame(playerScore, computerScore);
  const text = getGameText(result);
  const endText = getEndText(playerScore, computerScore);
  const winStyle = "w-full py-2 rounded-3xl shadow-lg text-center bg-green-400 shadow-green-400/60 font-bold";
  const loseStyle = "w-full py-2 rounded-3xl shadow-lg text-center bg-red-400 shadow-red-400/60 font-bold";
  const normalStyle = "shadow-lg rounded-3xl py-2 w-full text-center";

  return (
    <div
      className={`${
        game
          ? playerScore > computerScore
            ? winStyle
            : loseStyle
          : normalStyle
      }`}
    >
      {game ? endText : text}
    </div>
  );
}

export function ResultBox() {
  return <div className="flex justify-center items-center">{createDiv()}</div>;
}
