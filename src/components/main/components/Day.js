import { useParams } from "react-router-dom";
import dummy from "../../../db/data.json";

export default function Day() {
  // url 을 포함된 값을 얻을 때는 useParams 훅을 사용한다.
  // const a = useParams();
  // console.log(a); // {day: '1'} 이런식으로 들어옴

  const day = useParams().day;
  const wordList = dummy.words.filter((word) => word.day === Number(day));

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
