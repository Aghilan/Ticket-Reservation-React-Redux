import React, { Component } from 'react';
import Seat from './seat'
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
  console.log(this.props.seats)
    return this.props.seats.length? (
      <div className="plane">
        <div className="cockpit">
          <h1>Please select your seats</h1>
        </div>
        <div className="exit exit--front fuselage"></div>
        <ol className="cabin fuselage">
          {
            this.props.seats.map(function(row,i){
              console.log(row)
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
    (<div> Please load Data to the DB </div>)
  }
}


function mapStateToProps(state){
  return {seats: state.seats};
}


export default connect(mapStateToProps)(Seats);
