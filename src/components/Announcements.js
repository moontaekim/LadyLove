import React, { Component } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


const StyledAnnouncements = styled.div`
height:100%;
background-color:rgb(172,164,157);
display:flex;
flex-direction: column;
align-items:center;
`
const StyledIframe = styled.iframe`
	border: 5px outset black;
  margin: 10px;
`
export default class Announcements extends Component {
  render() {
    return (
      <StyledAnnouncements>
        <Fade>
          <StyledIframe width="520" height="415"
            src="https://www.youtube.com/embed/EvfFBukkvVM">
          </StyledIframe>
        </Fade>
        <Fade>
          <StyledIframe width="520" height="415"
            src="https://www.youtube.com/embed/cH3H3KsWd5k">
          </StyledIframe>
        </Fade>
        <Fade>
          <StyledIframe width="520" height="415"
            src="https://www.youtube.com/embed/Dmvg9RenGh4">
          </StyledIframe>
        </Fade>
      </StyledAnnouncements>
    )
  }
}
