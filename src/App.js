// import Button from "./Button";
import styles from './App.module.css'
import { useEffect, useState } from "react";

function App() {
  const [count, setValue] = useState(0);
  const onClick = () => {
    setValue(prev => prev + 1);
  };
  console.log('I run All the Time');
  useEffect(() => console.log('I run only Once'), []);
  return (
    <div >
      <h1 className={styles.title}>{count}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
