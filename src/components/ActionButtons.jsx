import { RPSContext } from "../context/RPSContext.jsx";
import { useContext } from "react";

function generateComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function createPlayAgainBtn() {
  const { setPlayerChoice, setComputerChoice, setPlayerScore, setComputerScore } = useContext(RPSContext);
  return (
    <button
      className="shadow-lg px-8 py-2 rounded-3xl hover:bg-blue-300 hover:-translate-y-1 hover:shadow-blue-400/60 transition-transform active:translate-y-[0.5]"
      onClick={() => {
        setPlayerScore(0);
        setComputerScore(0);
        setPlayerChoice("choice");
        setComputerChoice("choice");
      }}
    >
      Play Again
    </button>
  );
}

function createBtns() {
  let buttons = [];
  const choices = ["rock", "paper", "scissors"];
  const choicesEmojis = ["✊", "✋", "✌️"];
  const {
    setPlayerChoice,
    setComputerChoice,
    setPlayerScore,
    setComputerScore,
    getResult,
  } = useContext(RPSContext);

  for (let i = 0; i < choices.length; i++) {
    buttons.push(
      <button
        key={i}
        className="shadow-lg px-6 py-2 rounded-3xl hover:bg-blue-300 hover:-translate-y-1 hover:shadow-blue-400/60 transition-transform active:translate-y-[0.5]"
        onClick={() => {
          const computerChoice = generateComputerChoice();
          const playerChoice = choices[i];
          const result = getResult(playerChoice, computerChoice);

          setComputerChoice(computerChoice);
          setPlayerChoice(playerChoice);

          if (result === "player") {
            setPlayerScore((prevScore) => prevScore + 1);
          } else if (result === "computer") {
            setComputerScore((prevScore) => prevScore + 1);
          }
        }}
      >
        {choicesEmojis[i]}
      </button>
    );
  }
  return buttons;
}

export function ActionButtons() {
  const { endGame, playerScore, computerScore } = useContext(RPSContext);
  const game = endGame(playerScore, computerScore);
  const btnsStyle = "flex justify-between";
  const playAgainBtnStyle = "flex justify-center";
  return <div className={`${game ? playAgainBtnStyle : btnsStyle}`}>{game ? createPlayAgainBtn() : createBtns()}</div>;
}
