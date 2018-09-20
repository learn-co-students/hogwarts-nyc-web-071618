import React, { Component } from 'react';

export default class HogTile extends Component{
  constructor(props){
    super(props)
    this.state = {
      showDetails: false
    }
  }


  displayDetails(props){
    return <div>
    <ul>
      <li>
        Specialty: {this.props.specialty}
      </li>
      <li>
       {this.props.greased ? 'All greased up' : 'Needs some grease'}
      </li>
      <li>
       Weight as ratio: {this.props.weight}
      </li>
      <li>
        Highest medal achieved: {this.props['highest medal achieved']}
      </li>
    </ul>
    </div>
  }

  handleDetailsClick = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }))
  }

  render(){
    return(
      <div>
        <img src={this.props.imgSrc} />
        <br></br>
        {this.props.name}
        <br></br>
        <button onClick={this.handleDetailsClick}>{this.state.showDetails ? "Hide Details" : "View Details"}</button>
        {this.state.showDetails && this.displayDetails(this.props)}
        <br></br>
        <br></br>
      </div>
    )
  }

}
