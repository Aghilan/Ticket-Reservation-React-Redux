import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as user from '../actions/user'
import UserForm from './userform'
import Seat from './seats'

class Reservation extends Component {
  constructor(props) {
    super(props)
    this.renderTopNavgation= this.renderTopNavgation.bind(this);
    this.logOut = this.logOut.bind(this)
  }

  logOut(){
    this.props.useraction.logOut();
  }

  renderTopNavgation(){
    return (
    <nav className="navbar navbar-default">
      <div className="navbar-header">
        <a className="navbar-brand" href="javascript:void(0);">Ticket Reservation</a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown">{this.props.user.username} <b className="caret"></b></a>
            <ul className="dropdown-menu">
              <li><a href="javascript:void(0);" onClick={this.logOut}>Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    )
  }

  render() {
    return (
      <div>
        <div hidden={this.props.user._id}>
          <UserForm  {...this.props}/>
        </div>
        <div hidden={!this.props.user._id}>
          {this.renderTopNavgation()}
          <Seat />
        </div>
      </div>
    );
  }
}

/*
Redux Containers - To map the components to store
*/

function mapStateToProps(state){
  return {user: state.user};
}

function mapDispatchToProps(dispatch){
  return {
      useraction: bindActionCreators(user, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Reservation);
