import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as seats from '../actions/seats'

class Seat extends Component {
  render(){
    var { labelName, status } = this.props
    return (
      <li className="seat">
        <input type="checkbox" id={`${labelName}`} disabled={!status} onClick={()=>this.props.seatsAction.selectSeat(labelName)}/>
        <label htmlFor={`${labelName}`}>{labelName}</label>
      </li>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
      seatsAction: bindActionCreators(seats, dispatch)
  }
}

export default connect(null,mapDispatchToProps)(Seat);
