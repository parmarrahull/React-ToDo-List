import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import TaskList from "./TaskList";

const Homepage = () => {

  const [taskInput, setTaskInput] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [pendingTaskList, setPendingTaskList] = useState([]);
  const [completedTaskList, setCompletedTaskList] = useState([]);
  // console.log("Task List1",taskList);

  // Completed Task List And Pending Task List
  useEffect(() => {
    const pendingTasks = taskList.filter((task) => task.isPending === true);
    setPendingTaskList(pendingTasks);
    // console.log("pendingTask List",pendingTasks);
    const completedTasks = taskList.filter((task) => task.isPending === false);
    setCompletedTaskList(completedTasks);
    // console.log("Completed Task List" ,completedTasks);
  }, [taskList]);
  // console.log(taskList);


  const itemEvent = (event) => {
    setTaskInput(event.target.value);
  };

  // Input Task Data And save
  const listOfTask = () => {
    if (taskInput) {
      setTaskList([
        ...taskList,
        { id: uniqid(), isPending: true, value: taskInput },
      ]);
      setTaskInput("");
    } else {
      alert("Enter the task");
    }
  };


  const handleCheckboxTask = (e, id) => {
    if (e.target.checked) {
      console.log("Checkbox is checked", e.target.checked, id);
      const updatedTaskList = taskList.map((itemvalue) => {
        if (itemvalue.id === id) {
          return { ...itemvalue, isPending: false };
        } else {
          return itemvalue;
        }
      });
      setTaskList(updatedTaskList);
    } else {
      console.log(" Checkbox is NOT checked", e.target.checked, id);
      const updatedTaskList = taskList.map((itemvalue) => {
        if (itemvalue.id === id) {
          return { ...itemvalue, isPending: true };
        } else {
          return itemvalue;
        }
      });
      setTaskList(updatedTaskList);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: 20 }}>TO Do List</h1>
      <div style={{ margin: 10 }}>
        <div className="row" style={{ justifyContent: "center" }}>
          <div
            style={{ backgroundColor: "darkgray" }}
            className="col-sm-6 mt-5"
          >
            <form>
              {/* <label class="form-label">Select Task</label><br />
              <select style={{ padding: 10, width: 300 }} name="cars" id="selectCategory">
                <option value="" >Select Task</option>
                <option value="Car">Task1</option>
                <option value="Bike">Task2</option>
                <option value="Phone">Task3</option>
              </select> */}
              <input
                style={{ marginTop: 20 }}
                onChange={itemEvent}
                value={taskInput}
                className="form-control form-control-lg"
                type="text"
                placeholder="Add Task"
                aria-label=".form-control-lg example"
              ></input>
              <div style={{ marginTop: 20 }}>
                <button
                  onClick={listOfTask}
                  type="button"
                  class="btn btn-primary"
                >
                  Add
                </button>
              </div>
            </form>

            <div style={{ margin: 20 }}>
              <TaskList
                taskList={pendingTaskList}
                title={"Pending Task List"}
                onChangeHandler={handleCheckboxTask}
              />
              <TaskList
                taskList={completedTaskList}
                title={"Completed Task List"}
                onChangeHandler={handleCheckboxTask}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
