import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import chai, { expect } from 'chai'
import { configure, shallow } from 'enzyme'
import PropertyListings from '../components/PropertyListings'

configure({ adapter: new Adapter() });

describe('PropertyCard Testing', () => {

  it('Check for results container', () => {
    const wrapper = shallow(<PropertyListings />)
    expect(wrapper.find('.results_container')).to.have.lengthOf(1)
  })

  it('Check for saved-properties container', () => {
    const wrapper = shallow(<PropertyListings />)
    expect(wrapper.find('.saved-properties_container')).to.have.lengthOf(1)
  })

  it('Results data state exists', () => {
    const wrapper = shallow(<PropertyListings />)
    expect(wrapper.state('savedResults')).to.exist
  })

  it('Property data state exists', () => {
    const wrapper = shallow(<PropertyListings />)
    expect(wrapper.state('propertyResults')).to.exist
  })

  it('Function Add property to saved state', () => {
    const wrapper = shallow(<PropertyListings />)
    wrapper.instance().setState({ 
      propertyResults: [{
        "price": "$726,500",
        "agency": {
          "brandingColors": {
            "primary": "#ffe512"
          },
          "logo": "public/images/agency_1.jpg"
        },
        "id": "1",
        "mainImage": "public/images/property_1.jpg"
      }]
    })

    wrapper.instance().addToSavedProperties('1')
    expect(wrapper.state('savedResults')[1]).to.have.property('id', '1')
  })

  it('Function Remove property from saved state', () => {
    const wrapper = shallow(<PropertyListings />)
    wrapper.instance().setState({
      savedResults: [{
        "price": "$726,500",
        "agency": {
          "brandingColors": {
            "primary": "#ffe512"
          },
          "logo": "public/images/agency_1.jpg"
        },
        "id": "1",
        "mainImage": "public/images/property_1.jpg"
      }]
    })

    wrapper.instance().removeFromSavedProperties('1')
    expect(wrapper.state('savedResults')).to.be.empty
  })
})