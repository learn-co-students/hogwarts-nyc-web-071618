import React, { Component } from 'react';
import HogTile from './HogTile'
import v4 from 'uuid'

export default class HogContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      sortByName: false,
      sortByWeight: false,
      showGreased: false
    }
  }

  changeSortByName = () => {
    if(this.state.sortByWeight && !this.state.sortByName){
      this.setState(prevState => ({
        sortByName: !prevState.sortByName,
        sortByWeight: !prevState.sortByWeight
      }))
    }
    else{
      this.setState(prevState => ({
        sortByName: !prevState.sortByName
      }))
    }

  }

  changeSortByWeight = () => {
    if(this.state.sortByName && !this.state.sortByWeight){
      this.setState(prevState => ({
        sortByName: !prevState.sortByName,
        sortByWeight: !prevState.sortByWeight
      }))
    }
    else{
      this.setState(prevState => ({
        sortByWeight: !prevState.sortByWeight
      }))
    }
  }

  changeGreased = () => {
    this.setState(prevState => ({
      showGreased: !prevState.showGreased
    }))
  }

  renderSortedAndCheckGreased(){
    let sorted = this.props.hogs.slice()

    sorted.sort(function(a,b){
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    })

    if(this.state.sortByWeight){
      sorted = sorted.sort(function(a,b){
        return b.weight - a.weight
      })
    }

    if(this.state.showGreased){
      sorted = sorted.filter((hog) => hog.greased === true)
    }

    return sorted.map(function(hog){
      return < HogTile key={v4()}
               imgSrc={'../hog-imgs/' + hog.name.split(' ').join('_').toLowerCase() + '.jpg'}
               {...hog} />
    })
  }

  renderUnsortedAndCheckGreased(){
    let unsorted = this.props.hogs.slice()

    if(this.state.sortByWeight){
      unsorted = unsorted.sort(function(a,b){
        return b.weight - a.weight
      })
    }

    if(this.state.showGreased){
      return unsorted.filter((hog) => hog.greased === true).map(function(hog){
        return < HogTile key={v4()}
                 imgSrc={'../hog-imgs/' + hog.name.split(' ').join('_').toLowerCase() + '.jpg'}
                 {...hog} />
      })
    }

    return unsorted.map(function(hog){
      return < HogTile key={v4()}
               imgSrc={'../hog-imgs/' + hog.name.split(' ').join('_').toLowerCase() + '.jpg'}
               {...hog} />
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.changeSortByName}>{this.state.sortByName ? "Unsort by Name" : "Sort by Name"}</button>
        <button onClick={this.changeSortByWeight}>{this.state.sortByWeight ? "Unsort by Weight" : "Sort by Weight"}</button>
        <button onClick={this.changeGreased}>{this.state.showGreased ? "Show All Pigs" : "Show Greased Pigs"}</button>
          {this.state.sortByName ? this.renderSortedAndCheckGreased() : this.renderUnsortedAndCheckGreased()}
      </div>

    )
  }

}
