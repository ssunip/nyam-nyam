import "./MealList.css";
import { BiDotsVertical } from "react-icons/bi";

const Meal = () => {
  return (
    <div className="meal-list">
      <img
        src="https://user-images.githubusercontent.com/104997140/191558855-755e602a-201a-4ae1-bf44-dd382ae87ccc.png"
        className="photo"
        alt="음식사진"
      />
      <div className="meal-info">
        <div className="meal-type">아침</div>
        <span className="meal-time">오전 10시 30분 </span>
        <span className="meal-amount">• 적당히</span>
        <div className="meal-memo">크로플</div>
        <div className="meal-kcal">20kcal</div>
      </div>
      <BiDotsVertical className="list-add__btn" />
    </div>
  );
};

export default Meal;
