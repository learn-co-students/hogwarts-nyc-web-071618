import React from 'react'
import Hog from './Hog.js'


class HogContainer extends React.Component{


  renderHogs = () => {
    return this.props.allHogs.map((hog, idx) => {
      return <Hog className= "ui eight wide column" key={idx} {...hog}/>
    })
  }

  render(){
    return(
      <div className = "ui grid container">{this.renderHogs()}</div>
    )
  }
}

export default HogContainer
