import React, { Component } from 'react'
import styled from 'styled-components'
import BandName from './BandName';
import MidPageNavigation from './MidPageNavigation';
import NavBar from './NavBar';
import Announcements from './Announcements';

const StyledParallax = styled.div`
background-color: #ff6e67;
background-image: url("https://i.imgur.com/2CKY8Sm.jpg");  
background-size:100vw;
height: 95vh; 
background-attachment: fixed;
background-position: center;
`
const StyledHeader = styled.div`
display:flex;
justify-content:space-between;
position:fixed;
background-color:rgba(172,164,157, 0.4);

`

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <StyledParallax>
          <StyledHeader>
            <div>
              <BandName />
            </div>
            <div>
              <NavBar />
            </div>
          </StyledHeader>
        </StyledParallax>
        <MidPageNavigation />
        <Announcements/>
      </div>
    )
  }
}
