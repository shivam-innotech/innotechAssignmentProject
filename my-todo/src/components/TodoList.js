import React from 'react'

const TodoList = (props) => {
  return (
    <>
    <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <ul className="list-group">
              {props.task.map((item) => {
                return (
                  <li
                    className="list-group-item list todo-list my-3 todolist"
                    key={item.id}
                  >
                    <input
                      type="checkbox"
                      checked={item.isChecked}
                      onChange={() => {
                        props.checkboxChange(item.id);
                      }}
                    />
                    <h6>{item.name}</h6>
                    <div className="span">
                      <span className="badge bg-secondary ">
                        {item.isChecked === true ? "complete" : null}
                      </span>
                      <span
                        className="badge bg-secondary ms-2"
                        onClick={() => {
                          props.editItem(item.id);
                        }}
                      >
                        edit
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>    
    </>
  )
}

export default TodoList