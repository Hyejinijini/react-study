import { useState } from "react";
import UserName from "./UserName";

// 부모 컴포넌트인 Hello 컴포넌트에서 age 를 props 로 내려줬고, UseState 컴포넌트에서 props 를 받는다. props 으로 받은 값은 컴포넌트 내에서 변경할 수 없다.
const UseState = ({ age }) => {
  const [name, setName] = useState("Mike");
  // 값을 변경하고 싶으면 state 를 만들어줘야 한다.
  // props.age = 100; 이런식으로 직접 변경은 불가능
  // const [age, setAge] = useState(props.age);

  const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

  function changeName() {
    const newName = name === "Mike" ? "Jane" : "Mike";
    setName(newName);
  }

  return (
    <div>
      <h1>state</h1>
      <h2>
        {name}
        {age} : {msg}
      </h2>
      <UserName name={name} />
      <button onClick={changeName}>Change</button>
    </div>
  );
};

export default UseState;
