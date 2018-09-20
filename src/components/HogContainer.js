import React, { Component } from 'react';
import HogTile from './HogTile'

export default class HogContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      sorted: false,
      showGreased: false
    }
  }


  renderSortedAndGreased(){
    let sorted = this.props.hogs.sort(function(a,b){
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    })

    if(this.state.showGreased){
      sorted = sorted.filter((hog) => hog.greased === true)
    }

    return sorted.map(function(hog){
      return < HogTile key={hog.id}
               imgSrc={'../hog-imgs/' + hog.name.split(' ').join('_').toLowerCase() + '.jpg'}
               {...hog} />
    })
  }

  renderUnsortedAndGreased(){
    if(this.state.showGreased){
      return this.props.hogs.filter((hog) => hog.greased === true).map(function(hog){
        return < HogTile key={hog.id}
                 imgSrc={'../hog-imgs/' + hog.name.split(' ').join('_').toLowerCase() + '.jpg'}
                 {...hog} />
      })
    }

    return this.props.hogs.map(function(hog){
      return < HogTile key={hog.id}
               imgSrc={'../hog-imgs/' + hog.name.split(' ').join('_').toLowerCase() + '.jpg'}
               {...hog} />
    })
  }

  render(){
    return(
      <div>
        <button onClick={(event) => this.setState({sorted: true})}>Sort by Name</button>
        <button onClick={(event) => this.setState({showGreased: true})}>Show Greased Pigs</button>
          {this.state.sorted ? this.renderSortedAndGreased() : this.renderUnsortedAndGreased()}
      </div>

    )
  }

}
