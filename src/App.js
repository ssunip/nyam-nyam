import "./App.css";
import MealDate from "./pages/components/MealDate";
import MealList from "./pages/components/MealList";
import Footer from "./pages/components/Footer";

function App() {
  return (
    <div className="App">
      <MealDate></MealDate>
      <ul className="mealList">
        <MealList className="meal"></MealList>
        <MealList className="meal"></MealList>
        <MealList className="meal"></MealList>
      </ul>
      <Footer />
    </div>
  );
}

export default App;
