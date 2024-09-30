# react-study

React 공부 기록용 입니다.
[강의](https://www.youtube.com/playlist?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-)
<br>
<br>

## 설치

### React 프로젝트 생성

- 적당한 폴더 만들고 터미널에 **`npx create-react-app 프로젝트명`** 입력해주기
  <img src="https://github.com/user-attachments/assets/2c0f155e-4238-4861-96f4-4f054d41aedb" alt="react 설치코드" width="500" height="35">

- 다 설치되면 VSCode 들어가서 터미널에 **`npm start`** 입력하기 -> 그러면 React 화면이 자동으로 실행된다.
  <img src="https://github.com/user-attachments/assets/c82e6520-9b7d-4f67-bebb-89dd51d64785" alt="React 실행화면" width="500" height="450">
  <br>
  <br>

## 폴더

### node_modules

- 이 폴더에는 이 프로젝트를 실행할 때 사용되는 의존성 모듈들이 모두 포함되어 있다.
- 이 폴더가 없으면 프로젝트를 실행시킬 수 없다.
- 이 폴더가 삭제되더라도 **`npm install`** 명령어로 동일한 파일들을 재설치할 수 있다. (package.json 파일이 수정되지 않았다는 가정하에)
- **git 에는 올라가지 않는다.**
  - 파일이 많아서 크기가 크기 때문에
  - 그리고 언제든지 재설치 가능하기 때문에
    <br>

### package.json

- node_modules 폴더에 설치되어 있는 것들이 기록되어 있다.
- 이 파일을 보고 다른 개발자가 이 프로젝트와 동일한 환경을 구축할 수 있다.
  <br>
  <br>

## 컴포넌트

React 로 만든 페이지는 컴포넌트로 구성되어 있고, **함수형 컴포넌트**이다.<br>
각 부분을 컴포넌트로 만들어서 조립해서 사용한다는 개념이다.
<br>
이렇게 조립해서 사용하면 비슷한 부분들은 다른 페이지에서 코드를 재사용할 수 있고 유지보수도 쉬워진다.<br>
**++)** **모든 컴포넌트는 대문자로 시작**한다.

### 컴포넌트 생성

- JSX 는 하나의 태그만 만들 수 있다.

  - 그래서 **`return`** 할 때, **`div`** 로 감싸주는 것이 일반적이다. → 빈 태그로 감싸줘도 무관
- 만들어둔 컴포넌트는 어디에서든 재사용이 가능하다.

  ```
  import World from "./World.js";

  const Hello = () => {
    return (
      <div>
        <p>Hello</p>
        <World />;
      </div>
    );
  };

  export default Hello;
  ```
  <br>
  
## JSX(JavaScript XML)

1. HTML 과 유사하다
2. class 는 className 으로 작성한다.
3. 인라인스타일은 **`style={{color: "red", backgroundColor: "pink", ...}}`** 객체 형태로 전달한다.
   - 값은 문자열로 작성해줘야 한다.
   - 대시(-)가 필요했던 속성들은 **camelCase** 로 작성한다.
4. JSX 에서 변수를 사용하기 위해서는 **중괄호안에 변수명을 작성**해주면 된다.

   ```
   function App() {
     const name = "Mike";

     return (
      <div className="App">
        Hello, {name}. // Hello, Mike.
      </div>
    );
   }
   ```

5. 숫자나 문자열은 바로 값을 넣어주는 것도 가능하다.
   - {2 + 3} // 5
6. boolean 이나 객체타입은 바로 값을 넣어주면 안되고, 속성에 접근해서 사용해야 한다.

   ```
   function App() {
      const user = {
        name: "Mike",
        age: "20",
      };

      return (
        <div className="App">
          Hello, my name is {user.name}. I'm {user.age} years old. // Hello, my name is Mike. I'm 20 years old.
        </div>
      );
    }
   ```

   <br>

## CSS 작성법

### inline style
css 파일을 따로 만들 필요 없이 **html 태그에 바로 적어주는 방법**
```
import World from "./World.js";

const Hello = () => {
  return (
    <div>
      <h1
        style={{
          color: "#f00",
          borderRight: "2px solid #000",
          marginBottom: "50px",
          opacity: 0.5,
        }}
      >
        Hello
      </h1>
      <World />
      <World />
    </div>
  );
};

export default Hello;
```
- 객체 형태로 작성한다.
- 대시기호X -> **camelCase** 로 작성한다.
  - 예) `background-color: pink;` -> `backgroundColor: "pink"`;
