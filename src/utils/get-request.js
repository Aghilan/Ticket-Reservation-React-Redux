import { getSeatsSuccess } from '../actions/seats';
import { listAllReservationSuccess } from '../actions/user'
import store from '../store'

const ReadApiCall = {

  getSeats() {
   fetch('http://localhost:3000/seats_status/', request())
   .then(response => {
     if (response.status >= 200 && response.status < 300) {
       response.json().then(data => {
         if(!data.errors){
           store.dispatch(getSeatsSuccess(data));
        }
       });
     } else {
       alert('Import all the data to DB')
       const error = new Error(response.statusText);
       error.response = response;
       throw error;
     }
   })
   .catch(error => { console.log('Request failed', error); });
  },

  listAllReservation(userId){
   fetch('http://localhost:3000/users/'+ userId +'/reservation', request())
   .then(response => {
     if (response.status >= 200 && response.status < 300) {
       response.json().then(data => {
         if(!data.errors){
           store.dispatch(listAllReservationSuccess(data))
        }
       });
     } else {
       alert('Import Data to DB')
       const error = new Error(response.statusText);
       error.response = response;
       throw error;
     }
   })
   .catch(error => { console.log('Request failed', error); });
  }
};

var request = (body) => {
  return {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    }
  }
}
export default ReadApiCall;
