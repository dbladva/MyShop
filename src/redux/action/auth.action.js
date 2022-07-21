import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import * as ActionType from '../ActionType'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

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
                    AsyncStorage.clear()
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

    export const LoginwithGoogle = () => async (dispatch) => {
        GoogleSignin.configure({
            webClientId:
              '94612728339-or1vg03qmlj264hq33uj6umt9kccui3e.apps.googleusercontent.com',
          });
      
        try {
            const { idToken } = await GoogleSignin.signIn();
            const credential = auth.GoogleAuthProvider.credential(
                idToken,
            );
            const result = await auth().signInWithCredential(credential)
            AsyncStorage.setItem('user', result.user.uid)
            dispatch({ type: ActionType.SIGNIN_SUCCESS, payload: idToken })
            console.log('result ',result);
        } catch (error) {
            dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
        }
    }

//    export const FacebookLogin = () => async(dispatch) => {
//     try {
//         const result = await LoginManager.logInWithPermissions(['public_profile', 'ladvadharmesh03@gmail.com']);
//     if (result.isCancelled) {
//       throw 'User cancelled the login process';
//     }
//     const data = await AccessToken.getCurrentAccessToken();
//     if (!data) {
//       throw 'Something went wrong obtaining access token';
//     }
//     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);  
//     const r =  auth().signInWithCredential(facebookCredential);
//     console.log(r);
//     } catch (error) {
//         console.log(error);
//         dispatch({ type: ActionType.AUTH_ERROR, payload: error.code})
//     }
//     }



    

