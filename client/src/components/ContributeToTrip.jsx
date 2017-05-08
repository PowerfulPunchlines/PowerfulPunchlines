import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class ContributeToTrip extends React.Component {
  constructor(props) {
    super(props);
}

render() {
    return (
    	<div>
    		  <h1> Contribute to a Trip </h1>
    			<h4 id="contributeTripSubheader"> Stay Trippy Mayne! </h4>

   		<form id="contributeToTripParent">
   		<div id="contributeFirstHalf">

	    	<h3>Destination</h3>
	    	<h5> Date Range Options:</h5>

	    	<h3>Add a Comment</h3>
	    	 <label>
	          <input name="comment" type ="text"/><input type="submit" value="+"/><br/><br/>
	       </label>
	     </div>

	     <div id="contributeSecondHalf">
	     	<h3> Estimated Cost </h3>
	     	<h5> Activity Options </h5>
	     	<label>
	     		  Add an Activity <br/>
	          <input name="addActivity" type ="text" placeholder="Activity name"/><br/><br/>
	          <input name="description" type ="text" placeholder="Description/link"/><br/><br/>
	          <input name="addActivity" type ="text" placeholder="Cost"/><input type="submit" value="+"/><br/><br/>
	       </label>
	     </div>

   		</form> 	
 		</div>

    );
  }
}

export default ContributeToTrip;



















