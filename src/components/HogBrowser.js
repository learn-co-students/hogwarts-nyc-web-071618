

import React, {Component} from 'react'
import HogTile from './HogTile.js'

export default class HogBrowser extends Component {


  renderHogTiles = ()=>{
    return this.props.hogs.map( (hog)=>{
      return <HogTile key={hog.name} {...hog} />
    })
  }

  render(){
    return (
      <div className="ui container cards">
        {this.renderHogTiles()}
      </div>
    )
  }
}
