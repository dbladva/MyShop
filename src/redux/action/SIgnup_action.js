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


    export const signin_action = (loginData, navigation) => dispatch => {
      let flag = 0,
        id = 0;
        fetch('http://192.168.43.200:8000/SignupData', {
          // fetch('http://localhost:3004/users', {
    
          method: 'GET',
        })
        // GetUserData()
          .then((response) => response.json())
          .then((data) => {
            
            data.map(d => {
              if (d.email == loginData.email && d.password == loginData.password) {
                flag = 1;
                id = d.id;
                console.log('---------------------match--------------------------');
              }
            });
            if (flag === 1) {
              navigation.navigate('Home');
            } else {
             console.log('Error');
            }
          
          });
    };