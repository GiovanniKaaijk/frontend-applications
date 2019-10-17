import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Objects from "./components/Object";
import "./App.css";
import Header from "./components/layout/Header";
import SearchPlace from "./components/SearchPlace";

class App extends React.Component {
  state = {
    test: [
      {
        id: 1,
        title: "Test",
        liked: false
      },
      {
        id: 2,
        title: "Test2",
        liked: false
      }
    ],
    place: '',
  };
  //Toggle liked
  toggleLiked = (id) => {
    this.setState({
      test: this.state.test.map(object => {
        if (object.id === id) {
          object.liked = !object.liked;
        }
        return object;
      })
    });
  };

  //Search a place
  searchPlace = (place) => {
    console.log(place);
    this.setState({place: place})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="Container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <SearchPlace place={this.searchPlace} />
              </React.Fragment>
            )} />
            <Route path="/overview" render={props => (
              <React.Fragment>
                <Objects objects={this.state.test} toggleLiked={this.toggleLiked} />
              </React.Fragment>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
