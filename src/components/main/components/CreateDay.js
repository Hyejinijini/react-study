import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

export default function CreateDay() {
  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();

  function addDay() {
    fetch(`http://localhost:3001/days`, {
      // create: 새로운 단어를 생성
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      // 필요한 데이터들을 보내줌
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료 되었습니다.");
        navigate("/");
      }
    });
  }

  return (
    <div>
      <h3>현재 일수: {days.length} </h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}
