import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

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
const StyledLink = styled(Link)`

`

export default class NavBar extends Component {
  render() {
    return (
      <StyledNavBar>
        <StyledLink activeClass="active" to="home" spy={true} smooth={true} duration={500}>Home</StyledLink>
        <StyledLink activeClass="active" to="aboutUs" spy={true} smooth={true} duration={500}>About Us</StyledLink>
        <StyledLink activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</StyledLink>
        <StyledLink activeClass="active" to="music" spy={true} smooth={true} duration={500} >Music</StyledLink>
        <StyledLink activeClass="active" to="events" spy={true} smooth={true} duration={500}>Events</StyledLink>
      </StyledNavBar>
    )
  }
}
