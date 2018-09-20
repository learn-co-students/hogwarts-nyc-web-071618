import React, { Component } from 'react';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hoglist from './Hoglist'

class Container extends Component {
  constructor() {
    super()

    this.state = {
      hogs: hogs,
      displayedHogs: hogs
    }
  }

  sortedByName = () => {
    const sorted = this.state.displayedHogs.sort((a, b) => {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    this.setState({
      hogs: hogs,
      displayedHogs: sorted
    })
  }

  sortedByWeight = () => {
    const sorted = this.state.hogs.sort((a, b) => {
      var nameA = a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
      var nameB = b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    this.setState({
      hogs: hogs,
      displayedHogs: sorted
    })
  }

  sortedByGreased = () => {
    const sorted = this.state.hogs.filter(hog => { return hog.greased })
    this.setState({
      hogs: hogs,
      displayedHogs: sorted
    })
  }

  render() {
    return (
      <div className="Container">
        < Nav />
        <button onClick={this.sortedByName}>Sort By Name</button>
        <button onClick={this.sortedByWeight}>Sort By Weight</button>
        <button onClick={this.sortedByGreased}>Sort By If Greased</button>
        < Hoglist hogs={this.state.displayedHogs}/>
      </div>
    )
  }
}

export default Container;
