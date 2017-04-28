  import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userTrip: {}
    }
    this.getProfile = this.getProfile.bind(this);
  }

  componentDidMount() {
    this.getProfile();
  }

  getProfile() {
      axios.get('/profile')
        .then(result => {
            var userTrip = this.state.userTrip;
            userTrip['tripName'] = result.data[0].tripName;
            console.log(userTrip);
            this.setState({userTrip})
        })
        .catch(error => {
            console.error(error);
        })
  }

  render() {
    return (
        <div>
            <h3>Profile Page</h3>
            <div>{this.state.userTrip.tripName}</div>
        </div>
    )
  }
}

export default Profile;