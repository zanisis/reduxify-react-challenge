import React, { Component } from 'react';
import {connect} from 'react-redux'

import { getHerolist } from './actions/heroActions'
import Header from './components/Header.js'
import ListHeroes from './components/HeroesList'
import InputHeroes from './components/InputHeroes'
class App extends Component {

  componentDidMount() {
    this.props.fetchHeros()
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
  fetchHeros : data => dispatch(getHerolist())
})

export default connect(null, mapDispatchToProps)(App);
