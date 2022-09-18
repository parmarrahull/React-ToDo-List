import React from "react";

const TaskList = ({ taskList, title, onChangeHandler }) => {
  // console.log("Task List2",taskList);
  return (
    <>
      <div className="row" style={{ justifyContent: "center" }}>
        <div style={{ backgroundColor: "darkgray" }} className="col-sm-6 mt-5">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">{title}</th>
              </tr>
            </thead>
            {taskList.map((task) => {
              return (
                <div class="form-check" key={task.id}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    checked={title === "Completed Task List" ? true : false}
                    id="flexCheckDefault"
                    onChange={(e) => onChangeHandler(e, task.id)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    <tbody>
                      <tr>
                        <td> {task.value}</td>{" "}
                      </tr>
                    </tbody>
                  </label>
                </div>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default TaskList;
