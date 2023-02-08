import { useContext } from "react";
import { RPSContext } from "../context/RPSContext";

function createDivs() {
  const winStyle =
    "w-20 py-2 rounded-3xl shadow-lg text-center bg-green-400 shadow-green-400/60";
  const loseStyle =
    "w-20 py-2 rounded-3xl shadow-lg text-center bg-red-400 shadow-red-400/60";
  const tieStyle =
    "w-20 py-2 rounded-3xl shadow-lg text-center bg-yellow-300 shadow-yellow-300/60";
  const normalStyle = "w-20 py-2 rounded-3xl shadow-lg text-center";
  const hiddenStyle =
    "w-20 h-[40px] bg-transparent shadow-none text-transparent";
  const {
    playerChoice,
    computerChoice,
    getResult,
    endGame,
    playerScore,
    computerScore,
    setPlayerChoice,
    setComputerChoice,
  } = useContext(RPSContext);
  const game = endGame(playerScore, computerScore);

  if (game) {
    setTimeout(() => {
      setPlayerChoice("hidden");
      setComputerChoice("hidden");
    }, 2000);
  }

  const result = getResult(playerChoice, computerChoice);
  let choices = [playerChoice, computerChoice];
  let divs = [];

  for (let i = 0; i < choices.length; i++) {
    divs.push(
      <div
        key={i}
        className={`
        ${
          i === 0
            ? result === "player"
              ? winStyle
              : result === "none"
              ? normalStyle
              : loseStyle
            : ""
        } 
        ${
          i === 1
            ? result === "computer"
              ? winStyle
              : result === "none"
              ? normalStyle
              : loseStyle
            : ""
        } 
        ${result === "tie" ? tieStyle : ""}
        ${result === "hidden" ? hiddenStyle : ""}
        `}
      >
        {`${choices[i]}`}
      </div>
    );
  }
  return divs;
}

export function SelectionBox() {
  return <div className="flex justify-between">{createDivs()}</div>;
}
