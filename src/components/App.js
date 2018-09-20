import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogBrowser from './HogBrowser.js'
import Filter from './Filter.js'

class App extends Component {
  state = {
    filter:"",
    sort:""
  }
  getHogs = ()=>{
    let newHogs = hogs.map(hog=>hog)
    if( this.state.filter ){
      newHogs = newHogs.filter((hog)=>{
        return hog.greased === true
      })
    }
    let sort = this.state.sort
    if( sort !== "" ){
      newHogs.sort((a,b)=>{
        let a1 = a[sort]
        let b1 = b[sort]
        if( a1 > b1 )
          return 1;
        else if( a1 < b1 )
          return -1;
        return 0
      })
    }
    return newHogs
  }
  changeFilter = (event)=>{
    this.setState({
      filter:event.target.checked
    })
  }
  changeSort = (event)=>{
    this.setState({
      sort:event.target.value
    })
  }
  render() {
    return (
      <div className="ui grid container App">
        <div className="sixteen wide column centered">
          < Nav />
        </div>
        <div className="sixteen wide column centered">
          <Filter greased={this.state.filter} changeFilter={this.changeFilter} changeSort={this.changeSort} />
        </div>
        <div className="fourteen wide column centered">
          < HogBrowser hogs={this.getHogs()} />
        </div>
      </div>
    )
  }
}

export default App;
