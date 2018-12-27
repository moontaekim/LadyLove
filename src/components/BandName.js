import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import Typing from 'react-typing-animation';


const StyledBandName = styled.div`
  color:white;
  font-size: 2.5vw;
  font-family: 'Charm', cursive;
  font-family: 'Quicksand', sans-serif;
  font-family: 'Nunito', sans-serif;
  width: 50vw;
  height: 3rem; 
  display:flex;
  align-items:center;
  letter-spacing:3px;
  padding-left:10px;
  @media (max-width: 500px){
    font-size: 1.9vw;
}
`

export default class NavBar extends Component {
  render() {
    return (
      <Typing>
        <StyledBandName>
          Lady Love & The Losing Streak.
        </StyledBandName>
      </Typing>
    )
  }
}
