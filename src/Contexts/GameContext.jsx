import { useContext, useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const GameContext = createContext();

const initialState = {
  score: 0,
  playerChoice: null,
  computerChoice: null,
  played: "start",
  winner: null,
  isRuleOpened: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "setScore":
      return { ...state, score: state.score + action.payload };
    case "setType":
      return { ...state, playerChoice: action.payload };
    case "setComputerChoice":
      return { ...state, computerChoice: action.payload };
    case "setPlayed":
      return { ...state, played: action.payload };
    case "setWinner":
      return { ...state, winner: action.payload };
    case "playAgain":
      return { ...initialState, score: state.score };
    case "setIsRuleOpened":
      return { ...state, isRuleOpened: action.payload };
    default:
      throw new Error("Invalid action type");
  }
}

function GameProvider({ children }) {
  const [
    { score, playerChoice, played, computerChoice, winner, isRuleOpened },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider
      value={{
        score,
        playerChoice,
        played,
        computerChoice,
        winner,
        isRuleOpened,
        dispatch,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}

export { GameProvider, useGame };
