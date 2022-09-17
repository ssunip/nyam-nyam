import "./MealDate.css";

const MealDate = () => {
  const date = new Date();
  const today = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    day: date.getDay(),
  };
  const weekday = new Array(7);
  weekday[0] = "일";
  weekday[1] = "월";
  weekday[2] = "화";
  weekday[3] = "수";
  weekday[4] = "목";
  weekday[5] = "금";
  weekday[6] = "토";

  return (
    <div className="MealDate">
      <div className="today">{`${today.year}년 ${today.month}월 ${
        today.date
      }일 (${weekday[today.day]})`}</div>
    </div>
  );
};

export default MealDate;
