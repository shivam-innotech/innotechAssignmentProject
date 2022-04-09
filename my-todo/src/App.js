import React, {useState} from "react";
import "./App.css";
import CreateEditTodo from "./components/CreateEditTodo";
import TodoList from "./components/TodoList"

const App = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([
    { id: 1, name: "create your todo", isChecked: true },
  ]);
  const [isEdit, setIsEdit] = useState();
  const [toggleBtn, setToggleBtn] = useState(true);


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!input){
      let ele = document.getElementById("valid");
      ele.classList.add("is-invalid");
    }else if (input && !toggleBtn) {
      setTask(
        task.map((elem) => {
          if (elem.id === isEdit) {
            return { ...elem, name: input };
          }
          return elem;
        })
      );
      setInput("");
      setIsEdit(null);
      setToggleBtn(true);
    } else {
      const newData = { id: Math.random(), name: input, isChecked: false };
      setTask([...task, newData]);
      setInput("");
      let ele = document.getElementById("valid");
      ele.classList.remove("is-invalid");
    }
  };

  const checkboxChange = (id) => {
    const change = task.map((todo) => {
      if (todo.id === id) return { ...todo, isChecked: !todo.isChecked };
      return todo;
    });
    setTask(change);
   
  };

  const editItem = (id) => {
    const updateItem = task.find((todo) => {
      return todo.id === id;
    });
    setInput(updateItem.name);
    setIsEdit(id);
    setToggleBtn(false);
  };
 return (
    <>
    <h1>Todo Application</h1>
    <CreateEditTodo
     handleSubmit={handleSubmit}
     input={input}
     setInput={setInput}
     toggleBtn={toggleBtn}

    />
     <TodoList
      task={task}
       checkboxChange={checkboxChange}
       editItem={editItem}
      />
    </>
  )
};

export default App;
