import { useState } from "react";

export default function Word({ word }) {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    setIsDone(!isDone);
  }

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      {/* 조건부 렌더링
      특정 조건이 참일 때만 word.kor 의 값을 렌더링 하겠다는 의미이다.
      즉, isShow 가 ture 일 때만 단어 뜻이 보여짐.
      논리 연산자 AND(&&) 는 왼쪽 피연산자가 true 면, 오른쪽 피연산자의 값을 반환하고, 왼쪽 피연산자가 false 면 전체 표현식이 false 를 반환하며, 오른쪽 피연산자는 평가되지 않는다. */}
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
        <button className="btn_del">삭제</button>
      </td>
    </tr>
  );
}
