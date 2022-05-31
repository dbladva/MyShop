import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {signup} from '../redux/action/SIgnup_action';

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let dispatch = useDispatch();
  const CreateAccount = () => {
    let sData = {
      name,
      email,
      password,
    };
    dispatch(signup(sData));
    setName('');
    setPassword('');
    setEmail('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'flex-end'}}>
        <Image
          style={{marginTop: -90, marginRight: -65, height: 270, width: 255}}
          source={require('../images/dish2.png')}
        />
      </View>

      <View style={styles.BtnTab}>
        <TouchableOpacity
          disabled={false}
          style={{
            width: '40%',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.SignnInBtn}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={true}
          style={{
            width: '40%',
            borderBottomColor: 'orange',
            borderBottomWidth: 2,
            alignItems: 'center',
          }}>
          <Text style={styles.SignnInBtn}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.InputView}>
        <Text style={styles.TextInputTitle}>Full Name</Text>
        <TextInput
          style={styles.EmailInput}
          placeholder="Name"
          onChangeText={text => setName(text)}
        />
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

      <TouchableOpacity
        style={styles.StartedBtn}
        onPress={() => CreateAccount()}>
        <Text style={styles.btnText}>Create Account</Text>
      </TouchableOpacity>
      <Text style={{textAlign: 'center', margin: 20, fontWeight: 'bold'}}>
        --------------------------- OR --------------------------
      </Text>
      <Text style={styles.SignnInUsing}>Sign In Using:</Text>
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
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'space-around',
  },
  BtnTab: {
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 8,
    marginRight: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  SignnInBtn: {
    padding: 5,
    fontSize: 22,
    fontWeight: 'bold',
  },
  SignnupBtn: {},
  EmailInput: {
    margin: 10,
    padding: 10,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    fontSize: 16,
    shadowColor: 'gray',
    elevation: 2,
  },
  TextInputTitle: {
    marginLeft: 10,
    fontSize: 18,
    color: 'white',
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
    marginRight: 25,
    margin: 8,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  StartedBtn: {
    borderRadius: 15,
    margin: 10,
    alignSelf: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 7,
    paddingBottom: 7,
    backgroundColor: 'orange',
    width: '70%',
    alignItems: 'center',
    marginTop: 30,
  },
  SignnInUsing: {
    fontSize: 18,
    textAlign: 'center',
  },
  LoginIcon: {
    marginTop: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 5,
  },
});
