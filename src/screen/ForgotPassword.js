import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TextInput,
    StatusBar,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createUserWithEmail, FacebookLogin, Loading, LoginwithGoogle, resetPasswordEmail, signinUserEmail } from '../redux/action/auth.action';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';



const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState('');


    const load = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const resetPasswordHandler = () => {
        if(email !== '' ){
        dispatch(resetPasswordEmail(email,navigation))
        }else{
            alert('Enter email address.')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    height: '30%',
                    backgroundColor: '#5956E9',
                    justifyContent: 'center',
                }}>
                <Text style={styles.titleText}>Forgot</Text>
                <Text style={styles.titleText}>Password</Text>
                <View
                    style={{
                        height: 20,
                        width: 20,
                        borderRadius: 100,
                        borderWidth: 4,
                        borderColor: '#706EFD',
                        backgroundColor: '#5956E9',
                        shadowColor: 'gray',
                        elevation: 30,
                        position: 'absolute',
                        top: 20,
                        left: 100,
                    }}></View>
                <View
                    style={{
                        height: 30,
                        width: 30,
                        borderRadius: 100,
                        borderWidth: 4,
                        borderColor: '#706EFD',
                        backgroundColor: '#5956E9',
                        shadowColor: 'gray',
                        elevation: 30,
                        position: 'absolute',
                        bottom: 20,
                        right: 100,
                    }}></View>
            </View>

            <View
          style={{
            height: '70%',
            backgroundColor: '#FFFFFF',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            paddingTop: 50
            // justifyContent: 'space-around',
          }}>

            <View style={styles.InputView}>
                <Text style={styles.TextInputTitle}>E-Mail address</Text>
                <TextInput
                    style={styles.EmailInput}
                    placeholder="E-mail"
                    autoCapitalize="none"
                    onChangeText={data => setEmail(data)}
                />
            </View>

            <TouchableOpacity
                style={styles.StartedBtn}
                onPress={() => { resetPasswordHandler(email) }}>
                <Text style={styles.btnText}>{load.isLoading === true ? <ActivityIndicator size="small" color="#00ff00" /> : "Continue"}</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>


    );
}

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#5956E9',
        height: '100%',
    },
    titleText: {
        color: '#ffffff',
        fontSize: 50,
        fontWeight: 'bold',
        marginLeft: 50,
    },
    BtnTab: {
        marginTop: 16,
        marginBottom: 16,
        marginLeft: 8,
        marginRight: 8,
        flexDirection: 'row',
        // width: '100%',
        justifyContent: 'space-around',
    },
    SignnInBtn: {
        padding: 5,
        fontSize: 22,
        fontWeight: 'normal',
        color: '#000000',
    },
    SignnupBtn: {},
    EmailInput: {
        padding: 10,
        margin: 10,
        color: '#000000',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 5,
        fontSize: 16,
        // shadowColor: 'gray',
        // elevation: 5,
        // width: '90%'
    },
    TextInputTitle: {
        marginLeft: 10,
        fontSize: 18,
        color: '#000000',
    },
    InputView: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 10,
    },
    Loginbtn: {
        textAlign: 'right',
        color: 'gray',
        fontWeight: '600',
        marginLeft: 5,
        marginRight: 33,
        margin: 8,
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    StartedBtn: {
        borderRadius: 40,
        margin: 10,
        alignSelf: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: '#5956E9',
        width: '70%',
        alignItems: 'center',
        marginTop: 20,
    },
    SignnInUsing: {
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: '#ffffff',
    },
    LoginIcon: {
        marginTop: 20,
        width: 50,
        height: 50,
        borderRadius: 15,
        margin: 5,
    },
});


