// import Button from "./Button";
import { useEffect, useState } from "react";

function Hello(){
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("cleanup function");
  }, [])
  return (
    <h1>Hello</h1>
  )
}
function App() {
  const [shoing, setShoing] = useState(false);
  const onClick = () => {
    setShoing(!shoing);
  };

  return (
    <div >
      {shoing ? <Hello /> : null}
      <button onClick={onClick}>{shoing ? 'hide' : 'show'}</button>
    </div>
  );
}

export default App;
