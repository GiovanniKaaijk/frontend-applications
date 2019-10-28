import React, { Component } from "react";

export class Render extends Component {
  render() {
    const uri = this.props.render.uri;
    const title = this.props.render.title;
    const image = this.props.render.img;
    return (
      <div className="render">
          <h1>{title}</h1> <img src={image} alt={title} />
          {title ?  
          <button
            type="checkbox"
            onChange={this.props.toggleLiked.bind(this, uri)}
          >Vind ik leuk</button> :
          'Klik op een bullet om weer te geven' }
      </div>
    );
  }
}

export default Render;
