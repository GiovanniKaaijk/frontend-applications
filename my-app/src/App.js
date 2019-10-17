import React from "react";
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
    this.setState({place: place})
  }

  render() {
    return (
      <div className="App">
        <div className="Container">
          <Header />
          <SearchPlace place={this.searchPlace} />
          <Objects objects={this.state.test} toggleLiked={this.toggleLiked} />
        </div>
      </div>
    );
  }
}

export default App;
