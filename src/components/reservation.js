import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as user from '../actions/user'
import * as reservation from '../actions/reservation'
import * as seats from '../actions/seats'
import UserForm from './userform'
import Seats from './seats'
import Profile from './profile'

class Reservation extends Component {
  constructor(props) {
    super(props)
    this.renderTopNavigation= this.renderTopNavigation.bind(this);
    this.renderTicketReservation = this.renderTicketReservation.bind(this);
    this.renderProfile = this.renderProfile.bind(this);
    this.logOut = this.logOut.bind(this);
    this.profile = this.profile.bind(this);
    this.seatConfirmation = this.seatConfirmation.bind(this);
  }

  ticketReservation() {
    this.props.seatsAction.getTheaterSeats();
    this.props.useraction.displayTicketReservation();
  }

  profile() {
    this.props.useraction.displayProfile();
    this.props.seatsAction.clearSelection();
    this.props.useraction.listAllReservation(this.props.user.username);
  }

  logOut(){
    this.props.useraction.logOut();
  }

  seatConfirmation() {
    return(
    <div hidden={!this.props.selected_seats.length} className="selected">
      Selected Seats:
      { this.props.selected_seats.map(function(seat,i){
           return (<a href="javascript:void(0);" key={i}> {seat} </a>)
         })
      }
      <br /> <br />
      <button onClick={() => {this.props.reserveAction.bookTickets(this.props.selected_seats,this.props.user.username)}}> Book Tickets </button>
    </div>
    )
  }

  renderProfile(){
    if(this.props.history.length === 0)
      return(<div> No History of Reservation </div>)
    return (
      this.props.history.map(function(reservation,i) {
        return (<Profile
                {...reservation}
                key={i}
              />
              )
    }))
  }

  renderTicketReservation() {
    return (
      <div>
        <Seats />
        { this.seatConfirmation() }
      </div>
    )
  }

  renderTopNavigation(){
    return (
    <nav className="navbar navbar-default">
      <div className="navbar-header">
        <a className="navbar-brand" href="javascript:void(0);" onClick={() => this.ticketReservation()}>Ticket Reservation</a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown">{this.props.user.username} <b className="caret"></b></a>
            <ul className="dropdown-menu">
              <li><a href="javascript:void(0);" onClick={this.profile}>Profile</a></li>
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
          { this.renderTopNavigation() }
          {
            this.props.profile? this.renderProfile() : this.renderTicketReservation()
          }
        </div>
      </div>
    );
  }
}

/*
Redux Containers - To map the components to store
*/

function mapStateToProps(state){
  return {user: state.user, selected_seats: state.selected_seats, profile: state.display_profile, history: state.profile};
}

function mapDispatchToProps(dispatch){
  return {
      useraction: bindActionCreators(user, dispatch),
      reserveAction: bindActionCreators(reservation, dispatch),
      seatsAction: bindActionCreators(seats,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Reservation);
