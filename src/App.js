import "./assets/styles/app/App.css";
import Hello from "./components/hello/Hello.js";
import styles from "./assets/styles/app/App.module.css";

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
