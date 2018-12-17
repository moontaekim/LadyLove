import React, { Component } from 'react'
import styled from 'styled-components'
import BandName from './BandName';

const StyledParallax = styled.div`
background-color: #ff6e67;
background-image: url("https://i.imgur.com/BZ16wC6.jpg");  
height: 100vh; 
background-attachment: fixed;
height:100vh;
background-position: center;
`
const StyledBottom = styled.div`
color:white;
height: 100vh;
`

export default class LandingPage extends Component {
  render() {
    return (
      <div>
      <StyledParallax>
        <BandName/>
      </StyledParallax>
      <StyledBottom>sadfasd</StyledBottom>
      </div>
    )
  }
}
