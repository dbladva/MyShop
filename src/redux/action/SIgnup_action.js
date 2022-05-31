import * as ActionType from '../ActionType'

export const signup = (data) => (dispatch) => {
    try {
          fetch('http://192.168.43.200:8000/SignupData', {
            // fetch('http://26.190.111.222:8000/SignupData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
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

    };
