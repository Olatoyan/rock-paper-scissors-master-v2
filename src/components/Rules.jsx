import { useBonus } from "../Contexts/GameBonusContext";
import { useGame } from "../Contexts/GameContext";

function Rules() {
  const { dispatch } = useGame();
  const { dispatch: bonusDispatch } = useBonus();

  function handleRuleOpen() {
    if (location.pathname === "/bonus") {
      bonusDispatch({ type: "setIsRuleOpened", payload: true });
    } else {
      dispatch({ type: "setIsRuleOpened", payload: true });
    }
  }

  return (
    <button
      className="border border-solid border-white rounded-[0.8rem] text-white text-[1.6rem] font-semibold tracking-[0.25rem] uppercase py-5 px-14 mt-auto self-end  hover:bg-score hover:text-grey transition-all duration-300 max:self-center max:mt-20 "
      onClick={handleRuleOpen}
    >
      Rules
    </button>
  );
}

export default Rules;
