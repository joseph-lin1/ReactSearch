import React from 'react';
export default class Saved extends React.Component{

  
    constructor() {
        super();
    }
  render() {
    return(

      <div className="panel panel-primary">
				<div className="panel-heading">
					<h1 className="panel-title">Results</h1>
				</div>

				<div className="panel-body">
          <h1>Topic</h1>
          <input type="text"/>
          <h1>Start Year </h1>
          <input type="text"/>
          <h1>End Year</h1>
          <input type="text"/>
          <button> Search </button>
        </div>

      </div>

    );
  }

};