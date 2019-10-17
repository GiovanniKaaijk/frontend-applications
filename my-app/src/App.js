import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Objects from "./components/Object";
import "./App.css";
import Header from "./components/layout/Header";
import SearchPlace from "./components/SearchPlace";
const fetch = require("node-fetch");

class App extends React.Component {
  state = {
    data: [],
//  {id: 1, title: "Test", liked: false},{id: 2,title: "Test2",liked: false},
    place: '',
  };


  




    getData = place => {
      //Github CMDA
      const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-02/sparql"
      //Note that the query is wrapped in es6 template strings to allow for easy copy pasting
      const query = `
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
      PREFIX dc: <http://purl.org/dc/elements/1.1/>
      PREFIX dct: <http://purl.org/dc/terms/>
      PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
      PREFIX edm: <http://www.europeana.eu/schemas/edm/>
      PREFIX foaf: <http://xmlns.com/foaf/0.1/>
  
      SELECT ?cho ?title ?placeName ?type ?year WHERE {
       ?place skos:prefLabel ?placeName .
      VALUES ?placeName { "${place}"}
       ?cho dct:spatial ?place ;
          dc:type ?type ;
          dct:created ?year ;
          dc:title ?title .
       FILTER langMatches(lang(?title), "ned")
      } LIMIT 50
      `
      const runQuery = (url, query) => {
        // Call the url with the query attached, output data
        fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
        .then(res => res.json())
        .then(json => {
        json.results.bindings.map(data => (
          delete data.title["xml:lang"]
        ));
        let result = json.results.bindings;
        // let unique = [...new Set(result.map(object => object.title.value))];
        let unique = [];
        for(let i=0; i<result.length; i++){
          if(unique.includes(json.results.bindings[i].title.value)) {
            delete json.results.bindings[i];
          } else {
            unique.push(json.results.bindings[i].title.value);
          }
        }
        console.log(json.results.bindings);
        this.setState({data: json.results.bindings})
        })
      }
      runQuery(url, query);
    }
    
  

  //Toggle liked
  toggleLiked = (id) => {
    this.setState({
      test: this.state.data.map(object => {
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
    this.getData(place)
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
                <Objects objects={this.state.data} toggleLiked={this.toggleLiked} />
              </React.Fragment>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
