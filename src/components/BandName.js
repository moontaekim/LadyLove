import React, { Component } from 'react'
import styled from 'styled-components'

const StyledBandName = styled.div`
  color:white;
  font-size: 30px;
  font-family: 'Quicksand', sans-serif;
  width: 25vw;
`

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <StyledBandName>
        Lady Love <div>&</div> The Losing Streak
        </StyledBandName>
      </div>
    )
  }
}
