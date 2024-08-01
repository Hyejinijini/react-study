# react-study
React 공부 기록용 입니다.
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
<br>
<br>
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
