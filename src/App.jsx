import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BonusProvider } from "./Contexts/GameBonusContext";
import { GameProvider } from "./Contexts/GameContext";
import BonusPage from "./pages/BonusPage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <main className=" mx-auto overflow-x-hidden">
      <GameProvider>
        <BonusProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/bonus" element={<BonusPage />} />
            </Routes>
          </BrowserRouter>
        </BonusProvider>
      </GameProvider>
    </main>
  );
}

export default App;
