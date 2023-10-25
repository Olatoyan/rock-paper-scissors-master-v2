import { useGame } from "../Contexts/GameContext";
import Close from "/icon-close.svg";
import Rules from "/image-rules.svg";

function RulesBox() {
  const { dispatch } = useGame();

  function handleRuleClose() {
    dispatch({ type: "setIsRuleOpened", payload: false });
  }

  return (
    <div className="z-20">
      <div
        className="bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full"
        onClick={handleRuleClose}
      ></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[41.5rem] bg-white rounded-[0.8rem] flex flex-col items-center justify-between p-[3.2rem]">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-[3.2rem] text-grey font-bold leading-[3.2rem]  uppercase">
            Rules
          </h2>
          <img
            src={Close}
            alt="close"
            onClick={handleRuleClose}
            className="cursor-pointer"
          />
        </div>
        <img src={Rules} alt="rules" />
      </div>
    </div>
  );
}

export default RulesBox;
