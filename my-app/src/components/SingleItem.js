import React, { Component } from "react";
import PropTypes from "prop-types";
export class SingleItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: this.props.object.id % 2 === 0 ? "#f4f4f4" : "#000000",
      color: this.props.object.id % 2 === 1 ? "#fff" : "#000000"
    };
  };

  render() {
    const { id, title } = this.props.object;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.toggleLiked.bind(this, id)}
          />{" "}
          {title}
        </p>
      </div>
    );
  }
}

SingleItem.propTypes = {
  object: PropTypes.object.isRequired
};
// const style = {
//     backgroundColor: '#f4f4f4'
// }

export default SingleItem;
