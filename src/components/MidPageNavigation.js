import React, { Component } from 'react'
import styled from 'styled-components'

const StyledMidPageNavigation = styled.div`
  color: black;
  height: 8vh;
  font-size: 25px;
`

export default class MidPageNavigation extends Component {
  render() {
    return (
      <StyledMidPageNavigation>
        <a href="www.google.com" target="_blank">
        <i class="fa fa-soundcloud" aria-hidden="true"></i>
        </a>
        <i class="fa fa-spotify"aria-hidden="true"></i>
        <i class="fa fa-facebook-official" aria-hidden="true"></i>
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-youtube-play" aria-hidden="true"></i>
        <i class="fa fa-music" aria-hidden="true"></i>
      </StyledMidPageNavigation>
    )
  }
}
