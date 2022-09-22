import "./App.css";
import MealDate from "./pages/components/MealDate";
import MealList from "./pages/components/MealList";

function App() {
  return (
    <div className="App">
      <MealDate></MealDate>
      <ul className="mealList">
        <MealList className="meal"></MealList>
        <MealList className="meal"></MealList>
        <MealList className="meal"></MealList>
      </ul>
      <button className="add"></button>
    </div>
  );
}

export default App;
