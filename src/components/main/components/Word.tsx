import React from "react";

import { useState } from "react";

interface Ipros {
  word: Iword;
}

// export 해주면 다른 파일에서도 해당 interface 사용 가능
export interface Iword {
  day: string;
  eng: string;
  kor: string;
  isDone: boolean;
  id: number;
}

export default function Word({ word: w }: Ipros) {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    // setIsDone(!isDone);
    fetch(`http://localhost:3001/words/${word.id}`, {
      // 요청의 옵션들
      method: "PUT",
      headers: {
        // 컨텐트 타이은 보내는 리소스의 타입을 의미한다.
        // json 형태로 보낼 것이기 때문에 json 이라고 입력
        "Content-Type": "application/json",
      },
      // 단순히 데이터를 가져오는 GET 과는 다르게 PUT 은 수정을 위한 정보들을 body 에 실어서 보내줘야 함
      // JSON 문자열로 변환하기 위해서 JSON.stringify 로 감싸줌
      body: JSON.stringify({
        // 기존 word 데이터에
        ...word,
        // isDint 만 바꿔서 입력
        isDone: !isDone,
      }),
      // 응답을 받아서
    }).then((res) => {
      // 응답이 ok 라면
      if (res.ok) {
        // isDone 의 상태를 바꿈
        setIsDone(!isDone);
      }
    });
  }

  function del() {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
        // confirm 창에서 확인을 누르고
      }).then((res) => {
        // ok 로 응답하면
        if (res.ok) {
          // 해당 word 데이터의 id 를 0으로 변경
          // 코드에서 id 가 0으로 설정된 경우, 삭제된 것으로 간주하기 때문
          setWord({ ...word, id: 0 });
        }
      });
    }
  }

  // id 가 0 인 경우에 대해서 조건문 생성
  if (word.id === 0) {
    // setWord 가 변경되면 해당 컴포넌트 자체가 렌더링 되는데, 이때 null 을 return 하도록 하면 아무것도 화면에 그려지지 않는다.
    // 즉, id 가 0인 경우는 화면에 안보이게 하겠다는 것.
    return null;
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
        <button onClick={del} className="btn_del">
          삭제
        </button>
      </td>
    </tr>
  );
}

// Create - POST
// Read - GET
// Update - PUT
// Delete - DELETE
