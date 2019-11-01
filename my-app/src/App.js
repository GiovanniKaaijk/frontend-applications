import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Objects from "./components/Object";
import "./App.css";
import Header from "./components/layout/Header";
import SearchPlace from "./components/SearchPlace";
import Render from "./components/Render";

const fetch = require("node-fetch");

class App extends React.Component {
  state = {
    data: [],
    place: "",
    filter: "",
    queryfilter: "",
    liked: [],
    comment: [],
    render: {
      uri: "",
      year: "",
      img: "",
      title: "",
      description: "",
      liked: false
    }
  };

  getRender = uri => {
    const url =
      "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-02/sparql";
    //Note that the query is wrapped in es6 template strings to allow for easy copy pasting
    const query = `
    PREFIX dc: <http://purl.org/dc/elements/1.1/>
    PREFIX dct: <http://purl.org/dc/terms/>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX edm: <http://www.europeana.eu/schemas/edm/>

    SELECT ?cho ?title ?placeName ?type ?year ?pic ?desc ?description WHERE {
      ?place skos:prefLabel ?placeName .
    VALUES ?cho { <${uri}> }
      ?cho dct:spatial ?place ;
        dc:type ?type ;
        dct:created ?year ;
        dc:description ?desc;
        edm:isShownBy ?pic ;
        dc:title ?title .
      FILTER (xsd:integer(?year))
      FILTER langMatches(lang(?title), "ned")
    } LIMIT 1
    `;
    const runQuery = (url, query) => {
      // Call the url with the query attached, output data
      fetch(url + "?query=" + encodeURIComponent(query) + "&format=json")
        .then(res => res.json())
        .then(json => {
          let results = json.results.bindings[0];
          if (results.desc.value.includes('<BR>') || results.desc.value.includes('<Br>') || results.desc.value.includes('<br>') || results.desc.value.includes('<bR>')) {
            let newString = results.desc.value;
            newString = newString.replace('<BR>', ' ');
            newString = newString.replace('<bR>', ' ');
            newString = newString.replace('<Br>', ' ');
            newString = newString.replace('<br>', ' ');
            results.desc.value = newString;
          }
          let liked = false;
          if (this.state.liked.includes(results.cho.value)) {
            liked = true;
          }
          this.setState({
            render: {
              uri: results.cho.value,
              year: results.year.value,
              img: results.pic.value,
              title: results.title.value,
              description: results.desc.value,
              liked: liked
            }
          });
        });
    };
    runQuery(url, query);
  };
 
  getData = place => {
    console.log('Getting data...')
    //Github CMDA 
    const url =
      "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-02/sparql";
    //Note that the query is wrapped in es6 template strings to allow for easy copy pasting
    const query = `
    PREFIX dct: <http://purl.org/dc/terms/>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX dc: <http://purl.org/dc/elements/1.1/>

    SELECT ?cho ?placeName ?year ?desc WHERE {
      ?place skos:prefLabel ?placeName .
    VALUES ?placeName { "${place}"}
        ?cho dct:spatial ?place ;
        dc:description ?desc;
        dct:created ?year .
      FILTER (xsd:integer(?year))
      ${this.state.queryfilter}
    }
    ORDER BY ASC(?year)
    LIMIT 500
    `;
    const runQuery = (url, query) => {
      // Call the url with the query attached, output data
      fetch(url + "?query=" + encodeURIComponent(query) + "&format=json")
        .then(res => res.json())
        .then(json => {
          // json.results.bindings.map(data => delete data.title["xml:lang"]);
          let result = json.results.bindings;
          let unique = [];
          for (let i = 0; i < result.length; i++) {
            json.results.bindings[i].year.value = parseInt(
              json.results.bindings[i].year.value
            );
            if (unique.includes(json.results.bindings[i].cho.value)) {
              delete json.results.bindings[i];
            } else {
              unique.push(json.results.bindings[i].cho.value);
            }
          }
          this.setState({ data: json.results.bindings });
        });
    };
    runQuery(url, query);
  };

  //Toggle liked
  toggleLiked = (id) => {
    let newProp = this.state.render;
    if(this.state.liked.includes(id)){
      let index = this.state.liked.indexOf(id);
      this.state.liked.splice(index, 1);
    } else {
      this.state.liked.push(id);
    }
    newProp.liked = !newProp.liked;
    this.setState({
      render: newProp,
    }, console.log(this.state.render), console.log(this.state.liked));
  };

  //Search a place
  searchPlace = place => {
    this.setState({ place: place });
    this.getData(place);
  };

  //Change render
  changeData = uri => {
    this.setState({
      render: {
        uri: uri
      }
    });
    this.getRender(uri);
  };

  //History
  redirect = () => {
    const { history } = this.props;
    history.push("/overview");
  };

  //toggleFilter
  toggleFilter = filter => {
    let checked = document.querySelectorAll('input[type="checkbox"]');
    let toggle = false;
    checked.forEach(check => {
      if (check.checked) {
        toggle = true;
      }
    });
    if (this.state.filter.includes(filter)) {
      let state = this.state.filter;
      state = state.replace(filter, "");
      this.setState(
        {
          filter: state
        },
        () => {
          console.log(this.state.filter);
        }
      );
    } else if (toggle) {
      let state = this.state.filter;
      state = state += filter;
      this.setState(
        {
          filter: state,
          queryfilter: "VALUES ?type { " + state + " }"
        },
        () => {
          console.log(this.state.queryfilter);
        }
      );
    } else {
      this.setState({
        filter: "",
        queryfilter: ""
      });
    }
  };

  //Return string for filters without "
  string = (string) => {
    let newString = string;
    newString = newString.replace('"', '');
    newString = newString.replace('"', '');
    return newString
  }

  //Create comments
  comment = (comment) => {
    let comments = this.state.comment;
    comments.push(comment);
    this.setState({comment: comments},console.log(this.state.comment));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <div className="home">
                <SearchPlace
                  place={this.searchPlace}
                  history={this.redirect}
                  toggleFilter={this.toggleFilter}
                  string={this.string}
                />
              </div>
            )}
          />
          <Route
            path="/overview"
            render={props => (
              <div className="overview">
                <Render
                  render={this.state.render}
                  toggleLiked={this.toggleLiked}
                  place={this.state.place}
                  comment={this.comment}
                  renderComments={this.state.comment}
                />
                <div className="timeline">
                  <Objects
                    objects={this.state.data}
                    changeData={this.changeData}
                  />
                </div>
              </div>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
