import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import images from '../images/images';

const Welcome = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Find your</Text>
        <Text style={styles.title}>Gadget</Text>
      </View>
      <View style={{height: 300, width: 300}}>
        <Image style={styles.image} source={images.logo} />
      </View>
      <TouchableOpacity style={{width: '80%', alignSelf: 'center'}} onPress={() => navigation.navigate('Login')}>
        <View
          style={{
            alignSelf: 'center',
            width: '80%',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
          }}>
          <Text style={styles.btnText}>Get started</Text>
        </View>
      </TouchableOpacity>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="#5956E9"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5956E9',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 65,
    fontWeight: 'bold',
    color: 'white',
    lineHeight: 63,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#5956E9',
  },
});
