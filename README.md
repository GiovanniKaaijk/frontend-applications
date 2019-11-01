# Frontend applications
## Nationaal Stichting Wereld Culturen
The perfect website to discover more about your most favorite spots in the wold.
<img width="750" alt="Schermafbeelding 2019-10-18 om 11 09 20" src="https://user-images.githubusercontent.com/43671292/67081614-c4770180-f197-11e9-8463-0415960e1102.png">

## Table of Contents 🗃

- [Wiki](#Wiki)
- [Description](#Description)
- [Features](#Features)
  - [API](#API)
  - [App features](#app-features)
- [Installation](#Installation)
  - [Usage](#Usage)
  - [Keep up to date](#Keep-up-to-date)
- [Contributing](#Contributing)
- [License](#License)

## Wiki

Follow the progress on the [wiki](https://github.com/GiovanniKaaijk/frontend-applications/wiki).

## Description

During this course I created a web app with React. The data I use comes from [Netwerk Digitaal Erfgoed](https://www.netwerkdigitaalerfgoed.nl/). The user has the ability to search their favorite vacation spot. The Detail page shows the different object that could have been found at that spot over time together with information about the objects.

## Features

### Api

Trough an API the app collects different objects, the following data is requested from the objects:
```
{
    description: "Deze potten behoren toe aan de verschillende leden van een gezin en bepalen de hoeveelheid bier dat hen door de vrouw des huizes wordt gegeven. ..."
    img: "http://collectie.wereldculturen.nl/cc/imageproxy.ashx?server=localhost&port=17581&filename=images/Images/RV//5677-136.jpg"
    title: "Bierpot voor jongens"
    uri: "https://hdl.handle.net/20.500.11840/818383"
    year: "1978"
}
```
I'm using two SPARQL queries in this app:
- Collect all the items matching the place and filters:
```
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
```
- Request data from the object:
```
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
```

### App features
- Search historical objects found on your favorite spots
- Like the historical objects
- Local storage
- Filter on particular objects

## Interested in the project? Use the following steps to clone the project to your local computer:

## Before you clone

* Install Node.js
* Install a Code Editor
* An CLI(Command Line Interface) like bash or iTerm

## Used (necessary sources)

* NPM
* React
* Node-fetch
* React-router-dom

* When cloned, use npm install to install all the packages at once

## Installation

```
git clone https://github.com/GiovanniKaaijk/frontend-applications.git
```
Get into the right folder
```
cd frontend-apllications/my-app/
```
Install used npm packages
```
npm install
```
Run the application
```
npm run start
```

## Usage
Start the application
```
npm run start
```
To compile the code
```
npm run build
```

## Keep up to date
Make sure you pull the repository once in a while since we are still working on this project, you can do this by using ```git pull```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

# License
[MIT](https://github.com/GiovanniKaaijk/frontend-applications/blob/master/LICENSE)
