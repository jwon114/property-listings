import React, { Component } from 'react'
import PropertyCard from './PropertyCard'
import Snackbar from 'material-ui/Snackbar'
import PropertyData from '../db/data.json'
import './PropertyListings.css'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      propertyResults: [],
      savedResults: [],
      showSnackbar: false,
      snackbarMessage: '' 
    }
    this.addToSavedProperties = this.addToSavedProperties.bind(this)
    this.removeFromSavedProperties = this.removeFromSavedProperties.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)
  }

  // fetch data from json file when component mounts
  componentDidMount() {
    this.setState({
      propertyResults: PropertyData["results"],
      savedResults: PropertyData["saved"]
    })
  }

  // add a property from the results array to the saved properties array
  addToSavedProperties(id) {
    let newProperty = this.state.propertyResults.filter(property => property.id === id)[0]
    let newSavedResults = this.state.savedResults
    let propertyIndex = newSavedResults.findIndex(property => property.id === id)

    // only add to saved properties list if not already there
    if (propertyIndex !== -1) { 
      this.setState({ 
        showSnackbar: true, 
        snackbarMessage: 'Property Already Saved' })
    } else {
      newSavedResults.push(newProperty)
      this.setState({ 
        savedResults: newSavedResults,
        showSnackbar: true,
        snackbarMessage: 'Property Added'
      })
    }
  }

  // remove a property from the saved properties array
  removeFromSavedProperties(id) {
    let propertyIndex = this.state.savedResults.findIndex(property => property.id === id)
    if (propertyIndex !== -1) {
      let newSavedResults = this.state.savedResults
      newSavedResults.splice(propertyIndex, 1)
      this.setState({ 
        savedResults: newSavedResults, 
        showSnackbar: true,
        snackbarMessage: 'Property Removed' 
      })
    }
  }

  // handle closing of snackbar when clicking away on screen
  handleRequestClose() {
    this.setState({ showSnackbar: false })
  }

  render() {
    const { propertyResults, savedResults, showSnackbar, snackbarMessage } = this.state
    const snackbarContentStyle = {
      textAlign: 'center',
      fontSize: 18
    }
    return (
      <div className='property_listings'>
        <div className='results_container'>
          <h1 className='results_header'>Results</h1>
          <div className='results'>
            {propertyResults.map((property, id) => (
              <PropertyCard 
                key={id} 
                data={property}
                buttonAction={this.addToSavedProperties}
                type={'Add'}
              />
            ))}
          </div>
        </div>
        <div className='saved-properties_container'>
          <h1 className='saved-properties_header'>Saved Properties</h1>
          <div className='saved-properties'>
            {savedResults.map((property, id) => (
              <PropertyCard 
                key={id} 
                data={property} 
                buttonAction={this.removeFromSavedProperties}
                type={'Remove'}
              />
            ))}
          </div>
        </div>
        <Snackbar 
          open={showSnackbar}
          message={snackbarMessage}
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose}
          contentStyle={snackbarContentStyle}
        />
      </div>
    )
  }
}