import React from "react";
import { useState } from "react";
import MealDate from "./components/MealDate";
import MealList from "./components/MealList";
import Footer from "./components/Footer";

function MealMain() {
  const [addModal, setAddModal] = useState(false);
  const [mealLists, setMealLists] = useState([
    {
      id: 1,
      img: "https://user-images.githubusercontent.com/104997140/191558855-755e602a-201a-4ae1-bf44-dd382ae87ccc.png",
      type: "아침",
      time: "오전 10시 30분",
      amount: "적당히",
      memo: "크로플",
      kcal: "20kcal",
    },
    ,
  ]);

  const onAddModal = () => {
    if (!addModal) {
      setAddModal((prev) => !prev);
    }
  };

  return (
    <div>
      <MealDate></MealDate>
      <ul className="mealList">
        <MealList className="meal" mealLists={mealLists}></MealList>
      </ul>
      <Footer onAddModal={onAddModal} />
    </div>
  );
}

export default MealMain;
