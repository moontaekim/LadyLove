import React, { Component } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


const StyledAnnouncements = styled.div`
height:100%;
background-color:rgb(172,164,157);
display:flex;
flex-direction: column;
align-items:center;
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
const StyledEndless = styled.img`
	border: 5px outset black;
  margin: 10px 10px 10px 10px;
  position:relative;
  width: 520px;
  height: 415px;
  @media (max-width: 500px){
    width: 85vw;
    height: 37vh;
}
`
const StyledHeader = styled.h2`
font-family: 'Charm', cursive;
font-family: 'Quicksand', sans-serif;
font-family: 'Nunito', sans-serif;  
  border-bottom: 2px solid #eee;
  padding-bottom: .05em;
  width: 80vw;
  text-align: center;
  letter-spacing: 2px;
`

export default class Announcements extends Component {
  render() {
    return (
      <StyledAnnouncements name="music">
        <Fade>
          <StyledHeader> Endless Paradise. 4/26.</StyledHeader>
       
          <a href="https://imgur.com/Y6GUx3h">
            <StyledEndless src="https://i.imgur.com/Y6GUx3h.gif" title="source: imgur.com" />
          </a>
        
          <StyledIframe 
            src="https://www.youtube.com/embed/EvfFBukkvVM">
          </StyledIframe>
        </Fade>
        <Fade>
          <StyledIframe 
            src="https://www.youtube.com/embed/cH3H3KsWd5k">
          </StyledIframe>
        </Fade>
        <Fade>
          <StyledIframe 
            src="https://www.youtube.com/embed/Dmvg9RenGh4">
          </StyledIframe>
        </Fade>
      </StyledAnnouncements>
    )
  }
}
