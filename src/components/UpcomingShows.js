import React, { Component } from 'react'
import styled from 'styled-components'

const StyledUpcomingShows = styled.div`
  text-align: center;
  border: 1px black solid;
  padding-bottom: 15px;
  background:black;
  color:white;
`

export default class UpcomingShows extends Component {
  render() {
    return (
      <StyledUpcomingShows name="events">
        <h1>Upcoming Shows</h1>
        <div>04/27/2019: Aisle 5, GA </div>
      </StyledUpcomingShows>
    )
  }
}
