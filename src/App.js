import React, { Component } from 'react';
import './App.css';
import List from './List';
import axios from 'axios';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      phoneBills: []
    };
  }

  getPhoneBill() {
    axios.get('../phoneBill.json')
      .then((res) => {
        // console.log('test.json', res.data);
        this.setState({
          phoneBills: res.data.phoneBill
        });
        // console.log('state.phoneBills', this.state.phoneBills);
      })
      .catch((err) => {
        console.error(err);
        alert("phoneBill.json not found.");
      })
  }

  componentDidMount() {
    this.getPhoneBill();
  }

  render() {
    return (
      <div>
        <h1 className="App">ค่าบริการ</h1>
        <List phoneBills={this.state.phoneBills} />
      </div>
    );
  }
}

export default App;
