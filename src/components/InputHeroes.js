import React, { Component } from 'react';
import {connect} from 'react-redux'

class InputHeroes extends Component {
  constructor() {
    super()
    this.state = {
      heroes : {
        Name : '',
        HP : 0,
      }

    }
  }

  handleChange(e){
    let newData = {
      heroes : {
        ...this.state.heroes
      }
    }
    // console.log(typeof e.target.value);
    if(e.target.name === 'HP'){
      newData.heroes[e.target.name] = Number(e.target.value)
    } else {
      newData.heroes[e.target.name] = e.target.value
    }

    this.setState({heroes : newData.heroes})
  }

  handleAddClick(e){
    e.preventDefault()
    this.props.addHeroes({type: "ADD_HERO", payload: this.state.heroes})
  }

  render(){
    return(
        <div>
          <form>
            <input name="Name" type="text" onChange={(e)=>this.handleChange(e)}/>
            <input name="HP" type="text" onChange={(e)=>this.handleChange(e)}/>
            <button type="submit" onClick={(e)=> this.handleAddClick(e)} >Add</button>
          </form>
        </div>
    )
  }
}

const mapDispatchToProps = dispatch =>({
  addHeroes : data => dispatch(data)
})

export default connect(null, mapDispatchToProps)(InputHeroes);