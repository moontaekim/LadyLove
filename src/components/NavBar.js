import React, { Component } from 'react'
import styled from 'styled-components'

const StyledNavBar = styled.div`
color:white;
display:flex;
justify-content:space-evenly;
align-items:center;
width: 50vw;
height: 3rem;
font-family: 'Charm', cursive;
font-family: 'Quicksand', sans-serif;
font-family: 'Nunito', sans-serif;
`

export default class NavBar extends Component {
  render() {
    return (
      <StyledNavBar>
        <a>Home</a>
        <div>About Us</div>
        <div>Contact</div>
        <div>Music</div>
        <div>Events</div>
      </StyledNavBar>
    )
  }
}
