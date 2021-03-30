import classes from  './App.module.css';
import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import Burgerbuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  render() {
  return (
    <div className={classes.App}>
      <Layout>
        <Burgerbuilder/>
      </Layout>
    </div>
  )};
}

export default App;
