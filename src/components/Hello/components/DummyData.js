import { useParams } from "react-router-dom";
import dummy from "../../../db/data.json";
import Word from "./Word";

export default function DummyData() {
  // url 을 포함된 값을 얻을 때는 useParams 훅을 사용한다.
  // const a = useParams();
  // console.log(a); // {day: '1'} 이런식으로 들어옴

  // 현재 URL의 :day 부분의 값을 가져옴
  const day = useParams().day;

  // useParams 로 가져온 day 는 기본적으로 문자열이기 때문에 숫자로 변환하여 word.day 와 비교할 수 있게 만듦
  const wordList = dummy.words.filter((word) => word.day === Number(day));

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
