import { useBonus } from "../Contexts/GameBonusContext";
import { useGame } from "../Contexts/GameContext";

function Decision() {
  const { winner, dispatch } = useGame();
  const { dispatch: bonusDispatch, winner: bonusWinner } = useBonus();

  function playAgain() {
    if (location.pathname === "/bonus") {
      bonusDispatch({ type: "playAgain" });
    } else {
      dispatch({ type: "playAgain" });
    }
  }

  let player, computer, draw;

  if (location.pathname === "/bonus") {
    player = bonusWinner === "player";
    computer = bonusWinner === "computer";
    draw = bonusWinner === "draw";
  } else {
    player = winner === "player";
    computer = winner === "computer";
    draw = winner === "draw";
  }

  return (
    <div className="flex flex-col items-center max:row-start-2  max:col-span-full">
      <h3 className="text-white text-[5.6rem] font-bold drop-shadow-text-sh uppercase">
        {player && "you win"}
        {computer && "you lose"}
        {draw && "it's a tie"}
      </h3>
      <button
        className={`text-[1.6rem] font-semibold tracking-[0.25rem] uppercase py-6 px-24 bg-score rounded-[0.8rem] mt-5 ${
          player && "text-grey"
        } ${computer && "text-secondary"} ${draw && "text-grey"}`}
        onClick={playAgain}
      >
        Play again
      </button>
    </div>
  );
}

export default Decision;
