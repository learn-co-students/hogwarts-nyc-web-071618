import React, { Component } from 'react';

export default class HogTile extends Component{
  constructor(props){
    super(props)
    this.state = {
      showDetails: false
    }
  }

  //
  // createPaths(){
  //   const reqSvgs = require.context ( '../hog-imgs', true, /\.svg$/ )
  //   const paths = reqSvgs.keys ()
  //
  //   const svgs = paths.map( path => reqSvgs ( path ) )
  //   return svgs
  // }

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
       Weight as ratio: {this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
      </li>
      <li>
        Highest medal achieved: {this.props['highest medal achieved']}
      </li>
    </ul>
    </div>
  }

  render(){
    return(
      <div>
        <img src={this.props.imgSrc} />
        <br></br>
        {this.props.name}
        <button onClick={(event) => this.setState({showDetails: true})}>View Details</button>
        {this.state.showDetails ? this.displayDetails(this.props) : null}
        <br></br>
        <br></br>
      </div>
    )
  }

}
