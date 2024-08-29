import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function DayList() {
  const days = useFetch("http://localhost:3001/days");
  const [dayList, setDayList] = useState(days);

  // 느린 인터넷 환경 테스트하기(로딩화면 구현)
  // useFetch 에서 url 의 초기값이 빈 배열이기 때문에
  // lenggh === 0 일 경우 로딩화면을 만듦
  if (days.length === 0) {
    return <span>Loading...</span>;
  }

  function deleteDay(id) {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(`http://localhost:3001/days/${id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setDayList(days.filter((day) => day.id !== id));
        }
      });
    }
  }

  return (
    <>
      <ul className="list_day">
        {days.map((day) => (
          <div>
            <li key={day.id}>
              <Link to={`/day/${day.day}`}>Day {day.day}</Link>
            </li>
            <button onClick={() => deleteDay(day.id)} className="btn_del">
              Day {day.day} 삭제
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}
