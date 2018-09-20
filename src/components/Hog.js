import React from 'react'



class Hog extends React.Component{

  state = {
    selected: false
  }

  getImage = hogName => {
      let formattedName = hogName
        .split(" ")
        .join("_")
        .toLowerCase();
      let pic = require(`../hog-imgs/${formattedName}.jpg`);
      return pic;
    };

    handleClick = event =>{
      this.setState({
        selected: !this.state.selected
      })
    }

    displayDetails = () =>{
    return this.state.selected ?
      <div>
        <p>{this.props.specialty}</p>
        <p>{this.props.greased}</p>
        <p>{this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
        <p>{this.props['highest medal achieved']}</p>
      </div> :
      null
    }

  render(){
    return(
      <div className = 'pigTile'>
        <h2>{this.props.name}</h2>
        <img src={this.getImage(this.props.name)} alt ='hog' onClick={this.handleClick}/>
        {this.displayDetails()}
      </div>
    )
  }
}

export default Hog
