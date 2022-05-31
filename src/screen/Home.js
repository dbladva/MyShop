import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Home = () => {
  return (
      <ImageBackground
        style={styles.ImageBG}
        source={require('../images/Veg.jpg')}>
        <View style={styles.Text}>
          <Text style={styles.Title}>Yummies</Text>
          <Text style={styles.Subtitle}>
            Testy meal delivery to {'\n'} your doorstep
          </Text>
          <TouchableOpacity style={styles.StartedBtn}>
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',

  },
  ImageBG: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    // backgroundColor: 'rgba(0,0,0,0.2)'
  },
  Text: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1, 
  },
  Title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
    
  },
  Subtitle: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    margin: 5,
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
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
