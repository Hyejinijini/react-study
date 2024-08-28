import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function UseEFfect() {
  const [days, setDays] = useState([]);
  const [count, setCount] = useState(0);

  function onClick() {
    setCount(count + 1);
  }

  function onClick2() {
    setDays([
      ...days,
      {
        id: Math.random(),
        day: 1,
      },
    ]);
  }

  // 첫 번째 매개변수: 함수
  // 두 번째 매개변수: 의존성 배열
  // 의존성 배열에 빈 배열 값을 전달하면 렌더링 이후 최초 한 번만 실행된다.
  // 의존성 배열에 값을 넣어주면 최초 실행 + 그 값의 상태가 변경됐을때마다 실행된다.
  // 의존성 배열이 없으면 컴포넌트가 렌더링 될 때마다 실행된다.
  useEffect(() => {
    console.log("Count change");
  }, []);

  return (
    <>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
      <button onClick={onClick}>{count}</button>
      <button onClick={onClick2}>Day Change</button>
    </>
  );
}
