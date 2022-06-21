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
import { createUserWithEmail, Loading, signinUserEmail } from '../redux/action/auth.action';


const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Signup, setSignup] = useState(0);
  const [hide, setShow] = useState(true)

  const load = useSelector(state => state.auth);
  // console.log(load.isLoading);
  
  const dispatch = useDispatch();
  
  const LoginHandler = () => {
    // let lData = {
    //   email,
    //   password,
    // };
    // dispatch(signin_action(lData, navigation));
    dispatch(signinUserEmail(email, password))
  };


  // Signup 

  const [name, setName] = useState('');
  const [Semail, setSEmail] = useState('');
  const [Spassword, setSPassword] = useState('');

  const CreateAccount = () => {
    // let sData = {
    //   name,
    //   email,
    //   password,
    // };
    // dispatch(signup(sData,navigation));

    dispatch(Loading())
    dispatch(createUserWithEmail(Semail, Spassword,))

    setSEmail('');
    setName('');
    setSPassword('');

  };


  return (
    <SafeAreaView style={styles.container}>
      {Signup === 0 ? (
        <View
          style={{
            height: '30%',
            backgroundColor: '#5956E9',
            justifyContent: 'center',
          }}>
          <Text style={styles.titleText}>Welcome</Text>
          <Text style={styles.titleText}>Back</Text>
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
      ) : (
        <View
          style={{
            height: '30%',
            backgroundColor: '#5956E9',
            justifyContent: 'center',
          }}>
          <Text style={styles.titleText}>Create</Text>
          <Text style={styles.titleText}>Account</Text>
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
      )}
      {Signup === 0 ? (
        <View
          style={{
            height: '70%',
            backgroundColor: '#FFFFFF',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            justifyContent: 'space-around',
          }}>
                  <ScrollView keyboardDismissMode='none'>

          <View style={styles.BtnTab}>
            <TouchableOpacity
              disabled={true}
              style={{
                borderBottomColor: '#5956E9',
                borderBottomWidth: 2,
                // width: '40%',
                alignItems: 'center',
              }}>
              <Text style={styles.SignnInBtn}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: 'center'
              }}
              onPress={() => setSignup(1)}
            // onPress={() => navigation.navigate('Signup')}
            >
              <Text style={styles.SignnInBtn}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.InputView}>
            <Text style={styles.TextInputTitle}>E-Mail address</Text>
            <TextInput
              style={styles.EmailInput}
              placeholder="E-mail"
              autoCapitalize="none"
              onChangeText={data => setEmail(data)}
            />
          </View>
          <View style={styles.InputView}>
            <Text style={styles.TextInputTitle}>Enter Password</Text>
            {/* <View style={{alignItems: 'center',justifyContent: 'space-between',flexDirection: 'row',}}> */}
            <TextInput
              style={styles.EmailInput}
              secureTextEntry={hide === true ? true : false}
              autoCapitalize="none"
              placeholder="Password"
              onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity onPress={() => {
              if(hide === true ){
                setShow(false)
              }else {
                setShow(true)
              }
            }}>
              <Ionicons name={hide === true ? 'eye' : 'eye-off-sharp'} color={'gray'} size={25}  style={{position: 'absolute',bottom: 20,right: 20 }}/>
              </TouchableOpacity>
            {/* </View> */}
          </View>

          <View style={styles.Login}>
            <TouchableOpacity>
              <Text style={styles.Loginbtn}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.StartedBtn}
            onPress={() => { LoginHandler() }}>
            <Text style={styles.btnText}>{load.isLoading === true ? <ActivityIndicator size="small" color="#00ff00" /> : "Login"}</Text>
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
            <Text style={{ textAlign: 'center', margin: 20, fontWeight: 'bold' }}>
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
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
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
          </ScrollView>
        </View>
      ) : (
        
        <View
          style={{
            height: '70%',
            backgroundColor: '#FFFFFF',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            justifyContent: 'space-around'
          }}>

          <View style={styles.BtnTab}>
            <TouchableOpacity
              onPress={() => setSignup(0)}
              style={{
                alignItems: 'center',
              }}
            >
              <Text style={styles.SignnInBtn}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={true}
              style={{
                borderBottomColor: '#5956E9',
                borderBottomWidth: 2,
                // ,
                alignItems: 'center',
              }}>
              <Text style={styles.SignnInBtn}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <ScrollView keyboardDismissMode='none'>
          <View style={styles.InputView}>
            <Text style={styles.TextInputTitle}>E-Mail address</Text>
            <TextInput
              style={styles.EmailInput}
              placeholder="E-mail"
              value={Semail}
              autoCapitalize="none"
              onChangeText={text => setSEmail(text)}
            />
          </View>

          <View style={styles.InputView}>
            <Text style={styles.TextInputTitle}>Name</Text>
            <TextInput
              style={styles.EmailInput}
              placeholder="Name"
              value={name}
              onChangeText={text => setName(text)}
            />
          </View>

          <View style={styles.InputView}>
            <Text style={styles.TextInputTitle}>Enter Password</Text>
            <TextInput
              style={styles.EmailInput}
              secureTextEntry={hide === true ? true : false}
              value={Spassword}
              placeholder="Password"
              autoCapitalize="none"
              onChangeText={text => setSPassword(text)}
            />
            <TouchableOpacity onPress={() => {
              if(hide === true ){
                setShow(false)
              }else {
                setShow(true)
              }
            }}>
              <Ionicons name={hide === true ? 'eye' : 'eye-off-sharp'} color={'gray'} size={25}  style={{position: 'absolute',bottom: 20,right: 20 }}/>
              </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.StartedBtn}
            onPress={() => CreateAccount()}>
            <Text style={styles.btnText}>{load.isLoading === true ? <ActivityIndicator size="small" color="#00ff00" /> : "Create Account"}</Text>
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
            <Text style={{ textAlign: 'center', margin: 20, fontWeight: 'bold' }}>
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
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
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
          </ScrollView>
        </View>
      )}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#5956E9"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
    </SafeAreaView>
  );
};

export default Login;

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
