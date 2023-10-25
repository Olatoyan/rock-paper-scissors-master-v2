import { useGame } from "../Contexts/GameContext";
import Paper from "/icon-paper.svg";
import Scissors from "/icon-scissors.svg";
import Rock from "/icon-rock.svg";

function GameBox() {
  const { dispatch } = useGame();

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
    <section className="bg-triangle bg-no-repeat bg-center min-h-[43rem] relative mt-28 max-w-[70rem] w-full">
      <div
        className="absolute left-[9rem] h-[24.8rem] w-[25.2rem] cursor-pointer max:w-[13rem] max:h-[13rem] max:left-64 max:top-12 sma:top-6 sma:-left-8"
        onClick={() => handlePlay(Paper)}
      >
        <img src={Paper} alt="paper" />
        <div className="h-full w-full hover:bg-hover-bg absolute top-[-2.5rem] left-[-2.5rem] sma:hidden"></div>
      </div>
      <div
        className="absolute right-[9rem] h-[24.8rem] w-[25.2rem] cursor-pointer max:w-[13rem] max:h-[13rem] max:right-64 max:top-12  sma:top-6 sma:-right-8 "
        onClick={() => handlePlay(Scissors)}
      >
        <img src={Scissors} alt="scissors" />
        <div className="h-full w-full hover:bg-hover-bg  absolute  top-[-2.5rem] left-[-2.5rem] sma:hidden"></div>
      </div>
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-[24.8rem] w-[25.2rem] cursor-pointer max:w-[13rem] max:h-[13rem] max:bottom-12   sma:bottom-0 sma:left-1/2"
        onClick={() => handlePlay(Rock)}
      >
        <img src={Rock} alt="rock" />
        <div className="h-full w-full hover:bg-hover-bg absolute  top-[-2.5rem] left-[-2.5rem] sma:hidden"></div>
      </div>
    </section>
  );
}

export default GameBox;
