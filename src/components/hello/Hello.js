  function showName() {
    console.log("Mike");
  }
  function showAge(age) {
    console.log(age);
  }
      <button onClick={showName}>Show name</button>
      <button onClick={() => showAge(30)}>Show age</button>
      {/* onclick 내부에 바로 함수 작성하는 방법
      <button
        onClick={() => {
          console.log(30);
        }}
      > */}
