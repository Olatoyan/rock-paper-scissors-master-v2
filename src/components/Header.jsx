import { useGame } from "../Contexts/GameContext";

function Header() {
  const { score } = useGame();

  return (
    <header className="flex items-center py-8 px-10 justify-between border-[3px] border-border-color rounded-3xl max-w-[70rem] w-full">
      <div>
        <h1 className="">
          <span className="text-white drop-shadow-text-sh text-[4rem] uppercase block leading-[3.5rem] font-bold max:text-[2.5rem] max:leading-[2.2rem]">
            Rock
          </span>
          <span className="text-white drop-shadow-text-sh text-[4rem] uppercase block leading-[3.5rem] font-bold max:text-[2.5rem] max:leading-[2.2rem]">
            Paper
          </span>
          <span className="text-white drop-shadow-text-sh text-[4rem] uppercase leading-[3.5rem] font-bold max:text-[2.5rem] max:leading-[2.2rem]">
            Scissors
          </span>
        </h1>
      </div>
      <div className="bg-score py-6 px-20 rounded-[0.8rem] shadow-box-sh flex flex-col items-center max:py-4 max:px-10">
        <p className="text-blue uppercase text-[1.6rem] font-semibold tracking-[0.25rem] max:text-[1.4rem]">
          Score
        </p>
        <h2 className="text-[6.4rem] leading-[6.4rem] font-bold text-grey max:text-[4rem]">
          {score}
        </h2>
      </div>
    </header>
  );
}

export default Header;
