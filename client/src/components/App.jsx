  import React from 'react';
import ReactDOM from 'react-dom';
import Header from"./Header";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div id="frontpic">
            <img src="images/Front_page_pic.jpg"></img>
        </div>
      </div>
    )
  }
}

export default App;
