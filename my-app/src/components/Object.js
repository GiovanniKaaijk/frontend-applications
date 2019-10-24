import React from "react";
import SingleItem from "./SingleItem";

class Objects extends React.Component {
  render() {
    return this.props.objects.map(object => ( 
        <SingleItem
          key={object.cho.value}
          object={object}
          renderData={this.props.changeData}
        />
    ));
  }
}

export default Objects;
