import React, { Component } from 'react'
import styled from 'styled-components'

const StyledAboutUs = styled.div`
  background-color:white;
  height:100%;
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
  margin: 6px;
  font-family: 'Charm', cursive;
  font-family: 'Quicksand', sans-serif;
  font-family: 'Nunito', sans-serif;
  letter-spacing: 1.5px;
`
export default class AboutUs extends Component {
  render() {
    return (
      <StyledAboutUs name="aboutUs">
        <StyledBio>
          <div><StyledImage src="https://i.imgur.com/n46ONhd.jpg" /></div>
          <div>
            <span>Zeke</span>
            <div>ZEKE IS A FucKING Loser</div>
          </div>
        </StyledBio>

        <StyledBio>
          <div>
            <span>Ryan</span>
            <div>Ryan IS A FucKING Loser</div>
          </div>
          <div><StyledImage src="https://i.imgur.com/Tv9GqHn.jpg" /></div>
        </StyledBio>

        <StyledBio>
          <div><StyledImage src="https://i.imgur.com/KfIg6Xc.jpg" /></div>
          <div>
            <span>Matt</span>
            <div>Matt IS A FucKING Loser</div>
          </div>
        </StyledBio>

        <StyledBio>
          <div>
            <span>Moon</span>
            <div>Moon IS A FucKING Loser</div>
          </div>
          <div><StyledImage src="https://i.imgur.com/HD3cCfW.jpg" /></div>
        </StyledBio>

      </StyledAboutUs>
    )
  }
}
