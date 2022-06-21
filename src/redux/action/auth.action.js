// import auth from '@react-native-firebase/auth';
// import * as ActionType from '../ActionType'

// export const createUserWithEmail = (email,password) => async (dispatch) => {
//     dispatch(Loading())
//     auth()
//     .createUserWithEmailAndPassword(email, password)
//     .then(() => {
//       console.log('User account created & signed in!');
//       dispatch({type: ActionType.SUCCESSFULLY_SIGNUP, payload: 'Please verify email id.'})
//     })
//     .catch(error => {
//       if (error.code === 'auth/email-already-in-use') {
//         dispatch({ type: ActionType.AUTH_ERROR, payload: "That email address is already in use!" })
//         // navigation.navigate  
//       }

//       if (error.code === 'auth/invalid-email') {
//         dispatch({ type: ActionType.AUTH_ERROR, payload: "That email address is already in use!" })
//       }
//       console.error(error);
//       dispatch({type: ActionType.ERROR_SIGNUP, payload: error.message})

//     });
// }

// export const Loading = () => (dispatch) => {
//     dispatch({type: ActionType.LOADING_LOGIN});
// }

// export const signInWithFirebase = (email,password,navigation) => async (dispatch) => {
//     dispatch(Loading())
//     auth()
//     .signInWithEmailAndPassword(email, password)
//     .then(() => {
//       console.log('User account created & signed in!');
//       // dispatch({type: ActionType.SUCCESSFULLY_SIGNUP})
//     navigation.navigate('Home')

//     })
//     .catch(error => {
//       if (error.code === 'auth/email-already-in-use') {
//         console.log('That email address is already in use!');
//         dispatch({type: ActionType.ERROR_SIGNUP, payload: error.message})
//         // navigation.navigate  
//       }

//       if (error.code === 'auth/invalid-email') {
//         console.log('That email address is invalid!');
//       }
//       console.error(error);
//       dispatch({type: ActionType.ERROR_SIGNUP, payload: error.message})
//     });
// }  



import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import * as ActionType from '../ActionType'

export const createUserWithEmail = (email,password) => async (dispatch) => {
  auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
          auth()
              .onAuthStateChanged((user) => {
                  user.sendEmailVerification()
                      .then(() => {
                          console.log(1);
                          dispatch({ type: ActionType.USER_EMAIL, payload: "Please verify email id." })
                      })
                      .catch((error) => {
                          console.log(2);
                          dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
                      })
              })
      })
      .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
              dispatch({ type: ActionType.AUTH_ERROR, payload: "That email address is already in use!" })
          }

          if (error.code === 'auth/invalid-email') {
              dispatch({ type: ActionType.AUTH_ERROR, payload: "That email address is invalid!" })
          }
      });
}

export const Loading = () => (dispatch) => {
    dispatch({type: ActionType.LOADING_LOGIN});
    }

    export const signinUserEmail = (email,password) => async (dispatch) => {
        dispatch(Loading())
        auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                if (user.user.emailVerified) {
                    console.log('aaaaaaaaaaa',user.user.uid);
                    AsyncStorage.setItem("user", user.user.uid);
                    dispatch({ type: ActionType.SIGNIN_SUCCESS, payload: user.user })
                } else {
                    console.log("2", user);
                    dispatch({ type: ActionType.USER_EMAIL, payload: "Please verify your email Address." })
                }
    
            })
            .catch((error) => {
                console.log("3");
                dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
            })
    }

    export const signoutEmail = () => (dispatch) => {
        try {
            auth()
                .signOut()
                .then(() => {
                    dispatch({type: ActionType.SIGNOUT_USER, payload: "Signout successfully."})
                    
                });
        } catch (e) {
            dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
        }
    }
    
    export const resetPasswordEmail = (email) => (dispatch) => {
        try {
            auth()
                .sendPasswordResetEmail(email)
                .then(() => {
                    dispatch({type: ActionType.RESET_PASSWORD, payload: "Reset password link sent to your email address."})
                })
        } catch (e) {
            dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
        }
    }

