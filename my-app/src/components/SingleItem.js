import React, { Component } from "react";
import PropTypes from "prop-types";
export class SingleItem extends Component {
  getStyle = () => {
    return {
      
    };
  };

  render() {
    const cho = this.props.object.cho.value;
    const title = this.props.object.title.value;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.toggleLiked.bind(this, cho.value)}
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
