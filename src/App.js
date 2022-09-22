// import Button from "./Button";
import styles from './App.module.css'
import { useEffect, useState } from "react";

function App() {
  const [count, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => {
    setValue(prev => prev + 1);
  };
  const onChange = event => {
    setKeyword(event.target.value);
  }
  console.log('I run All the Time');
  useEffect(() => console.log('I run only Once'), []);
  useEffect(() => console.log('I run when "conut" change'), [count]);
  useEffect(() => {
    if(keyword !== '' && keyword.length > 5){
      console.log('I run when "keyword" change')
    }
  }, [keyword]);
  useEffect(() => console.log('I run when "conut & keyword" change'), [count, keyword]);

  return (
    <div >
      <h1 className={styles.title}>{count}</h1>
      <button onClick={onClick}>click me</button>
      <hr />
      <input type="text" onChange={onChange} value={keyword} />
    </div>
  );
}

export default App;
