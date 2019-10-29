import React, { Component } from "react";
import checked from '../images/checked.svg';
export class Render extends Component {
  render() {
    const uri = this.props.render.uri;
    const title = this.props.render.title;
    const image = this.props.render.img;
    return (
      <div className="render">
          <h1>{title}</h1> 
          <div>
            <img src={image} alt={title} />
          </div>
          {title ?  
          <button
            type="checkbox"
            onClick={this.props.toggleLiked.bind(this, uri)}
          >{this.props.render.liked ? 'Vind ik niet meer leuk' : 'Vind ik leuk'} {this.props.render.liked ? <img src={checked} alt="tick" /> : ''} </button> :
          'Klik op een bullet om weer te geven' }
      </div>
    );
  }
}

export default Render;
