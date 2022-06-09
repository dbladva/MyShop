import * as ActionType from '../ActionType';
import {Alert} from "react-native";

export const signup = (data,navigation) => dispatch => {
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
        Alert.alert(
          "Succesfully",
          "Yor Account created succesfully",
        [
            { text: "OK", onPress: () => navigation.navigate('Login') },
        ]
                );
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
  try {
    fetch('http://192.168.43.200:8000/SignupData', {
      // fetch('http://localhost:3004/users', {

      method: 'GET',
    })
      // GetUserData()
      .then(response => response.json())
      .then(data => {
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
          alert('Your Email or Password Is not correct');
        }
      });
  } catch (e) {
    console.log('Server not respond');
  }
};
