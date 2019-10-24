import React, { Component } from "react";
import Search from '../images/search-icon.svg';
export class searchPlace extends Component {

  state = {
    place: ''
  }

change = (e) => this.setState({place: e.target.value});
submit = (e) => {
  e.preventDefault();
  this.props.place(this.state.place);
  this.setState({place: ''});
}

  render() {
    return (
      <div className="form">
        <form onSubmit={this.submit}>
          <input
            type="text"
            name="place"
            placeholder="Wat is jouw favoriete bestemming?"
            value={this.state.place}
            onChange={this.change}
          />
          <button type="submit"><img src={Search} alt="button"></img></button>
        </form>
      </div>
    );
  }
}

export default searchPlace;
