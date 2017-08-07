import React, { Component } from 'react';
import Row from './row'
import { connect } from 'react-redux';

class Seats extends Component {
  constructor(props){
    super(props);
    this.theaterSeats = this.theaterSeats.bind(this);
  }

  theaterSeats(){
    this.props.action.getTheaterSeats();
  }
  render(){
    return this.props.seats.length? (
      <div className="plane">
        <div className="cockpit">
          <h1>Please select your seats</h1>
          <h5> Screen this way </h5>
        </div>
        <div className="exit exit--front fuselage"></div>
        <ol className="cabin fuselage">
          {
            this.props.seats.map(function(row,i){
              return( <Row
                        key={i}
                        row={row}
                      /> )
            })
          }
        </ol>
        <div className="exit exit--back fuselage"></div>
      </div>
    ):
    (<div> Please load Data to the DB by importing the json file as <a href="https://github.com/Aghilan/ReservationApp/blob/master/README.md">referred </a></div>)
  }
}


function mapStateToProps(state){
  return {seats: state.seats};
}


export default connect(mapStateToProps)(Seats);
