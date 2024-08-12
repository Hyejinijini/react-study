const Events = () => {
  function showName() {
    console.log("Mike");
  }
  function showAge(age) {
    console.log(age);
  }
  // target -> input 태그를 의미
  // value -> input 의 value 즉, 작성한 값을 의미
  // 입력창에 글자를 쓸 때마다 콘솔에 찍힘
  function showText(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={showName}>Show name</button>
      <button onClick={() => showAge(30)}>Show age</button>
      {/* onclick 내부에 바로 함수 작성하는 방법
      <button
        onClick={() => {
          console.log(30);
        }}
      > */}
      <input type="text" onChange={showText}></input>
      {/* 이렇게 onChange 안에 바로 작성해도 동일하게 동작함
      <input type="text" onChange={(e) => {console.log(e.target.value)}}></input> */}
    </div>
  );
};

export default Events;
