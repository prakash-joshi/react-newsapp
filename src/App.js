import './App.css';
import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  name = 'Prakash Joshi';
  render() {
    return (
      <>
        <div className="centered">
          <h1> NewsApp</h1>
        </div>
        <News />
      </>
    )
  }
}
