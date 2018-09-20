import React, { Component } from 'react';

class SortFilterButton extends Component {



  render() {

    return (
      <div>
      <button className='clickybutton' onClick={this.props.handleSortByName}>THEY GOT A NAME??</button>
      <button className='clickybutton' onClick={this.props.handleSortByWeight}>FIND THE BIG 'UNS</button>
      <button className='clickybutton' onClick={this.props.handleToggleGreased}>GET THOSE GREASY BOIS</button>
      </div>
    )
  }
}

export default SortFilterButton
