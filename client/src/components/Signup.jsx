import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router} from 'react-router-dom';
import Header from"./Header";
import axios from 'axios';
import App from "./App";


class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: {}
    }

    this.submitSignup = this.submitSignup.bind(this);
    this.updateInputs = this.updateInputs.bind(this);
  }
//make a post request to the server. the server will put it into the databse.
  submitSignup(signup) {
    // e.preventDefault();
    axios.post('/signup', {username: signup.username, password: signup.password})
      .then(({response}) => {
        //this line will take you to /profile
        this.props.history.push('/profile');
      })
      .catch(err => {
        console.error("error in post entries", err);
      })

  }

 //updates the state per letter, event = onChange
  updateInputs(e) {
    var userInput = this.state.userInput;
    var name = e.target.name;
    var value = e.target.value;

    userInput[name] = value;
    this.setState({userInput});
  }

  render() {
    return (
      <div>
        <div>
          <Header />

          <h4>Sign up</h4>
          <form onSubmit={this.submitSignup.bind(this, this.state.userInput)}>
          <label>
            Username:
            <input name="username" type="text" onChange={this.updateInputs}/>
          </label>
          <label>
            Password:
            <input name="password" type="password" onChange={this.updateInputs}/>
          </label>
          <input type="submit" value="Submit" />
        </form>

        </div>
      </div>
    )
  }
}

export default Signup;
