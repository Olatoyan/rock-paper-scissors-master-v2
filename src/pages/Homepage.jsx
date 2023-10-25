import { useGame } from "../Contexts/GameContext";
import ChooseBoxes from "../components/ChooseBoxes";
import GameBox from "../components/GameBox";
import Header from "../components/Header";
import Rules from "../components/Rules";
import RulesBox from "../components/RulesBox";

function Homepage() {
  const { played, isRuleOpened } = useGame();

  return (
    <section className="flex flex-col items-center min-h-screen py-20 max:py-12 max:px-12">
      <Header />
      {played === "start" && <GameBox />}
      {played === "play" && <ChooseBoxes />}
      <Rules />
      {isRuleOpened && <RulesBox />}
    </section>
  );
}

export default Homepage;
