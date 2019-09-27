import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <div>
        <h4 className="bg-primary text-center text-white p-3">
          {this.props.title} is a Baby Shark todo list (
          {this.props.tasks.filter(item => item.done).length} item tasks)
        </h4>
      </div>
    );
  }
}

export default Title;
