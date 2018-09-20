

import React from 'react'


function Filter({greased, changeSort, changeFilter}){

  return (
    <div className="filterWrapper">
			<div className="ui menu">
				<div className="ui item">
					<label>Sort by </label>
				</div>
        <div className="ui item">
          <select onChange={changeSort} className="ui selection dropdown">
            <option value=""></option>
            <option value="name">name</option>
            <option value="weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water">weight</option>
          </select>

        </div>
        <div className="ui item">
  				<label>Greased Pigs Only?</label>
  			</div>
        <div className="ui item">
          <input
						className="ui toggle checkbox"
						checked={greased}
						onChange={changeFilter}
						type="checkbox"
					/>
        </div>
        <div className="ui right menu">
          <button className="ui blue basic button compact">Show</button>
        </div>
      </div>
    </div>
  )
}

export default Filter
