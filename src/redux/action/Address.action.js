import * as ActionType from '../ActionType'

export const GetAddress = (address) => (dispatch) => {
    try {
        fetch('http://192.168.43.200:8000/Address', {
        // fetch('http://26.190.111.222:8000/SignupData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(address),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } catch (e) {
      console.log(e);
    }
}

export const ShowAddress = () => (dispatch) => {
  setInterval(() => {
  try {
    fetch('http://192.168.43.200:8000/Address', {
    // fetch('http://26.190.111.222:8000/SignupData', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify(address),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      dispatch({type: ActionType.SHOW_ADDRESS, payload: data})
    })
    .catch(error => {
      console.error('Error:', error);
    });
} catch (e) {
  console.log("Show Address Error",e);
}
}, 3000);
}