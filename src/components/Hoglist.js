import React, { Component } from 'react';
import Hogcard from './Hogcard'

const Hoglist = props => {
  const mappedHogs = props.hogs.map((hog, index) => {
    return <Hogcard key={index} {...hog}/>
  })

  return (
    <div className="Hoglist">
      <ul>
        {mappedHogs}
      </ul>
    </div>
  )

}

export default Hoglist;
