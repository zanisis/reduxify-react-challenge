import React, { Component } from 'react';
import {connect} from 'react-redux'

import axios from 'axios'

import Header from './components/Header.js'
import ListHeroes from './components/HeroesList'
import InputHeroes from './components/InputHeroes'
class App extends Component {

  componentDidMount() {
    axios.get('http://api.herostats.io/heroes/all')
    .then(response=>{
      return this.props.fetchHeros(response.data)
    })
    .catch(err=>{
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <Header />
        <InputHeroes />
        <ListHeroes />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch=>({
  fetchHeros : data => dispatch({type: 'FETCH_HERO', payload : data})
})

export default connect(null, mapDispatchToProps)(App);
