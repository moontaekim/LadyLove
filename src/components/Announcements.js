import React, { Component } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


const StyledAnnouncements = styled.div`
height:100%;
background-color:rgb(172,164,157);
display:flex;
flex-direction: column;
align-items:center;
color:white;
font-family: 'Charm', cursive;
font-family: 'Quicksand', sans-serif;
font-family: 'Nunito', sans-serif;
`
const StyledIframe = styled.iframe`
	border: 5px outset black;
  margin: 20px 10px 10px 10px;
  position:relative;
  width: 520px;
  height: 415px;
  @media (max-width: 500px){
    width: 85vw;
    height: 50vh;
}
`
export default class Announcements extends Component {
  render() {
    return (
      <StyledAnnouncements name="music">
        <Fade>
          <h1>Upcoming News</h1>
          <div>04/27/2019: we are headlining aisle 5 </div>
          <div> Check out our new song Brave Friend below!</div>
          <StyledIframe 
            src="https://www.youtube.com/embed/EvfFBukkvVM">
          </StyledIframe>
        </Fade>
        <div> Check out our new song Brave Friend below!</div>
        <Fade>
          <StyledIframe 
            src="https://www.youtube.com/embed/cH3H3KsWd5k">
          </StyledIframe>
        </Fade>
        <div>Dark Blue Lies recorded in Athens,GA.</div>
        <Fade>
          <StyledIframe 
            src="https://www.youtube.com/embed/Dmvg9RenGh4">
          </StyledIframe>
        </Fade>
      </StyledAnnouncements>
    )
  }
}
