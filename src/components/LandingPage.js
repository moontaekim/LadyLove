import React, { Component } from 'react'
import styled from 'styled-components'
import BandName from './BandName';
import MidPageNavigation from './MidPageNavigation';
import NavBar from './NavBar';
import Announcements from './Announcements';
import AboutUs from './AboutUs';

const StyledParallax = styled.div`
background-color: #ff6e67;
background-image: url("https://i.imgur.com/2CKY8Sm.jpg");  
background-size:100vw;
height: 100vh; 
background-attachment: fixed;
background-position: center;
`
const StyledHeader = styled.div`
display:flex;
justify-content:space-between;
position:fixed;
background-color:rgba(172,164,157, 0.4);
z-index: 99999;

`
const StyledMidPage = styled.div`
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  background:white;
  z-index: 99999;

`

export default class LandingPage extends Component {
  render() {
    return (
      <div name="home">
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
        <StyledMidPage>
        <MidPageNavigation />
        </StyledMidPage>
        <AboutUs/>
        <Announcements/>
      </div>
    )
  }
}
