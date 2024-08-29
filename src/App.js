import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/app/App.css";

import Header from "./components/header/Header";
import Day from "./components/main/components/Day.js";
import DayList from "./components/main/DayList.js";
import EmptyPage from "./components/main/components/EmptyPage.js";
import CreateWord from "./components/main/components/CreateWord.js";
import CreateDay from "./components/main/components/CreateDay.js";

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
          <Route path="/create_word" element={<CreateWord />} />
          <Route path="/create_day" element={<CreateDay />} />
          {/* 와일드카드 경로를 사용해서 잘못된 경로에 대응하는 라우트를 만들었음. */}
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
