import React, { Component } from 'react'
var snake = require('to-snake-case');

class HogTile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }
  }
  render(){
    const handleShowClick = (e) => {
      this.state.show ? this.setState({show: false}) :  this.setState({show: true})
    }
    return (
      <div className="pigTile">
        <img src={`/hog-imgs/${snake(this.props.hog.name.toLowerCase())}.jpg`} alt='{this.props.hog.name}'/>
        <p>{this.props.hog.name}</p>
        <button onClick={handleShowClick}>clicky clicky for deets on a piggy</button>
        {this.state.show ?
          <div>
          <p>Specialty: {this.props.hog.specialty}</p>
          <p>Weight Ratio: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
          <p>Medal Achievement: {this.props.hog['highest medal achieved']}</p>
          </div> :
          null}
      </div>
    )
  }
}

export default HogTile
