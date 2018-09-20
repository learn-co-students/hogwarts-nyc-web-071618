

import React,  {Component} from 'react'


function getImage(name){
  let imgname = name.toLowerCase().split(" ").join("_") + ".jpg"
  return require("../hog-imgs/"+imgname)
}


export default class HogTile extends Component {

  state = {
    isShow : false,
    isShowCard: true
  }
  // constructor(props){
  //   super(props)
  // }
  onDetailClick = ()=>{
    this.setState({
      isShow: !this.state.isShow
    })
  }

  toggleVisulization = ()=>{
    this.setState((prevState)=>{
      return {isShowCard: !prevState.isShowCard}
    })
  }
  render(){
    let key1 = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    let key2 = 'highest medal achieved'
    return (
      <div className="ui card pigTile" >
        <button className="ui button small" onClick={this.toggleVisulization} >{this.state.isShowCard?"Hide":"Show"}</button>
        <div style={{display: this.state.isShowCard?"block":"none" } }>
          <header>
            {this.props.name}
          </header>
          <div className="image">
            <img src={getImage(this.props.name)} alt="" />
          </div>
          <div className="ui extra content">
            <button className="ui button small" onClick={this.onDetailClick} >View Detail</button>
            {
              this.state.isShow && (
                <div>
                <p>Grease:{this.props.greased.toString()}</p>
                <p>specialty:{this.props.specialty}</p>
                <p>{key1}:{this.props[key1]}</p>
                <p>{key2}:{this.props[key2]}</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}
