import { useEffect } from "react";
import { useGame } from "../Contexts/GameContext";
import ChooseBox from "./ChooseBox";
import Decision from "./Decision";
import Paper from "/icon-paper.svg";
import Rock from "/icon-rock.svg";
import Scissors from "/icon-scissors.svg";
import PaperSmall from "/icon-paper-small.svg";
import RockSmall from "/icon-rock-small.svg";
import ScissorsSmall from "/icon-scissors-small.svg";

function ChooseBoxes() {
  const { playerChoice, computerChoice, dispatch, winner } = useGame();

  const player = winner === "player";
  const computer = winner === "computer";

  useEffect(() => {
    if (playerChoice !== null && computerChoice !== null) {
      setTimeout(() => {
        let newWinner = null;

        if (
          (playerChoice === Rock || playerChoice === RockSmall) &&
          (computerChoice === Scissors || computerChoice === ScissorsSmall)
        ) {
          newWinner = "player";
          dispatch({ type: "setScore", payload: 1 });
        } else if (
          (playerChoice === Scissors || playerChoice === ScissorsSmall) &&
          (computerChoice === Paper || computerChoice === PaperSmall)
        ) {
          newWinner = "player";
          dispatch({ type: "setScore", payload: 1 });
        } else if (
          (playerChoice === Paper || playerChoice === PaperSmall) &&
          (computerChoice === Rock || computerChoice === RockSmall)
        ) {
          newWinner = "player";
          dispatch({ type: "setScore", payload: 1 });
        } else if (playerChoice === computerChoice) {
          newWinner = "draw";
        } else {
          newWinner = "computer";
          dispatch({ type: "setScore", payload: -1 });
        }

        dispatch({ type: "setWinner", payload: newWinner });
      }, 1000);
    }
  }, [playerChoice, computerChoice, dispatch]);

  return (
    <div
      className={`mt-28  gap-28 justify-center items-center grid  ${
        winner ? "grid-cols-3" : "grid-cols-2"
      } max:grid-cols-2 sma:gap-12`}
    >
      <ChooseBox heading="You picked" type={playerChoice} isWinner={player} />
      {winner && <Decision />}
      <ChooseBox
        heading="The house picked"
        type={computerChoice}
        isWinner={computer}
      />
    </div>
  );
}

export default ChooseBoxes;
