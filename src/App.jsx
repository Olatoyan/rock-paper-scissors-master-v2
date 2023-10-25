import { GameProvider } from "./Contexts/GameContext";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <main className=" mx-auto overflow-x-hidden">
      <GameProvider>
        <Homepage />
      </GameProvider>
    </main>
  );
}

export default App;
