import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hog from './Hog.js'
import HogContainer from './HogContainer.js'

class App extends Component {

  state = {
    allHogs: hogs,
    selected: false
  }

  sortName = () => {

    const sortedHogs = this.state.allHogs.sort(function(a, b){
      let NameA = a.name
      let NameB = b.name

      if (NameA < NameB) {
   return -1;
 }
 if (NameA > NameB) {
   return 1;
    }
  })

    this.setState({
      allHogs: sortedHogs
    })
  }

  sortWeight = () => {

    const sortedHogs = this.state.allHogs.sort(function(a, b){
      return b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
  })

    this.setState({
      allHogs: sortedHogs
    })
  }


  sortGreased = () => {
  const sortedGreased = this.state.allHogs.filter(hog => hog.greased)
  console.log(sortedGreased)

this.setState({ selected: !this.state.selected}, () =>{
    this.state.selected ? this.setState({allHogs: sortedGreased}) : this.setState({allHogs: hogs})
})



  }

  render() {
    return (
      <div className="App">
          <Nav sortName={this.sortName} sortWeight={this.sortWeight} sortGreased={this.sortGreased}/>
          <HogContainer allHogs={this.state.allHogs}/>
      </div>
    )
  }
}

export default App;
