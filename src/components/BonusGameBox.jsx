import Paper from "/icon-paper.svg";
import Scissors from "/icon-scissors.svg";
import Rock from "/icon-rock.svg";
import Spock from "/icon-spock.svg";
import Lizard from "/icon-lizard.svg";
import { useBonus } from "../Contexts/GameBonusContext";

function BonusGameBox() {
  const { dispatch } = useBonus();

  function handlePlay(playerChoice) {
    const computerChoice = getRandomComputerChoice();
    dispatch({ type: "setPlayerChoice", payload: playerChoice });
    setTimeout(() => {
      dispatch({ type: "setComputerChoice", payload: computerChoice });
    }, 1000);

    dispatch({ type: "setPlayed", payload: "play" });
  }

  function getRandomComputerChoice() {
    const choices = [Rock, Paper, Scissors];

    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  return (
    <section className="bg-pentagon bg-no-repeat bg-center min-h-[43rem] relative mt-28 max-w-[70rem] w-full">
      <div
        className="absolute top-[25%] right-[13rem] h-[15rem] w-[15rem] max:top-[30%] max:right-[16rem] cursor-pointer max:max-w-[9.6rem] max:h-[9.7rem] mid:right-32 sma:-right-14"
        onClick={() => handlePlay(Paper)}
      >
        <img src={Paper} alt="paper" />
      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2 h-[15rem] w-[15rem] cursor-pointer max:top-16 max:max-w-[9.6rem] max:h-[9.7rem]"
        onClick={() => handlePlay(Scissors)}
      >
        <img src={Scissors} alt="scissors" />
      </div>
      <div
        className="absolute -bottom-4 right-[23%] h-[15rem] w-[15rem] cursor-pointer max:right-[30%] max:bottom-8 max:max-w-[9.6rem] max:h-[9.7rem] mid:right-[23%] sma:right-[13%]"
        onClick={() => handlePlay(Rock)}
      >
        <img src={Rock} alt="rock" />
      </div>
      <div
        className="absolute top-[25%] left-[13rem] h-[15rem] w-[15rem] cursor-pointer max:left-[23%] max:top-[30%]  max:max-w-[9.6rem] max:h-[9.7rem] mid:left-[15%] sma:left-[-6%]"
        onClick={() => handlePlay(Spock)}
      >
        <img src={Spock} alt="spock" />
      </div>
      <div
        className="absolute -bottom-4 left-[23%]  h-[15rem] w-[15rem] cursor-pointer max:left-[30%] max:bottom-8 max:max-w-[9.6rem] max:h-[9.7rem] mid:left-[23%] sma:left-[13%]"
        onClick={() => handlePlay(Lizard)}
      >
        <img src={Lizard} alt="lizard" />
      </div>
    </section>
  );
}

export default BonusGameBox;
