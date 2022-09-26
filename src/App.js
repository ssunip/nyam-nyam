import "./App.css";
import MealAdd from "./pages/MealAdd";
import MealMain from "./pages/MealMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MealMain />} />
          <Route path="/addmeal" element={<MealAdd />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
