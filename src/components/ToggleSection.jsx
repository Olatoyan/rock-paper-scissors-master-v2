import { Link, useNavigate } from "react-router-dom";
import { useBonus } from "../Contexts/GameBonusContext";
import { useGame } from "../Contexts/GameContext";

function ToggleSection() {
  const { dispatch } = useGame();
  const { dispatch: bonusDispatch } = useBonus();
  const navigate = useNavigate();

  const bonusSec = location.pathname === "/bonus";

  function toggleSection() {
    if (bonusSec) {
      navigate("/");
      bonusDispatch({ type: "resetGame" });
    } else {
      navigate("/bonus");
      dispatch({ type: "resetGame" });
    }
  }

  return (
    <Link
      className={`border border-solid border-white rounded-[0.8rem] text-white text-[1.6rem] font-semibold tracking-[0.25rem] uppercase py-5 px-14 mt-auto self-start  hover:bg-score hover:text-grey transition-all duration-300 max:self-center max:mt-20 `}
      to={bonusSec ? "/" : "/bonus"}
      onClick={toggleSection}
    >
      {bonusSec ? "Home" : "Bonus"}
    </Link>
  );
}

export default ToggleSection;
