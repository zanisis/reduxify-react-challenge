import React, { Component } from 'react';
import {connect} from 'react-redux'



class HeroesList extends Component {



  renderTBody(){
    return(
      <tbody>
        {
          typeof this.props.heroList === 'object' ? Object.keys(this.props.heroList).map((item, index)=>(
            <tr key={index}>
              <td>{this.props.heroList[item].ID}</td>
              <td>{this.props.heroList[item].Name}</td>
              <td>{this.props.heroList[item].HP}</td>
            </tr>
          )):<tr>
              <td>Wait</td>
            </tr>
        }
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