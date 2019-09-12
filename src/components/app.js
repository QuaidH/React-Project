import React, { Component } from 'react';
import moment from "moment";
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super()

    this.getPortfolioItems = this.getPortfolioItems.bind(this);
  }
  getPortfolioItems() {
 
// Make a request for a user with a given ID
axios.get("https://quaidholder.devcamp.space/portfolio/portfolio_items")
  .then(response => {
    // handle success
    console.log("response data, response");
  })
  .catch(error => {
    // handle error
    console.log(error);
  })
}

  render() {
    this.getPortfolioItems();
    return (
      <div className='app'>
        <h1>Quaid Holder Mate</h1>
      <div>
      {moment().format('MMMM Do YYYY, h:mm:ss a')}
      </div>
    </div>
    );
  }
}
