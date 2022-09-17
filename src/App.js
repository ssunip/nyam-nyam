import "./App.css";
import MealDate from "./pages/components/MealDate";

function App() {
  return (
    <div className="App">
      <MealDate></MealDate>
      <ul className="mealList">
        <li className="meal"></li>
        <li className="meal"></li>
        <li className="meal"></li>
      </ul>
      <button className="add"></button>
    </div>
  );
}

export default App;
