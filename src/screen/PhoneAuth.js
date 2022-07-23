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
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { phoneAuth, resetPasswordEmail, verifyOtp, } from '../redux/action/auth.action';
import PhoneInput from "react-native-phone-number-input";
import OTPInputView from '@twotalltotems/react-native-otp-input'
// import auth from '@react-native-firebase/auth';

const PhoneAuth = ({ navigation }) => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [value, setValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [otp, setOtp] = useState(0);

    const load = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const signInWithPhoneNumber = (phoneNumber) => {
        dispatch(phoneAuth(phoneNumber))
    }

    const signInWithOtp = (otp) => {
        dispatch(verifyOtp(otp, auth.confirm))
    }

    console.log('aaaaaaaaaaaaaaaaaaaa', auth.confirm);
    const phoneScreen = () => {
        return (
            <SafeAreaView style={styles.container}>
                <View
                    style={{
                        height: '30%',
                        backgroundColor: '#5956E9',
                        justifyContent: 'center',
                    }}>
                    <Text style={styles.titleText}>Welcome</Text>
                    <Text style={styles.titleText}>back</Text>
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
                        <Text style={styles.TextInputTitle}>Phone Number</Text>
                        <View style={{ alignItems: 'center', marginTop: 20, }}>
                            <PhoneInput
                                // ref={phoneInput}
                                containerStyle={{ alignItems: 'center', height: 60, width: '100%',marginBottom: 30, }}
                                textInputStyle={{ padding: 0 }}
                                defaultValue={value}
                                defaultCode="IN"
                                onChangeFormattedText={(text) => {
                                    const length = text.length
                                    if (length < 14) {
                                        setPhoneNumber(text);
                                    }
                                }}
                                style={styles.phoneInput}

                                withDarkTheme
                                withShadow
                                autoFocus
                            />
                        </View>


                    </View>

                    <TouchableOpacity
                        style={styles.StartedBtn}
                        onPress={() => { signInWithPhoneNumber(phoneNumber) }}>
                        <Text style={styles.btnText}>{load.isLoading === true ? <ActivityIndicator size="small" color="#00ff00" /> : "Continue"}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

        )
    }

    const OTPScreen = () => {
        return (
            <SafeAreaView style={styles.container}>
                <View
                    style={{
                        height: '30%',
                        backgroundColor: '#5956E9',
                        justifyContent: 'center',
                    }}>
                    <Text style={styles.titleText}>Welcome</Text>
                    <Text style={styles.titleText}>back</Text>
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
                        <Text style={styles.TextInputTitle}>OTP </Text>
                        <View style={{ alignItems: 'center' }}>
                            <OTPInputView
                                style={{ width: '80%', height: 100 }}
                                pinCount={6}
                                placeholderTextColor={'#000000'}
                                autoFocusOnLoad={false}
                                codeInputFieldStyle={styles.underlineStyleBase}
                                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                                onCodeFilled={(code) => {
                                    setOtp(code)
                                }}

                            />

                        </View>

                    </View>

                    <TouchableOpacity
                        style={styles.StartedBtn}
                        onPress={() => { signInWithOtp(otp) }}>
                        <Text style={styles.btnText}>{load.isLoading === true ? <ActivityIndicator size="small" color="#00ff00" /> : "Continue"}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {
                auth.confirm !== null ?
                    OTPScreen() :
                    phoneScreen()
            }
        </SafeAreaView>
    );
}

export default PhoneAuth

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
    },
    TextInputTitle: {
        marginLeft: 10,
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold'
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
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        color: '#000000'
    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",

    },

});


