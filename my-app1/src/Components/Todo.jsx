import React from 'react'

const Todo = () => {
  return (
    <>
    <div className="container">
        <div className="row my-5">
            <div className="col-lg-4 mx-auto">
                <div className="header-container d-flex justify-content-between">
                    <div className="time">9:00</div>
                    <div className="media">
                        <span><i className='fa fa-network'></i></span>
                        <span><i className='fa fa-wify'></i></span>
                        <span><i className='fa fa-battery'></i></span>
                    </div>
                </div>
                <div className="add-todoContainer d-flex justify-content-between">
                    <span>Today</span>
                    <span><i className='fa fa-add'></i></span>
                </div>
                <div className="show-todoContainer">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                </div>
                <div className="todo-content">Start making content</div>
                </div>
            </div>
        </div>
    </div>
     </>
  )
}

export default Todo