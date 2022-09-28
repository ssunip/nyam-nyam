import "./MealList.css";
import { BiDotsVertical } from "react-icons/bi";

const Meal = ({ mealLists }) => {
  return (
    <div className="MealList">
      <img src={mealLists[0].img} className="photo" alt="음식사진" />
      <div className="meal-info">
        <div className="meal-type">{mealLists[0].type}</div>
        <span className="meal-time">{mealLists[0].time} </span>
        <span className="meal-amount">• {mealLists[0].amount}</span>
        <div className="meal-memo">{mealLists[0].memo}</div>
        <div className="meal-kcal">{mealLists[0].kcal}</div>
      </div>
      <BiDotsVertical className="list-add__btn" />
    </div>
  );
};

export default Meal;
