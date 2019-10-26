import React, { Component } from "react";

export class Filter extends Component {
  render() {
    return (
      <label>
        <input
          type="checkbox"
          onChange={this.props.toggleFilter.bind(this, this.props.filter)}
        />{" "}
        {this.props.string(this.props.filter)}
      </label>
    );
  }
}

export default Filter;
