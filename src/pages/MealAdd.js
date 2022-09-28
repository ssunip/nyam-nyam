import React from "react";
import { IoClose } from "react-icons/io5";
import "./MealAdd.css";

function MealAdd() {
  return (
    <div className="MealAdd">
      <IoClose className="close-btn" />
      <div className="form__add">
        <img
          src="https://user-images.githubusercontent.com/104997140/191558855-755e602a-201a-4ae1-bf44-dd382ae87ccc.png"
          className="photo__add"
          alt="음식사진"
        />
        <div className="meal__add">
          <div className="meal-type__add insert">
            <span>분류</span>
            <div className="meal-tag">
              <span>아침</span>
              <span>점심</span>
              <span>저녁</span>
              <span>간식</span>
            </div>
          </div>
          <div className="meal-time__add insert">
            <span>식사량</span>
            <div className="meal-tag">
              <span>가볍게</span>
              <span>적당히</span>
              <span>부르게</span>
              <span>과하게</span>
            </div>
          </div>
          <div className="meal-amount__add insert">
            <span>시간</span>
            <div>11:30</div>
          </div>
          <div className="meal-memo__add insert">
            <span>메모</span>
            <input
              className="meal-input"
              placeholder="간단한 메모를 남겨주세요 (선택)"
            />
          </div>
          <div className="meal-kcal__add insert">
            <span>칼로리</span>
            <input
              className="meal-input"
              placeholder="칼로리를 적어주세요 (선택)"
            />
          </div>
        </div>
        <button className="save-btn__add">저장하기</button>
      </div>
    </div>
  );
}

export default MealAdd;
