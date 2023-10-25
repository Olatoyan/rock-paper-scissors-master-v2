import { useBonus } from "../Contexts/GameBonusContext";
import BonusBoxes from "../components/BonusBoxes";
import BonusGameBox from "../components/BonusGameBox";
import BonusHeader from "../components/BonusHeader";
import Footer from "../components/Footer";
import RulesBox from "../components/RulesBox";

function BonusPage() {
  const { played, isRuleOpened } = useBonus();
  return (
    <section className="flex flex-col items-center min-h-screen py-20 max:py-12 max:px-12 sma:px-6">
      <BonusHeader />
      {played === "start" && <BonusGameBox />}
      {played === "play" && <BonusBoxes />}
      <Footer />
      {isRuleOpened && <RulesBox />}
    </section>
  );
}

export default BonusPage;
