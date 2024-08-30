import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export interface IDay {
  id: number;
  day: number;
}

export default function DayList() {
  const days: IDay[] = useFetch("http://localhost:3001/days");

  // 느린 인터넷 환경 테스트하기(로딩화면 구현)
  // useFetch 에서 url 의 초기값이 빈 배열이기 때문에
  // lenggh === 0 일 경우 로딩화면을 만듦
  if (days.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <ul className="list_day">
        {days.map((day) => (
          <div>
            <li key={day.id}>
              <Link to={`/day/${day.day}`}>Day {day.day}</Link>
            </li>
            <button>삭제</button>
          </div>
        ))}
      </ul>
    </>
  );
}
