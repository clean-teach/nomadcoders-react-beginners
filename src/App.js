// import Button from "./Button";
import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState('');
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => {setTodo(event.target.value)};
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ''){
      return
    }
    setTodos(currentTodos => [toDo, ...currentTodos]);
    setTodo('');
  };

  return (
    <div >
      <h1>My To dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={toDo} placeholder="Write your To dos..." />
        <button>Add To do</button>
      </form>
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index}>{toDo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
