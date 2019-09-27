import React, { Component } from "react";
// import logo from './logo.svg';
import { ToastContainer, toast } from "react-toastify";
import "./App.scss";
import Title from "./components/Title";
import ListTask from "./components/ListTask";
class App extends Component {
  state = {
    username: "thu kara",
    todoTask: [
      { taskname: "task 1", done: false, date: "20/10/1111" },
      { taskname: "task 2", done: true, date: "30/10/1222" },
      { taskname: "task 3", done: false, date: "10/10/1222" },
      { taskname: "task 4", done: true, date: "20/10/1222" }
    ],
    status: true,
    value: "",
    name: ""
  };

  filterStatus = status => this.state.todoTask.filter(t => t.done === status);

  addTask = content => {
    const day = new Date();
    const element = this.state.todoTask.find(item => item.taskname === content);
    if (!element && content) {
      this.setState(
        {
          todoTask: [
            ...this.state.todoTask,
            { taskname: content, done: false, date: `${day.getDate()}/${day.getMonth()}/${day.getFullYear()}` }
          ],
          value: ''

        }
      );
      this.notify(true, "Add task sucessfully !");
    } else if (element) {
      this.notify(false, "This task already exist !");
    }

  }

  handleSubmit = event => {
    const content = this.state.value;
    if (!content) {
      this.notify(false, "Empty task !");
    } else {
      if (this.state.status === true) {
        this.addTask(content);
      } else {
        this.editTask(this.state.name, content)
      }
    }

    event.preventDefault();
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  notify = (status, message) => {
    status === true ? toast.success(message, {
      position: toast.POSITION.TOP_RIGHT
    }) : toast.error(message, {
      position: toast.POSITION.TOP_RIGHT
    })
  };

  editTask = (oldContent, newContent) => {
    const index = this.state.todoTask.findIndex(task => task.taskname === oldContent);
    const arrTemp = this.state.todoTask.filter(item => item.taskname !== oldContent);
    const index1 = arrTemp.findIndex(task => task.taskname === newContent);
    if (index1 !== -1) {
      this.notify(false, "This task already exist !");
    } else {
      const arr = [
        ...this.state.todoTask.slice(0, index),
        {
          ...this.state.todoTask[index],
          taskname: newContent
        },
        ...this.state.todoTask.slice(index + 1)
      ];
      this.setState({
        todoTask: arr,
        status: true,
        value: ''
      });
      this.notify(true, "Edit task sucessfully !");
    }

  };

  Edit = taskname => {
    this.setState({
      value: taskname,
      status: false,
      name: taskname
    })
  }

  Delete = taskname => {
    console.log(taskname);
    const index = this.state.todoTask.findIndex(task => task.taskname === taskname);
    this.state.todoTask.splice(index, 1);
    this.setState({
      todoTask: [
        ...this.state.todoTask
      ]
    });
    this.notify(true, "Delete task sucessfully !");
  }

  render() {
    return (
      <div className="App">
        <Title title={this.state.username} tasks={this.state.todoTask} />
        <div className="container">
          <div className="form-creator">
            <form action="" onSubmit={this.handleSubmit} >
              <input
                type="text"
                className="form-control my-3"
                placeholder="Add new task"
                onChange={this.handleChange}
                value={this.state.value}
              />
            </form>
          </div>
          <div className="scrollbar" id="scroll">
            <ListTask tasks={this.state.todoTask} handleEdit={this.Edit} handleDelete={this.Delete} />
          </div>

          <ToastContainer />
        </div>
      </div>
    );
  }
}

export default App;
