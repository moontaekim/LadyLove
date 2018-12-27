import React, { Component } from 'react'
import styled from 'styled-components'

const StyledMidPageNavigation = styled.div`
  height: 5vh;
  font-size: 25px;
  display:flex;
  justify-content:space-evenly;
  align-items: center;
    @media (max-width: 500px){
  height: 9vh;
}
`
const StyledLink = styled.a`
  color: inherit;
`

export default class MidPageNavigation extends Component {
  render() {
    return (
      <StyledMidPageNavigation>
        <StyledLink href="https://soundcloud.com/user-444365396" target="_blank">
        <i class="fa fa-soundcloud" aria-hidden="true"></i>
        </StyledLink>
        <StyledLink href="https://open.spotify.com/artist/4zOwQfdpFBTa9yaimVUrPn" target="_blank">
        <i class="fa fa-spotify"aria-hidden="true"></i>
        </StyledLink>
        <StyledLink href="https://www.facebook.com/LadyLoveLosingStreak/" target="_blank">
        <i class="fa fa-facebook-official" aria-hidden="true"></i>
        </StyledLink>
        <StyledLink href="https://www.instagram.com/ladylovelosingstreak/" target="_blank">
        <i class="fa fa-instagram" aria-hidden="true"></i>
        </StyledLink>
        <StyledLink href="https://www.youtube.com/channel/UCheLsE9OnxznZXQheBbD_8A" target="_blank">
        <i class="fa fa-youtube-play" aria-hidden="true"></i>
        </StyledLink>
        <StyledLink href="https://itunes.apple.com/ca/artist/lady-love-the-losing-streak/1226720635" target="_blank">
        <i class="fa fa-music" aria-hidden="true"></i>
        </StyledLink>
        <StyledLink href="mailto:moontae1992@email.com">
        <i class="fa fa-envelope" aria-hidden="true"></i>
      </StyledLink>
      </StyledMidPageNavigation>
    )
  }
}
