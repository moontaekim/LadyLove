import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import Typing from 'react-typing-animation';


const StyledBandName = styled.div`
  color:white;
  font-size: 30px;
  font-family: 'Quicksand', sans-serif;
  width: 26vw;
`

export default class NavBar extends Component {
  render() {
    return (
      <Typing> 
        <StyledBandName>
        Lady Love <div>&</div> The Losing Streak.
        </StyledBandName>
      </Typing>
    )
  }
}
