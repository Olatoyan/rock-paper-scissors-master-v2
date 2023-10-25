import { useEffect } from "react";
import { useGame } from "../Contexts/GameContext";
import ChooseBox from "./ChooseBox";
import Decision from "./Decision";
import Paper from "/icon-paper.svg";
import Rock from "/icon-rock.svg";
import Scissors from "/icon-scissors.svg";

function ChooseBoxes() {
  const { playerChoice, computerChoice, dispatch, winner } = useGame();

  const player = winner === "player";
  const computer = winner === "computer";

  useEffect(() => {
    if (playerChoice !== null && computerChoice !== null) {
      setTimeout(() => {
        let newWinner = null;

        if (playerChoice === computerChoice) {
          newWinner = "draw";
        } else if (
          (playerChoice === Rock && computerChoice === Scissors) ||
          (playerChoice === Scissors && computerChoice === Paper) ||
          (playerChoice === Paper && computerChoice === Rock)
        ) {
          newWinner = "player";
          dispatch({ type: "setScore", payload: 1 });
        } else {
          newWinner = "computer";
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