- 속성값이 문자열이면 따옴표로 감싸줘야 한다.
<br />

### CSS 파일
별도의 **CSS 파일을** 만들어서 스타일을 정의하는 방법
```
/* index.css */
/* body 스타일 */
body {
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
  color: #333;
}

/* div 스타일 */
div {
  background-color: #fff;
  padding: 20px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 20px;
}
```
- **CSS 파일은 해당 컴포넌트에 종속되지 않는다.**
- 동일한 class 명을 사용하면, css 파일의 이름이 다르더라도 head 안에 다같이 작성되기 때문에 전체 페이지에 영향을 미친다.
  - 이게 무슨말이냐면, 예를 들어 App.css 파일과 Hello.css 파일에 box 라는 동일한 클래스명을 가진 div 를 하나 만들었다고 가정하자.
  - App.css 에서는 .box 의 배경색을 red 로 설정하고, Hello.css 에서는 .box 의 배경색을 blue 로 설정했다.
  - 그럼에도 **똑같은 스타일의 div 가 화면에 렌더링** 된다. -> **나중에 로드된 css 로 덮여쓰여지기 때문이**다.
<br />

### CSS module
각 컴포넌트에 종속되는 css 를 작성하는 방법
```
/* App.module.css */
.box {
  background-color: red;
}

/* Hello.module.css */
.box {
  background-color: blue;
}
```
- 파일명을 `xxx.module.css` 로 작성하면 된다.
- **사용 예시**
  ```
  import styles from './App.module.css';

  function App() {
    return <div className={styles.box}>App Box</div>;
  }
  ```
<br />

## 이벤트 처리

### Button
1. 함수 생성 후, onClick 에 적용하기
   ```
   export default function Hello() {
     function showName() {
       console.log("Mike");
     }

    return (
       <div>
         <h1>Hello</h1>
         <button onClick={showName}>Show name</button>
         <button>Show age</button>
       </div>
      );
    }
    ```
2. onClick 속성에 바로 함수 입력
   ```
   export default function Hello() {
     function showName() {
       console.log("Mike");
     }

   return (
      <div>
        <h1>Hello</h1>
        <button onClick={showName}>Show name</button>
        <button
          onClick={() => {
            console.log(30);
          }}
        >
          Show age
        </button>
      </div>
    );
   } 
   ```

### Input
1. 함수 생성 후, onClick 에 적용하기
   ```
   export default function Hello() {
     // target -> input 태그를 의미
     // value -> input 의 value 즉, 작성한 값을 의미
     // 입력창에 글자를 쓸 때마다 콘솔에 찍힘
     function showText(e) {
       console.log(e.target.value);
     }
  
     return (
       <div>
         <h1>Hello</h1>
         <input type="text" onChange={showText}></input>
       </div>
     );
   }
   ```
2. onChange 속성에 바로 함수 입략
   ```
   export default function Hello() {
      return (
        <div>
          <h1>Hello</h1>
          <input type="text" onChange={(e) => {console.log(e.target.value)}}></input> */}
        </div>
      );
   }
   ```
<br />

## state & useState

### state
**state** 는 **컴포넌트가 가지고 있는 속성값**이다.
이 **속성값이 변하면 react 는 자동으로 UI 를 업데이트** 한다.
- 바닐라 자바스크립트
  ```
  export default function Hello() {
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
  }
  ```
  - 변수 name 은 state 가 아니고 단순 변수이다.
    - 즉, 이 컴포넌트가 관리하고 있는 state 상태값이 아니라는 것이다.
    - 그래서 name 의 값이 바뀌어도 react 는 인지하지 못하고 UI 를 업데이트 해주지 않는다.
   
### useState
react hooks 종류 중의 하나인 **useState 를 이용해서 state 를 생성하고 관리**할 수 있다. <br />
**hook 은 React 16.8 버전부터 사용 가능**하다. <br />
초기 리액트는 state 와 라이프사이클을 관리하려면 클래스형 컴포넌트를 만들어야 했다. <br />
그리고 단순히 UI 만 표현해주는 컴포넌트만 함수형 컴포넌트로 제작했다.<br />
하지만 16.8 버전부터는 모든 컴포넌트를 함수형으로 만들 수 있게 되었고, <br />
이 react hook 을 이용해서 **함수형 컴포넌트에서도 state 와 라이프사이클 관리가 가능**해졌다.

