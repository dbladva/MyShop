import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color} from 'react-native-reanimated';
import {StatusBar} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" color={'#000000'} size={30} />
          </TouchableOpacity>
        </View>

        <View style={styles.title}>
          <Text style={styles.titleText}>My Profile</Text>
        </View>
        <View style={styles.profileDetails}>
          <Image
            source={require('../images/user.jpg')}
            style={{width: 80, height: 80, borderRadius: 50,marginTop: -30}}
          />
          <Text style={styles.name}>Dharmesh Ladva</Text>
          <View style={styles.address}>
            <Ionicons
              name="location-outline"
              color={'#000000'}
              size={20}
              style={{width: '10%', marginRight: 5}}
            />
            <Text style={{color: '#000000', fontSize: 15,}}>
              fdsfffsdfsfsfsdf dfg s gsffdsf sgs dfs fgsdfsf sgsd{' '}
            </Text>
          </View>
        </View>

        <TouchableOpacity>
          <View style={styles.EditProfile}>
            <Text style={styles.name}>Edit Profile</Text>
            <MaterialIcons name="keyboard-arrow-right" color={'#000000'} size={20} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.EditProfile}>
            <Text style={styles.name}>Edit Profile</Text>
            <MaterialIcons name="keyboard-arrow-right" color={'#000000'} size={20} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.EditProfile}>
            <Text style={styles.name}>Edit Profile</Text>
            <MaterialIcons name="keyboard-arrow-right" color={'#000000'} size={20} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.EditProfile}>
            <Text style={styles.name}>Edit Profile</Text>
            <MaterialIcons name="keyboard-arrow-right" color={'#000000'} size={20} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.EditProfile}>
            <Text style={styles.name}>Edit Profile</Text>
            <MaterialIcons name="keyboard-arrow-right" color={'#000000'} size={20} />
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#E5E5E5"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  container2: {
    flex: 1,
    margin: 30,
   
  },
  title: {
    marginTop: 20,
    marginLeft: 40,
  },
  titleText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000000',
  },
  profileDetails: {
    marginTop: 50,
    backgroundColor: '#FFFFFF',
    width: '80%',
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000000',
    marginTop: 5,
  },
  address: {
    flexDirection: 'row',
    width: '65%',
    alignSelf: 'center',
    margin: 10,
  },
  EditProfile: {
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    width: '80%',
    borderRadius: 20,
    padding: 10,
    alignSelf: 'center',
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});