import React, { Component } from 'react';

export default class HogTile extends Component{
  constructor(props){
    super(props)
    this.state = {
      showDetails: false,
      hidden: false
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

  handleHideClick = () => {
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }))
  }

  renderNonHiddenCard(){
      return(<div>
              <img src={this.props.imgSrc} />
                <br></br>
              {this.props.name}
                <br></br>
              <button onClick={this.handleDetailsClick}>{this.state.showDetails ? "Hide Details" : "View Details"}</button>
                <br></br>
              {this.state.showDetails && this.displayDetails(this.props)}
            </div>)
  }

  render(){
    return(
      <div className="ui eight wide column">
        <div className="pigTile">
          <button onClick={this.handleHideClick}>{this.state.hidden ? "Show Hog" : "Hide Hog"}</button>
          {!this.state.hidden && this.renderNonHiddenCard()}
        </div>
      </div>
    )
  }

}