### 상태값 관리
```
import { useState } from "react";

export default function Hello() {
  const [name, setName] = useState("Mike");

  return (

  )
}
```
- useState 는 배열을 반환한다.
  - **첫 번째 값:** state -> 변수명이라고 생각하면 된다.
  - **두 번째 값:** state 를 변경해주는 함수
- setName 함수가 호출돼서 name 값이 변경되면 -> react 는 해당 컴포넌트를 다시 렌더링
- useState() 괄호 안에는 **초기값**을 넣어주면 된다.
<br />

## props

### props
props는 properties의 약자로, 부모 컴포넌트에서 자식 컴포넌트로 값을 전달하는 방식이다.
- **예시**
  1. Hello.js에서 UseState 컴포넌트에 age를 props로 전달.
      ```
      // Hello.js
        
      <UseState age={10} />
      <UseState age={20} />
      <UseState age={30} />
      ```
  2. UseState.js에서 props로 받은 age를 사용
       ```
       const UseState = ({ age }) => {
         const [name, setName] = useState("Mike");
         const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";
       };
       ```
  3. **props 전달:** 한 컴포넌트에서 사용하던 state를 다른 컴포넌트로 props로 전달
       ```
       <UserName name={name} />
       ```
<br />

## Router

### 설치
```
npm install react-router-dom
yarn add react-router-dom
```

### 사용법
```
import "./assets/styles/app/App.css";
import Header from "./components/header/Header";
import Day from "./components/main/components/Day.js";
import DayList from "./components/main/DayList.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from "./components/main/components/EmptyPage.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          {/* 콜론을 붙여서 사용하면
          예를 들어, day 1 로 들어갔을 때 day 라는 변수로 1 이라는 값을 얻을 수 있다.
          만약 :id 면 id 라는 변수로 1 의 값을 얻을 수 있다. */}
          <Route path="/day/:day" element={<Day />} />
          {/* 와일드카드 경로를 사용해서 잘못된 경로에 대응하는 라우트를 만들었음. */}
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
```
- BrowserRouter 로 감싸주고 Routes 로 감싸주고 Route 를 이용해 라우터를 구현한다.
  - **`path`:** 경로
  - **`element`:** 해당 경로일 때, 보여질 컴포넌트
- **Browser 로 감싸줘야 하는 이유**
  - HTML5 의 history API 를 사용하여 URL 을 관리하며, 브라우저의 주소 표시줄에 URL 을 업데이트하고 페이지를 새로고침 하지 않고도 URL 에 대응하는 컴포넌트를 렌더링 할 수 있게 해준다. -> 즉, **페이지 간 이동 시 전체 페이지를 다시 로드하지 않고, 해당 URL 로 이동할 때, 적절한 컴포넌트만 로드하는 방식을 지원**한다.
  - 그리고 Routes 와 같은 라우트 관련 컴포넌트들은 BrowserRouter 와 함께 동작한다.
- **콜론(:)을 사용해서 경로를 지정**할 수 있다.
  - 콜론으로 경로를 지정하게 되면 day 라는 변수로 1(day 1로 접근했을 때) 이라는 값을 얻을 수 있다.
    - 즉, URL 의 특정 부분이 고정된 값이 아니라 가변적인 값을 가질 수 있는 경로이다.
    - :day 에 오는 값은 URL 에 따라 달라질 수 있다.
      - 예를 들어, 사용자가 `/day/1` 로 접근하면 `:day` 부분에 1이 할당된다.
<br />

## useEffect

### useEffect
useEffect 훅은 useState 와 마찬가지로 react 에서 import 한다. -> **`import { useEffect } from "react";`**
- **첫 번째 매개변수: ** 함수
- **두 번째 매개변수:** 의존성 배열 -> 의존성 배열이 변경되는 경우에만 useEffect 실행
  - 어떤 상태 값이 바뀌었을 때, 동작하는 함수를 작성할 수 있다.
 
### API 호출하기 (w.fetch)
useEffect 를 이용해서 API 를 호출할 때는, 렌더링이 완료되고 최초의 한 번만 api 를 호출해주면 된다. <br />
**최초의 한 번만 호출하려면 의존성 배열에 빈 배열 값을 전달**해주면 된다.
```
 useEffect(() => {
  fetch("http://localhost:3001/days")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setDays(data);
    });
}, []);
```

## Custom Hooks
로직이 비슷한 경우, 사용자가 직접 훅으로 만들어서 사용할 수 있다.
- **`hooks`** 라는 폴더를 만들고,
- 파일명은 **`use`** 로 시작하면 된다.
