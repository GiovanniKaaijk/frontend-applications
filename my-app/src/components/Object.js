import React from "react";
import SingleItem from "./SingleItem";
// import PropTypes from 'prop-types';

class Objects extends React.Component {
  render() {
    //console.log(this.props)
    return this.props.objects.map(object => (
      <SingleItem
        key={object.cho.value}
        object={object}
        toggleLiked={this.props.toggleLiked}
      />
    ));
  }
}

// Objects.propTypes = {
//     test: PropTypes.array.isRequired
// }

export default Objects;
