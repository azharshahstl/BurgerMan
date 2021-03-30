import classes from  './App.module.css';
import React, { Component } from 'react';
import Layout from './components/Layout/Layout'


class App extends Component {
  render() {
  return (
    <div className={classes.App}>
      <Layout>
        <p>hello there!</p>
      </Layout>
    </div>
  )};
}

export default App;
