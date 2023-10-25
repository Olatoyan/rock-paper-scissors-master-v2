import { createContext, useContext, useReducer } from "react";

const BonusContext = createContext();

const initialState = {
  played: "start",
  isRuleOpened: false,
  playerChoice: null,
  computerChoice: null,
  winner: null,
  score: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "setScore":
      return { ...state, score: state.score + action.payload };
    case "setPlayerChoice":
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
      case 'resetGame': 
      return initialState
    default:
      throw new Error("Invalid action type");
  }
}

function BonusProvider({ children }) {
  const [
    { played, isRuleOpened, playerChoice, computerChoice, winner, score },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <BonusContext.Provider
      value={{
        played,
        isRuleOpened,
        playerChoice,
        computerChoice,
        winner,
        score,
        dispatch,
      }}
    >
      {children}
    </BonusContext.Provider>
  );
}

function useBonus() {
  const context = useContext(BonusContext);
  if (context === undefined) {
    throw new Error("useBonus must be used within a BonusProvider");
  }
  return context;
}

export { BonusProvider, useBonus };
