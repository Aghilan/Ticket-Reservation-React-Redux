import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reservation from '../actions/reservation'

class Profile extends Component {

  render() {
    var { seats, _id, Created_date } = this.props
    return (
      <div id="item-container">
        <span id="view" >
            <div className="table-container col-sm-10 col-md-10 col-sm-offset-1 col-md-offet-1">
              <table className="table table-filter">
                <tbody>
                  <tr>
                    <td>
                      <div className="media">
                        <div className="media-body">
                          <span className="media-meta pull-right">
                            {seats.map((seat,i) => <a href="javascript:void(0);" key={i}>{`${seat}  `}</a>)}
                          </span>
                          <h4 className="title">
                            {Created_date.slice(0,10)}
                          </h4>
                          <p className="summary">Dunkirk</p>
                          <a className="media-star delete pull-right" href="javascript:void(0);" onClick={() => this.props.reserveAction.cancelReservation(_id, this.props.user.username )}>Cancel</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </span>
        </div>

   )
  }
}

function mapStateToProps(state){
  return {user : state.user}
}
function mapDispatchToProps(dispatch){
  return {
      reserveAction: bindActionCreators(reservation, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
