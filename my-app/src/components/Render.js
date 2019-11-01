import React, { Component } from "react";
import redHeart from "../images/heart.svg";
import whiteHeart from "../images/whiteHeart.svg";
export class Render extends Component {
  state = {
    comment: "",
  }
  change = e => this.setState({ comment: e.target.value });
  comment = (e, uri) => {
    e.preventDefault();
    this.props.comment(this.state.comment);
  }

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
          <div className="description">
            <p>{this.props.render.year}</p>
            <p>{this.props.render.description}</p>
          </div>
            <div
              className={className}
              onClick={this.props.toggleLiked.bind(this, uri)}
            >
              <img className="red" src={redHeart} alt="heart" />
              <img className="white" src={whiteHeart} alt="heart" />
            </div> 
            <form onSubmit={this.comment.bind(this)}> 
              <input
              type="textarea"
              name="comment"
              placeholder="Wat vindt u van dit object?"
              // value={this.state.comment}
              onChange={this.change}
              />
              <button type="submit">
                Plaats comment
              </button>
            </form>
            {this.props.renderComments.map(comment => (
              <p className="comment">{comment}</p>
            ))}
        </div>
        ) : <p>Zoek een plaats en klik op een bullet om een object weer te geven.</p> }
      </div>
    );
  }
}

export default Render;
