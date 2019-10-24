import React, { Component } from "react";
import PropTypes from "prop-types";
import pinpoint from '../images/pinpoint.svg';
export class SingleItem extends Component {

  
  render() {
    let uri = this.props.object.cho.value;
    return (
      <div>
        <span>{this.props.object.year.value}</span>
        <img src={pinpoint} alt="pinpoint" onClick={this.props.renderData.bind(this, uri)} />
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
