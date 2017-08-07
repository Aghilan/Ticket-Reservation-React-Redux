import { cancelReservationSuccess } from '../actions/reservation';
import store from '../store'

const DeleteApiCall = {
 deleteReservation(reservation, username) {
   fetch('http://localhost:3000/users/'+ username + '/reservation', request(JSON.stringify(reservation)))
   .then(response => {
     if (response.status >= 200 && response.status < 300) {
       response.json().then(data => {
         if(!data.errors){
           store.dispatch(cancelReservationSuccess(reservation));
        }
       });
     } else {
       const error = new Error(response.statusText);
       error.response = response;
       throw error;
     }
   })
   .catch(error => { console.log('request failed', error); });
 },
};
var request = (body) => {
  return {
    method: 'delete',
    body: body,
    headers: {
      'Content-Type': 'application/json',
    }
  }
}
export default DeleteApiCall;
