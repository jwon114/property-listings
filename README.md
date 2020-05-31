# Property Listing
A single page application that lists property data served from a JSON file. Two columns of property listings: 1 for results and 1 for saved properties. Property can be added or removed from either list.
## Prerequisites
- Node >= 10.15.3
## Installing
1. Download or clone the repository
2. Install dependencies using npm
```
npm install
```
3. Start the server
```
npm start
```
4. Navigate to http://localhost:8080 to use the application
## Running the tests
- Runs test files located in the test folder within root.
```
npm test
```
## Functional Requirements
* Hovering over a property card in the Results column will display an "Add" button, when clicked will create the property in the Saved Properties column.
* Hovering over a property card in the Saved Properties column will display an "Remove" button, when clicked will remove the property from the Saved Properties column.
## Design & Implementation
I decided to use React because it is a technology I am interested in and would like to improve on. The app has only 1 stateless child component named PropertyCard which is used for all properties in both columns. My decision for a stateless child component is because I wanted to keep the state management in the parent App.js, with callbacks in the props to update parent state. 

I am using JSON server to mimick a REST API back-end by hosting the JSON file and exposing it to the app. Fetch calls are made to retrieve property data.

Mocha and Chai were already included in the boilerplate for testing. I added Enzyme to shallow render the component so I could test it as a unit.

Material-UI for added styling of buttons, property card layout and notifications.
## Built With
* React, used a React boilerplate with bundler Webpack, Babel, Mocha testing framework.
* Enzyme testing utilities for React, Chai for test assertions.
* [JSON-server](https://github.com/typicode/json-server), hosting the db.json as a backend API 
* [Material-UI](http://www.material-ui.com) for UI framework
* CSS styling
## Author
- James Wong
