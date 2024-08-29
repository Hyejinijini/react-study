import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    // isLoading 이 false 일 때, 조건문 실행(중복 방지)
    if (!isLoading) {
      // 조건문이 실행되면 로딩상태를 true 로 전환
      setIsLoading(true);
      fetch(`http://localhost:3001/words`, {
        // create: 새로운 단어를 생성
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        // 필요한 데이터들을 보내줌
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("생성이 완료 되었습니다.");
          // 생성이 완료된 페이지로 이동
          navigate(`/day/${dayRef.current.value}`);
          // 모든 작업이 완료되면 로딩 상태를 다시 false 로 전환
          setIsLoading(false);
        }
      });
    }
  }

  // useRef: dom 에 접근할 수 있게 해준다.
  // 스크롤 위치를 확인하거나, 포커스를 주거나 할 때 사용 가능
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        {/* 이런식으로 연결해주면 dom 요소가 생성된 후, 접근할 수 있게 된다. */}
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id}>{day.day}</option>
          ))}
        </select>
      </div>
      <button>{isLoading ? "Saving..." : "저장"}</button>
    </form>
  );
}
