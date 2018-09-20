import React, { Component } from 'react'
import HogTile from './HogTile'

class HogPen extends Component {

  render() {
    const hogIteration = this.props.hogs.map((hog, idx) => {
      return <HogTile key={idx} hog={hog} />
    })
    return (
      <div className="ui grid container">
        {hogIteration}
      </div>
      )
  }
}

export default HogPen
