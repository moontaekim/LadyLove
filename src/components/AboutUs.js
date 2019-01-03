import React, { Component } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const StyledAboutUs = styled.div`
  background-color:white;
  height:100%;
  width:100vw;
  display:flex;
  flex-direction:column;
  margin-bottom: 10vh;
`
const StyledImage = styled.img`
  width: 30vw;
  border:3px solid #021a40;
  @media (max-width: 500px){
    width: 40vw;
}
`
const StyledBio = styled.div`
  display:flex;
  margin: 6px;
  justify-content:space-evenly;
  font-family: 'Charm', cursive;
  font-family: 'Quicksand', sans-serif;
  font-family: 'Nunito', sans-serif;
  letter-spacing: 1.5px;
`
const StyledName = styled.span`
  font-size: 2rem;
  @media (max-width: 500px){
 font-size: 1.3rem;
}
`
const StyledAbout = styled.div`
 width: 30vw;
 @media (max-width: 500px){
 font-size: 0.7rem;
 width: 40vw;
}
`
const StyledInstrument = styled.i`
  font-size: 1rem;
`

export default class AboutUs extends Component {
  render() {
    return (
      <StyledAboutUs name="aboutUs">
      <Fade duration={3000}>
        <StyledBio>
          <div><StyledImage src="https://i.imgur.com/n46ONhd.jpg" /></div>
          <div>
            <StyledName>Zeke <StyledInstrument>Guitar/Vocals</StyledInstrument></StyledName>
            <StyledAbout>Severe ADHD. Half Jew. Half Ginger. Half Yellow Lab. Smokes meth everyday. Loves saying "jesus christ"</StyledAbout>
          </div>
        </StyledBio>
        </Fade>

        <Fade duration={3000}>
        <StyledBio>
          <div>
            <StyledName>Ryan <StyledInstrument>Drums</StyledInstrument></StyledName>
            <StyledAbout>Has dope tats. Will buy your junk. Smokes Juul. Cultured because have been to India. Doesnt own a drumset</StyledAbout>
          </div>
          <div><StyledImage src="https://i.imgur.com/Tv9GqHn.jpg" /></div>
        </StyledBio>
        </Fade>

        <Fade duration={3000}>
        <StyledBio>
          <div><StyledImage src="https://i.imgur.com/KfIg6Xc.jpg" /></div>
          <div>
            <StyledName>Matt <StyledInstrument>Bass/Vocals</StyledInstrument></StyledName>
            <StyledAbout>Hates picking up the phone. Half Jew. 3/4 Ginger. Can run a mile in 5:30. Loves his dog Oregon. Lost his shoes after a wild night of ketamine.</StyledAbout>
          </div>
        </StyledBio>
        </Fade>

        <Fade duration={3000}>
        <StyledBio>
          <div>
            <StyledName>Moon <StyledInstrument>Guitar/Vocals</StyledInstrument></StyledName>
            <StyledAbout>Long haired exotic korean. Uses two in one shampoo. Loves Radiohead. Will steal your bitch.</StyledAbout>
          </div>
          <div><StyledImage src="https://i.imgur.com/HD3cCfW.jpg" /></div>
        </StyledBio>
        </Fade>

      </StyledAboutUs>
    )
  }
}
