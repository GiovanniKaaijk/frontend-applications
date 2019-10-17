import React from "react";
import SingleItem from "./SingleItem";
// import PropTypes from 'prop-types';

class Objects extends React.Component {
  render() {
    return this.props.objects.map(object => (
      <SingleItem
        key={object.id}
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
