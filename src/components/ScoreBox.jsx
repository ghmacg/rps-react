import { useContext } from "react";
import { RPSContext } from "../context/RPSContext";

export function ScoreBox() {
  const { playerScore, computerScore } = useContext(RPSContext);
  return (
    <div className="flex justify-between font-bold text-lg">
      <div>
        Player: {playerScore}
      </div>
      <div>
        CPU: {computerScore}
      </div>
    </div>
  );
}