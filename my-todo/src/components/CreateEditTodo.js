import React,{useState} from 'react'
import TodoList from './TodoList';

const CreateEditTodo = () => {
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
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <form>
              <input
                type="text"
                value={input}
                id="valid"
                className="form-control my-3 "
                required
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
              {toggleBtn ? (
                <button className="btn btn-primary my-3" onClick={handleSubmit}>
                  submit
                </button>
              ) : (
                <button className="btn btn-primary my-3" onClick={handleSubmit}>
                  edit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
      <TodoList
      task={task}
       checkboxChange={checkboxChange}
       editItem={editItem}
      />
        
    </>
  )
}

export default CreateEditTodo