import { useGame } from "../Contexts/GameContext";
import ChooseBoxes from "../components/ChooseBoxes";
import Footer from "../components/Footer";
import GameBox from "../components/GameBox";
import Header from "../components/Header";
import RulesBox from "../components/RulesBox";

function Homepage() {
  const { played, isRuleOpened } = useGame();

  return (
    <section className="flex flex-col items-center min-h-screen py-20 max:py-12 max:px-12 mid:px-6">
      <Header />
      {played === "start" && <GameBox />}
      {played === "play" && <ChooseBoxes />}
      <Footer />
      {isRuleOpened && <RulesBox />}
    </section>
  );
}

export default Homepage;
