import { useGame } from "../Contexts/GameContext";

function Rules() {
  const { dispatch } = useGame();

  function handleRuleOpen() {
    dispatch({ type: "setIsRuleOpened", payload: true });
  }

  return (
    <button
      className="border border-solid border-white rounded-[0.8rem] text-white text-[1.6rem] font-semibold tracking-[0.25rem] uppercase py-5 px-14 mt-auto self-end mr-20 hover:bg-score hover:text-grey transition-all duration-300 max:self-center max:mt-20 max:mr-0"
      onClick={handleRuleOpen}
    >
      Rules
    </button>
  );
}

export default Rules;
