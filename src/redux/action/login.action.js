import auth from '@react-native-firebase/auth';
import * as ActionType from '../ActionType'
import { LoggedIn } from './loggedin.action';

export const signupWithFirebase = (email,password,navigation) => (dispatch) => {
    dispatch(Loading())
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
      dispatch({type: ActionType.SUCCESSFULLY_SIGNUP})

    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        // navigation.navigate  
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
      dispatch({type: ActionType.ERROR_SIGNUP, payload: error.message})

    });
}

export const Loading = () => (dispatch) => {
    dispatch({type: ActionType.LOADING_LOGIN});
}


export const signInWithFirebase = (email,password,navigation) => (dispatch) => {
    dispatch(Loading())
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch(LoggedIn())
      console.log('User account created & signed in!');
      // dispatch({type: ActionType.SUCCESSFULLY_SIGNUP})
    navigation.navigate('Home')

    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        dispatch({type: ActionType.ERROR_SIGNUP, payload: error.message})
        // navigation.navigate  
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
      dispatch({type: ActionType.ERROR_SIGNUP, payload: error.message})
    });
}  