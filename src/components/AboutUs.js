import React, { Component } from 'react'
import styled from 'styled-components'

const StyledAboutUs = styled.div`
  background-color:white;
  height:100vh;
  width:100vw;
  display:flex;
  flex-direction:column;
`
const StyledImage = styled.img`
  width: 30vw;
`
const StyledBio = styled.div`
  display:flex;
  justify-content:space-evenly;
`
export default class AboutUs extends Component {
  render() {
    return (
      <StyledAboutUs>
        About Us
        <StyledBio>
          <div><StyledImage src="https://i.imgur.com/n46ONhd.jpg" /></div>
          <div>Zeke</div>
        </StyledBio>

        <StyledBio>
          <div>Ryan</div>
          <div><StyledImage src="https://i.imgur.com/Tv9GqHn.jpg" /></div>
        </StyledBio>

        <StyledBio>
          <div><StyledImage src="https://i.imgur.com/KfIg6Xc.jpg" /></div>
          <div>Matt</div>
        </StyledBio>

        <StyledBio>
          <div>Moon</div>
          <div><StyledImage src="https://i.imgur.com/HD3cCfW.jpg" /></div>
        </StyledBio>

      </StyledAboutUs>
    )
  }
}
