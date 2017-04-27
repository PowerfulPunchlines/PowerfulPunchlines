  import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userInfo: {}
    }
    this.getProfile = this.getProfile.bind(this);
  }

  componentDidMount() {
    this.getProfile();
  }

  getProfile() {
      axios.get('/profile')
        .then(result => {
           console.log(result.data)
        })
        .catch(error => {
            console.error(error);
        })
  }

  render() {
    return (
        <div>
            <h3>Profile Page</h3>
        </div>
    )
  }
}

export default Profile;