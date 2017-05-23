import React, { Component } from 'react';
import {connect} from 'react-redux'

class HeroesList extends Component {
  renderTBody(){
    return(
      <tbody>
        {
          this.props.heroList !== undefined ? this.props.heroList.map((item, index)=>(
          <tr key={index}>
            <td>{item.ID}</td>
            <td>{item.Name}</td>
            <td>{item.HP}</td>
          </tr>
        )): 'Wait'}
      </tbody>
    )
  }

  render(){
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Heroes</th>
              <th>HP</th>
            </tr>
          </thead>
          {this.renderTBody()}
      </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  heroList : state
})

export default connect(mapStateToProps, null)(HeroesList)