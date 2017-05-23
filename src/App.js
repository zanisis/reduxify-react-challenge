import React, { Component } from 'react';
import {connect} from 'react-redux'

import axios from 'axios'

import Header from './components/Header.js'
import ListHeroes from './components/HeroesList'
import InputHeroes from './components/InputHeroes'
class App extends Component {
  
  componentWillMount() {
    axios.get('http://api.herostats.io/heroes/all')
    .then(response=>{
      this.props.fetchHeros({type: 'FETCH_HERO', payload : response.data})
    })
    .catch(err=>{
      console.log(err);
    })
  }

  componentDidMount() {
    //
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
  fetchHeros : (data) => dispatch(data)
})

export default connect(null, mapDispatchToProps)(App);
