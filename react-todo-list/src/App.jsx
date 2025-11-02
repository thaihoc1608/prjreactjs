import { useState } from "react";
import Header from "./components/Header";


function App() {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleChangeInput(event) {
    setTodoName(event.target.value);
  }

  function handleAddTask() {
    const newTodo = {
      id: new Date().getTime(),
      name: todoName,
    }
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setTodoName("");
  }

  return (
    <>
      <Header />
      <div className="add-form">
        <input
          type="text"
          value={todoName}
          onChange={handleChangeInput}
          placeholder="Nhập công việc..."
        />
        <button onClick={handleAddTask}>Thêm công việc</button>
      </div>

      <div className="todo-list">
        <h2>Danh sach viec can lam</h2>
        {todoList.map((task) => (
          <li key={task.id}>
            {task.name}
          </li>
        ))}
      </div>
    </>
  );
}
export default App;