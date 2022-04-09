import React from 'react'
const CreateEditTodo = (props) => {
  return (
    <>   
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <form>
              <input
                type="text"
                value={props.input}
                id="valid"
                className="form-control my-3 "
                required
                onChange={(e) => {
                  props.setInput(e.target.value);
                }}
              />
              {props.toggleBtn ? (
                <button className="btn btn-primary my-3" onClick={props.handleSubmit}>
                  submit
                </button>
              ) : (
                <button className="btn btn-primary my-3" onClick={props.handleSubmit}>
                  edit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateEditTodo