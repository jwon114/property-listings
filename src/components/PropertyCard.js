import React from 'react'
import './PropertyCard.css'
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { green400, red400} from 'material-ui/styles/colors'

export default function PropertyCard(props) {
  const { agency, mainImage, price, id } = props.data
  const raisedButtonStyle = {}
  if (props.type === 'Add') { raisedButtonStyle.backgroundColor = green400 }
  if (props.type === 'Remove') { raisedButtonStyle.backgroundColor = red400 }
  const cardTextStyle = {
    fontSize: 20
  }
  const raisedButtonLabelStyle = {
    fontSize: 24,
    margin: 20
  }
  const cardHeaderStyle = {
    backgroundColor: agency.brandingColors.primary
  }
  return (
    <Paper className='propertyCard' zDepth={3}>
      <Card>
        <CardHeader 
          className='propertyCard__header' 
          style={cardHeaderStyle}>
            <img src={`images/${agency.logo}`} alt=""/>
        </CardHeader>
        <CardMedia className='propertyCard__image'>
          <img src={`images/${mainImage}`} alt="" style={{ width: '640px', height: 'auto' }}/>
        </CardMedia>
        <CardText 
          className='propertyCard__footer' 
          style={cardTextStyle}>
          {price}
        </CardText>
        <div className='propertyCard__overlay'>
          <div className='propertyCard__button_container'>
            <RaisedButton 
              className='propertyCard__button' 
              onClick={() => props.buttonAction(id)}
              style={raisedButtonStyle}
              label={`${props.type} Property`}
              labelStyle={raisedButtonLabelStyle}
            />
          </div>
        </div>
      </Card>
    </Paper>
  )
}