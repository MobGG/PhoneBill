import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      phoneBills: []
    };
  }

  getPhoneBill() {
    // axios.get('../test.json')
    axios.get('../phoneBill1.json')
      // axios.get('../phoneBill.json')
      .then((res) => {
        // console.log('test.json', res.config);
        console.log('test.json', res.data);
        // console.log('test.json', res.headers);
        // console.log('test.json', res.request);
        // console.log('test.json', res.status);
        // console.log('test.json', res.statusText);

        // this.state.phoneBills = res.data.phoneBill;

        this.setState({
          phoneBills: res.data.phoneBill
        })

        console.log('state.phoneBills', this.state.phoneBills);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  render() {
    this.getPhoneBill()
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
