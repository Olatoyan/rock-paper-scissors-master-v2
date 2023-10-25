import { useGame } from "../Contexts/GameContext";
import Paper from "/icon-paper.svg";
import Scissors from "/icon-scissors.svg";
import Rock from "/icon-rock.svg";
import PaperSmall from "/icon-paper-small.svg";
import RockSmall from "/icon-rock-small.svg";
import ScissorsSmall from "/icon-scissors-small.svg";

function GameBox() {
  const { dispatch } = useGame();

  function handlePlay(playerChoice, playerChoiceSmall) {
    const computerChoice = getRandomComputerChoice();
    const chosenPlayerChoice =
      window.innerWidth <= 56.25 * 16 ? playerChoiceSmall : playerChoice;
    dispatch({ type: "setType", payload: chosenPlayerChoice });
    setTimeout(() => {
      dispatch({ type: "setComputerChoice", payload: computerChoice });
    }, 1000);

    dispatch({ type: "setPlayed", payload: "play" });
  }

  function getRandomComputerChoice() {
    const choices = [Rock, Paper, Scissors];
    const smallChoices = [RockSmall, PaperSmall, ScissorsSmall];

    if (window.innerWidth <= 56.25 * 16) {
      const randomIndex = Math.floor(Math.random() * smallChoices.length);
      return smallChoices[randomIndex];
    } else {
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
  }

  return (
    <section className="bg-triangle bg-no-repeat bg-center min-h-[43rem] relative mt-28 max-w-[70rem] w-full">
      <div
        className="absolute left-[9rem] h-[24.8rem] w-[25.2rem] cursor-pointer sma:top-6 sma:left-0 sma:max-w-[14rem] sma:h-[14rem]"
        onClick={() => handlePlay(Paper, PaperSmall)}
      >
        <picture className="sma:max-w-[14rem] sma:block">
          <source
            srcSet={PaperSmall}
            media="(max-width: 56.25em)"
            alt="paper"
          />
          <img src={Paper} alt="paper" />
        </picture>
        {/* <img src={Paper} alt="paper" /> */}
        <div className="h-full w-full hover:bg-hover-bg absolute top-[-2.5rem] left-[-2.5rem] sma:hidden"></div>
      </div>
      <div
        className="absolute right-[9rem] h-[24.8rem] w-[25.2rem] cursor-pointer max:right-[-3rem] sma:top-6 sma:right-0 sma:max-w-[14rem] sma:h-[14rem]"
        onClick={() => handlePlay(Scissors, ScissorsSmall)}
      >
        <picture>
          <source
            srcSet={ScissorsSmall}
            media="(max-width: 56.25em)"
            alt="scissors"
          />
          <img src={Scissors} alt="scissors" />
        </picture>
        {/* <img src={Scissors} alt="scissors" /> */}
        <div className="h-full w-full hover:bg-hover-bg  absolute  top-[-2.5rem] left-[-2.5rem] sma:hidden"></div>
      </div>
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-[24.8rem] w-[25.2rem] cursor-pointer max:left-[58%] max:-bottom-28  sma:max-w-[14rem] sma:h-[14rem] sma:bottom-0 sma:left-1/2"
        onClick={() => handlePlay(Rock, RockSmall)}
      >
        <picture>
          <source srcSet={RockSmall} media="(max-width: 56.25em)" alt="rock" />
          <img src={Rock} alt="rock" />
        </picture>
        {/* <img src={Rock} alt="rock" /> */}
        <div className="h-full w-full hover:bg-hover-bg absolute  top-[-2.5rem] left-[-2.5rem] sma:hidden"></div>
      </div>
    </section>
  );
}

export default GameBox;
