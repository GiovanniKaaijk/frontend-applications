import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Search from "../images/search-icon.svg";
import Filter from "./Filter";
export class searchPlace extends Component {
  state = {
    place: "",
    filters: [
      '"foto"',
      '"Kaart"',
      '"Boek"',
      '"Geweer"',
      '"Lichtbeeld"',
      '"Munt"',
      '"Godenbeeld"',
      '"Geld"',
      '"Document"'
    ]
  };
  componentDidMount(){
    const place = localStorage.getItem('place')
    this.setState({place: place});
  }
  change = e => this.setState({ place: e.target.value });
  submit = e => {
    e.preventDefault();
    localStorage.setItem('place', this.state.place);
    this.props.place(this.state.place);
    this.props.history.push('/overview');
  };

  render() {
    return (
      <div className="form">
        <form onSubmit={this.submit.bind(this)}>
          <input
            type="text"
            name="place"
            placeholder="Wat is jouw favoriete bestemming?"
            value={this.state.place}
            onChange={this.change}
          />
          <button type="submit">
            <img src={Search} alt="button"></img>
          </button>
          <div className="filters">
            {this.state.filters.map(filter => (
              <Filter
                key={filter}
                filter={filter}
                toggleFilter={this.props.toggleFilter}
                string={this.props.string}
              />
            ))}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(searchPlace);
