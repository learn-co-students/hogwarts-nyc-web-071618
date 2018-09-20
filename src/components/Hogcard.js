import React, { Component } from 'react';
import Snake from 'to-snake-case';
var snake = require('to-snake-case')


class Hogcard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showDetails: false
    }
  }

  handleShowDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  render() {
    if(this.state.showDetails) {
      return (
        <div className="Hogcard" onClick={this.handleShowDetails}>
          <h3>Name: {this.props.name}</h3>
          <img alt={`${this.props.name}`} src={require(`../hog-imgs/${snake(this.props.name)}.jpg`)}/>
          <p>Specialty: {this.props.specialty}</p>
          <p>Greased: {this.props.greased.toString()}</p>
          <p>Weight: {this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
          <p>Award: {this.props['highest medal achieved']}</p>
        </div>
      )
    } else {
      return (
        <div className="Hogcard" onClick={this.handleShowDetails}>
          <h3>Name: {this.props.name}</h3>
          <img alt={`${this.props.name}`} src={require(`../hog-imgs/${snake(this.props.name)}.jpg`)}/>
        </div>
      )
    }
  }

} // end of Hogcard class

export default Hogcard;
