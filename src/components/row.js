import React, { Component } from 'react';
import Seat from './seat'
// Row wise seats
class Row extends Component {

  render() {
    var { row } = this.props
    return (
      <li className="row">
        <ol className="seats" >
        {   row.map( function(seat,i) {
                return (<Seat
                          key={i}
                          labelName={seat.name}
                          status={seat.status === 'AVLB'}
                        />)
            })
        }
        </ol>
     </li>
   )
  }
}

export default Row;
