function ChooseBox({ heading, type, isWinner }) {
  return (
    <div className="flex flex-col gap-24 items-center ">
      <h2 className="text-[2.4rem] text-white font-bold tracking-[0.3rem] drop-shadow-text-sh leading-[3.2rem] uppercase max:order-1 max:text-[1.5rem] max:tracking-[0.1875rem]">
        {heading}
      </h2>
      <div className="relative min-h-[23rem] min-w-[23rem] max:min-w-[13rem] max:min-h-[13rem]">
        <img src={type} alt={type} className="z-10 relative" />
        <div className="min-h-[20rem] min-w-[20rem] rounded-full bg-game-bg absolute top-0 max:min-w-[11rem] max:min-h-[11rem]"></div>
        {isWinner && (
          <div className="min-h-[24.4rem] min-w-[24.4rem] rounded-full bg-white  bg-opacity-5 absolute top-[-10%] left-[-9%] max:min-w-[16.4rem] max:min-h-[16.4rem] max:top-[-14%] max:left-[-12%]"></div>
        )}

        {isWinner && (
          <div className="min-h-[30.4rem] min-w-[30.4rem] rounded-full bg-white  bg-opacity-5 absolute top-[-23%] left-[-22%] max:top-[-28%] max:left-[-28%] max:min-h-[20.4rem] max:min-w-[20.4rem]"></div>
        )}

        {isWinner && (
          <div className="min-h-[36.4rem] min-w-[36.4rem] rounded-full bg-white  bg-opacity-5 absolute top-[-36%] left-[-38%] max:min-h-[24.4rem] max:min-w-[24.4rem] max:top-[-43%] max:left-[-45%]"></div>
        )}
      </div>
    </div>
  );
}

export default ChooseBox;
