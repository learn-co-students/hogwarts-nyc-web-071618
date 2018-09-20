import React, { Component } from 'react';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hoglist from './Hoglist'

class Container extends Component {
  constructor() {
    super()
  }

  // sortHogsByName = () => {
  //   hogs.filter((hog) => {
  //     hog.sort()
  //   })
  // }

  render() {
    // console.log(this.sortHogsByName())
    return (
      <div className="Container">
        < Nav />
        <button>Sort By Name</button>
        <button>Sort By Weight</button>
        <button>Sort By If Greased</button>
        < Hoglist hogs={hogs}/>
      </div>
    )
  }
}

export default Container;
