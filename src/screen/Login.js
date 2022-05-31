import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={{marginTop: -90, marginLeft: -65, height: 270, width: 250}}
          source={require('../images/dish.png')}
        />
      </View>

      <View style={styles.BtnTab}>
        <TouchableOpacity
          disabled={true}
          style={{
            borderBottomColor: 'orange',
            borderBottomWidth: 2,
            width: '40%',
            alignItems: 'center',
          }}>
          <Text style={styles.SignnInBtn}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: '40%', alignItems: 'center'}}>
          <Text style={styles.SignnInBtn}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.InputView}>
        <Text style={styles.TextInputTitle}>E-Mail address</Text>
        <TextInput style={styles.EmailInput} placeholder="E-mail" />
      </View>
      <View style={styles.InputView}>
        <Text style={styles.TextInputTitle}>Enter Password</Text>
        <TextInput
          style={styles.EmailInput}
          secureTextEntry={true}
          placeholder="Password"
        />
      </View>

      <View style={styles.Login}>
        <TouchableOpacity>
          <Text style={styles.Loginbtn}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.StartedBtn}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <Text style={{textAlign: 'center', margin: 20, fontWeight: 'bold'}}>
        --------------------------- OR --------------------------
      </Text>
      <Text style={styles.SignnInUsing}>Sign In Using:</Text>
      <View style={{flexDirection: 'row',alignSelf: 'center',}}>
        <TouchableOpacity>
     <Image style={styles.LoginIcon} source={require('../images/google.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
     <Image style={styles.LoginIcon} source={require('../images/facebook.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
     <Image style={styles.LoginIcon} source={require('../images/twitter.png')}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'space-around'
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
    fontWeight: 'bold',
  },
  SignnupBtn: {},
  EmailInput: {
    padding: 10,
    margin: 10, 
    color: 'white',
    // width: '100%',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    fontSize: 16,
    shadowColor: 'gray',
    elevation: 5,
  },
  TextInputTitle: {
    fontSize: 18,
    color: 'white',
  },
  InputView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 15,
  },
  Loginbtn: {
    textAlign: 'right',
    color: 'gray',
    fontWeight: '600',
    marginLeft: 5,
    marginRight: 25,
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
    backgroundColor: 'orange',
    width: '70%',
    alignItems: 'center',
    marginTop: 20,
  },
  SignnInUsing: {
    fontSize: 18,
    textAlign: 'center',
  },
  LoginIcon:{
    marginTop: 20,
    width: 50,
    height: 50,
    borderRadius: 15,
    margin:5,
  }
});
