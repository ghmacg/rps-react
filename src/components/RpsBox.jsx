import { ActionButtons } from "./ActionButtons";
import { ResultBox } from "./ResultBox";
import { SelectionBox } from "./SelectionBox";
import { ScoreBox } from "./ScoreBox";

export function RpsBox() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center pb-5">Rock-Paper-Scissors</h1>
      <div className="bg-white w-80 h-80 rounded-3xl shadow-2xl flex flex-col justify-evenly p-7">
        <ActionButtons />
        <ResultBox />
        <SelectionBox />
        <ScoreBox />
      </div>
    </div>
  );
}
