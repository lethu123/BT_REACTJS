import React, { Component } from "react";

class ListTask extends Component {
  render() {
    const { handleEdit, handleDelete } = this.props;

    return this.props.tasks.map(item => {
      return (

        <div className="list-task row " key={item.taskname}>
          <div className="col-sm-8">
            <h2>{item.taskname}</h2>
            <p className="pb-0">Day: {item.date}</p>
          </div>
          <div className="col-sm-4 text-center">
            <button className="btn btn-warning mr-1 text-white" onClick={() => { handleEdit(item.taskname) }}>
              <i className="fa fa-edit"></i>
            </button>
            <button className="btn btn-danger" onClick={() => { handleDelete(item.taskname) }}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>

      );
    });
  }
}

export default ListTask;
