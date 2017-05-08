import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class CreateTrip extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>
        <h1 id="createTripHeader">Add a Trip</h1>
        <h4 id="createTripSubheader">Get Trippy!</h4>

      <form id="createTripParent">
      <div id="firstHalfCreateTrip">
          <label>
            Trip Name <br/>           
            <input name="tripName" type="text" />
          </label> <br/><br/>

          <label>
            Destination <br/>
            <input name="tripName" type="text" /><br/><br/>
          </label>

          <label>
            Date Range <br/>
            <input name="dateRange" type ="text"/><input type="submit" value="+"/><br/><br/>
          </label>
      </div>
      <div id="secondHalfCreateTrip">
           <label>
            Estimated Cost <br/>
            <input name="estimatedCost" type="text" placeholder="$"/><br/><br/>
          </label>

          <label>
          Add an Activity <br/>
            <input name="activity" type ="text" placeholder="Activity name"/><br/><br/>
            <input name="activity" type ="text" placeholder="Description/Link"/><br/><br/>
            <input name="activity" type ="text" placeholder="Cost"/><input type="submit" value="+"/><br/><br/>
          </label>
      </div> <br/>
   </form>

          <input type="submit" value="Add a Trip" />       
      </div>


    )
  }
}

export default CreateTrip;
