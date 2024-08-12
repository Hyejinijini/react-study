import "./App.css";
import Hello from "./components/Hello.js";
import styles from "./App.module.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hello />
      <div className={styles.box}>App-module</div>
      <div className="box">App</div>
    </div>
  );
}

export default App;
