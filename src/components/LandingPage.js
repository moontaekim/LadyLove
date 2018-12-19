import React, { Component } from 'react'
import styled from 'styled-components'
import BandName from './BandName';
import MidPageNavigation from './MidPageNavigation';

const StyledParallax = styled.div`
background-color: #ff6e67;
background-image: url("https://i.imgur.com/sePFmAJ.jpg");  
height: 95vh; 
background-attachment: fixed;
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
      <MidPageNavigation/>
      </div>
    )
  }
}
