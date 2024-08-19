import "./assets/styles/app/App.css";
import Header from "./components/header/Header";
import Day from "./components/main/components/Day.js";
import DayList from "./components/main/components/DayList.js";

function App() {
  return (
    <div className="App">
      <Header />
      <DayList />
      <Day />
    </div>
  );
}

export default App;
