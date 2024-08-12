import HelloExample from "./components/Hello/components/HelloExample.js";
import styles from "./assets/styles/App/App.module.css";
import "./assets/styles/App/App.css";

function App() {
  return (
    <div className="App">
      <HelloExample />
      <div className={styles.box}>App-module</div>
      <div className="box">App</div>
    </div>
  );
}

export default App;
