import React, { Component } from "react";
import redHeart from "../images/heart.svg";
import whiteHeart from "../images/whiteHeart.svg";
export class Render extends Component {
  render() {
    const uri = this.props.render.uri;
    const title = this.props.render.title;
    const image = this.props.render.img;
    let className = "like";
    if (this.props.render.liked) {
      className = "like liked";
    } else {
      className = "like";
    }
    return (
      <div className="render">
        <h1>{this.props.place}</h1>
        {title ? (
        <div>
          <h2>{title}</h2>
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <p>{this.props.render.year}</p>
          <p>{this.props.render.description}</p>

            <div
              className={className}
              onClick={this.props.toggleLiked.bind(this, uri)}
            >
              <img className="red" src={redHeart} alt="heart" />
              <img className="white" src={whiteHeart} alt="heart" />
            </div> 
        </div>
        ) : <p>Zoek een plaats en klik op een bullet om een object weer te geven.</p> }
      </div>
    );
  }
}

export default Render;
