import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import * as ActionType from '../ActionType'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import Snackbar from 'react-native-snackbar';

export const createUserWithEmail = (email, password, name) => async (dispatch) => {
    auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            auth()
                .onAuthStateChanged((user) => {
                    user.sendEmailVerification()
                        .then(() => {
                            console.log(1);

                            firestore()
                                .collection('Users')
                                .add({
                                    email: email,
                                    name: name,
                                    picture: ' ',
                                    uid: user.uid
                                })
                                .then(() => {
                                    console.log('User added!');
                                })
                                .catch((error) => {
                                    dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
                                })
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
    dispatch({ type: ActionType.LOADING_LOGIN });
}

export const signinUserEmail = (email, password) => async (dispatch) => {
    dispatch(Loading())
    auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
            if (user.user.emailVerified) {
                console.log('aaaaaaaaaaa', user);
                AsyncStorage.setItem("user", user.user.uid);
                dispatch({ type: ActionType.SIGNIN_SUCCESS, payload: user.user })
                dispatch(getUserProfilePicture(user.user.uid))
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

export const signinWithFacebook = () => async (dispatch) => {
    // dispatch(Loading())
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
        dispatch({ type: ActionType.AUTH_ERROR, payload: "User cancelled the login process" })
        throw 'User cancelled the login process';
    }
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
        throw 'Something went wrong obtaining access token';
    }
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    auth()
        .signInWithCredential(facebookCredential)
        .then((data) => {
            console.log('data', data.user.uid);
            AsyncStorage.setItem('user', data.user.uid)
            dispatch({
                type: ActionType.SIGNIN_SUCCESS, payload: data
            })
        })
        .catch((error) => {
            console.log(error);
            dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
        })
}

export const signoutEmail = () => (dispatch) => {
    dispatch(Loading())
    try {
        auth()
            .signOut()
            .then(() => {
                AsyncStorage.clear()
                dispatch({ type: ActionType.SIGNOUT_USER, })
                dispatch(uid())
            });
    } catch (e) {
        dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
    }
}

export const resetPasswordEmail = (email, navigation) => (dispatch) => {
    try {
        dispatch(Loading())
        auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                // dispatch({type: ActionType.RESET_PASSWORD, payload: "Reset password link sent to your email address."})
                Alert.alert(
                    "Reset Password",
                    "Reset password link sent to your email address.",
                    [
                        { text: "OK", onPress: () => navigation.navigate('Login') }
                    ]
                );
            })
            .catch((error) => {
                dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
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
        // dispatch(Loading())
        const { idToken } = await GoogleSignin.signIn();
        const credential = auth.GoogleAuthProvider.credential(
            idToken,
        );
        const result = await auth().signInWithCredential(credential)
        AsyncStorage.setItem('user', result.user.uid)
        dispatch({ type: ActionType.SIGNIN_SUCCESS, payload: idToken })
        console.log('result ', result);
    } catch (error) {
        dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
    }
}


export const uid = () => async (dispatch) => {
    try {
        dispatch(Loading())
        const value = await AsyncStorage.getItem('user')
        if (value !== null) {
            console.log('Value', value);
        }
        dispatch({ type: ActionType.UID, payload: value })
    } catch (e) {
        dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
    }
}

export const phoneAuth = (phoneNumber) => async (dispatch) => {
    try {
        dispatch(Loading())
        await auth()
            .signInWithPhoneNumber(phoneNumber)
            .then((confirmation) => {
                console.log(confirmation);
                dispatch({ type: ActionType.OTP, payload: confirmation })
            })
            .catch((error) => {
                dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
            })
    } catch (error) {
        dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
    }
}

export const verifyOtp = (otp, confirm) => async (dispatch) => {
    try {
        dispatch(Loading())
        await confirm.confirm(otp)
            .then((user) => {
                AsyncStorage.setItem("user", user.user.uid)
                dispatch({ type: ActionType.SIGNIN_SUCCESS, payload: user })
                console.log("user iDdddddddddddddd", user.user.uid);
            })
            .catch((error) => {
                dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
            })
    } catch (error) {
        dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
    }
}

export const otpTimeOut = () => (dispatch) => {
    try {
        dispatch(Loading())
        dispatch({ type: ActionType.OTP_TIMEOUT, payload: 'Timeout' })
            .catch((error) => {
                dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
            })
    } catch (error) {
        dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
    }
}

export const userProfilePicture = (image, uid) => async (dispatch) => {
    try {
        let a = image.path.split("/")
        let fileName = a[a.length - 1];
        console.log(fileName);
        const reference = storage().ref('/user/' + fileName);
        await reference.putFile(image.path);
        const url = await storage().ref('/user/' + fileName).getDownloadURL();
        dispatch({ type: ActionType.USER_PROFILE_PICTURE, payload: url })
        console.log(url);

        try {
            // dispatch(Loading())
            await firestore()
                .collection('Users')
                .get()
                .then((data) => {
                    console.log("jkjkjkjkjk  ", data);
                    data.docs.map((data) => {
                        const a = data._data;
                        console.log('aaaaaaaaaaaa', a);
                        if (a.uid === uid) {
                            console.log('data iddddddddddd', data.id);
                            // console.log('mathedddddddddddd');
                            try {
                                firestore()
                                    .collection('Users')
                                    .doc(data.id)
                                    .update({
                                        picture: url,
                                    })
                                    .then(() => {
                                        console.log('Profile picture Added !');
                                    });
                            } catch (error) {
                                console.log(error);
                            }
                        }

                    })
                })
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log(error);
        dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
    }
}

export const getUserProfilePicture = (uid) => async (dispatch) => {
    // dispatch(Loading())
    try {
        await firestore()
            .collection('Users')
            .get()
            .then((user) => {
                user.docs.map((data) => {
                    const a = data._data
                    if (a.uid == uid) {
                        dispatch({ type: ActionType.USER_PROFILE_PICTURE, payload: data._data.picture })
                        dispatch({ type: ActionType.USER_PROFILE_NAME, payload: data._data.name })
                    }
                })
            })
    } catch (error) {
        dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
    }
}






