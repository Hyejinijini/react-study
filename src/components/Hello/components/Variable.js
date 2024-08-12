const Variable = () => {
  let name = "Mike";

  function changeName() {
    name = name === "Mike" ? "Jane" : "Mike";
    console.log(name);
    // 바닐라 자바스크립트로 dom 을 업데이트 하는 방법
    document.getElementById("name").innerText = name;
  }

  return (
    <div>
      <h1>state</h1>
      <h2 id="name">{name}</h2>
      <button onClick={changeName}>Change</button>
    </div>
  );
};

export default Variable;
