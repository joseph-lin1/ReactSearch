import React from 'react';


export default class Saved extends React.Component{

    constructor() {
        super();
    
    };

    render() {

        return(

            <div className="panel panel-primary">
				<div className="panel-heading">
					<h1 className="panel-title">Saved Articles</h1>
				</div>

				<div className="panel-body">
					<div class="container"><h1>Aids Cured </h1> <button>Remove</button></div>
					<p> Notes </p>
					<div class="container"><h1>Aids Cured </h1> <button>Remove</button></div>
					<p> Notes </p>
					
				</div>
			</div>

        );
    }

};