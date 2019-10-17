import React, { Component } from "react";

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
      <div>
        <form onSubmit={this.submit}>
          <input
            type="text"
            name="place"
            placeholder="Wat is jouw favoriete bestemming?"
            // value={this.state.place}
            onChange={this.change}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default searchPlace;
