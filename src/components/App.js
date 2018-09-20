import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogPen from './HogPen'
import SortFilterButton from './SortFilterButton'



class App extends Component {
  constructor(){
    super()

    this.state ={
      hogs: hogs
    }
  }
  render() {
    const hogWeightKey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    const handleSortByName = () => {
      const hogsByName = hogs.sort(function(a, b) {
        var nameA = a.name
        var nameB = b.name
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
      this.setState({hogs: hogsByName})
    }
    const handleSortByWeight = () => {
      const hogsByWeight = hogs.sort(function(a, b) {
        return b[hogWeightKey] - a[hogWeightKey];
      })
      this.setState({hogs: hogsByWeight})
    }
    const handleToggleGreased = (e) => {
      const greasedHogs = hogs.filter(hog => hog.greased === true)
      this.setState({hogs: greasedHogs})
    }
    return (
      <div className="App">
          < Nav />
          < SortFilterButton handleSortByName={handleSortByName} handleSortByWeight={handleSortByWeight} handleToggleGreased={handleToggleGreased}/>
          < HogPen hogs={this.state.hogs} />
      </div>
    )
  }
}

export default App;
