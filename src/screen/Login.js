import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  scrr,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NativeScreenNavigationContainer} from 'react-native-screens';
import {useDispatch, useSelector} from 'react-redux';
import {signup_reducer} from '../redux/reducer/Signup_reducer';
import {signin_action} from '../redux/action/SIgnup_action';

const Login = ({navigation}) => {
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');

  const login = useSelector(state => state.signin);

  const dispatch = useDispatch();
  const LoginHandler = () => {
    let lData = {
      email,
      password,
    };
    dispatch(signin_action(lData, navigation));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: '30%',backgroundColor: '#5956E9',justifyContent: 'center'}}>
        <Text style={styles.titleText}>Welcome</Text>
        <Text style={styles.titleText}>Back</Text>
        <View style={{height: 20,width: 20,borderRadius: 100,borderWidth: 4,borderColor: '#706EFD',backgroundColor: '#5956E9',shadowColor: 'gray',elevation: 30,position: 'absolute',top:20,left: 100,}}></View>
        <View style={{height: 30,width: 30,borderRadius: 100,borderWidth: 4,borderColor: '#706EFD',backgroundColor: '#5956E9',shadowColor: 'gray',elevation: 30,position: 'absolute',bottom:20,right: 100,}}></View>
      </View>
      <View
        style={{
          height: '60%',
          backgroundColor: '#FFFFFF',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        <View style={styles.BtnTab}>
          <TouchableOpacity
            disabled={true}
            style={{
              borderBottomColor: '#5956E9',
              borderBottomWidth: 2,
              width: '40%',
              alignItems: 'center',
            }}>
            <Text style={styles.SignnInBtn}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: '40%', alignItems: 'center'}}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.SignnInBtn}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.InputView}>
          <Text style={styles.TextInputTitle}>E-Mail address</Text>
          <TextInput
            style={styles.EmailInput}
            placeholder="E-mail"
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.InputView}>
          <Text style={styles.TextInputTitle}>Enter Password</Text>
          <TextInput
            style={styles.EmailInput}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
          />
        </View>

        <View style={styles.Login}>
          <TouchableOpacity>
            <Text style={styles.Loginbtn}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
        {/* onPress={() => navigation.navigate('Home')} */}
        <TouchableOpacity
          style={styles.StartedBtn}
          onPress={() => LoginHandler()}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#000000',
              width: '30%',
            }}></View>
          <Text style={{textAlign: 'center', margin: 20, fontWeight: 'bold'}}>
            OR
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#000000',
              width: '30%',
            }}></View>
        </View>
        <Text style={styles.SignnInUsing}>Sign In Using:</Text>
        <View
          style={{
            backgroundColor: '#ffffff',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <TouchableOpacity>
              <Image
                style={styles.LoginIcon}
                source={require('../images/google.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.LoginIcon}
                source={require('../images/facebook.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.LoginIcon}
                source={require('../images/twitter.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#5956E9',
    // justifyContent: 'space-around',
    height: '100%',
  },
  titleText:{
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
    width: '100%',
    justifyContent: 'space-around',
  },
  SignnInBtn: {
    padding: 5,
    fontSize: 22,
    fontWeight: 'normal',
    color: '#000000'
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
