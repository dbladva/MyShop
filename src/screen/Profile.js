import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color} from 'react-native-reanimated';
import {StatusBar} from 'react-native';
import { getUserProfilePicture, signoutEmail } from '../redux/action/auth.action';
import firestore from '@react-native-firebase/firestore'

const Profile = ({navigation}) => {

const dispatch = useDispatch()
const userId = useSelector(state => state.auth)

  const LogoutHandler = () => {
    dispatch(signoutEmail())
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" color={'#000000'} size={30} />
          </TouchableOpacity>
        </View>
        <ScrollView >
        
        <View style={styles.title}>
          <Text style={styles.titleText}>My Profile</Text>
        </View>
        <View style={styles.profileDetails}>
          
        {
              userId.userProfile === ' ' || userId.userProfile === undefined ?
                <Image style={{ height: 80, width: 80, borderRadius: 50 }} source={{uri: 'https://firebasestorage.googleapis.com/v0/b/admin-d986a.appspot.com/o/user%2Fuser.jpg?alt=media&token=6bf25e67-ae65-42b3-8649-ec042b2d43ed'}} />
                :
                <Image style={{ height: 80, width: 80, borderRadius: 50 }} source={{
                  uri: userId.userProfile 
                }} />
            }
          <Text style={styles.name}>{userId.userName}</Text>
          <View style={styles.address}>
            <Ionicons
              name="location-outline"
              color={'#000000'}
              size={20}
              style={{width: '10%', marginRight: 5}}
            />
            <Text style={{color: '#000000', fontSize: 15,}}>
            The city of Los Angeles{'\n'}U.s
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
            <Text style={styles.name}>Shoping address</Text>
            <MaterialIcons name="keyboard-arrow-right" color={'#000000'} size={20} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.EditProfile}>
            <Text style={styles.name}>Order histroy</Text>
            <MaterialIcons name="keyboard-arrow-right" color={'#000000'} size={20} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.EditProfile}>
            <Text style={styles.name}>Cards</Text>
            <MaterialIcons name="keyboard-arrow-right" color={'#000000'} size={20} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.EditProfile}>
            <Text style={styles.name}>Notification</Text>
            <MaterialIcons name="keyboard-arrow-right" color={'#000000'} size={20} />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => LogoutHandler()}>
          <View style={styles.EditProfile}>
            <Text style={styles.name}>Logout</Text>
            <MaterialIcons name="keyboard-arrow-right" color={'#000000'} size={20} />
          </View>
        </TouchableOpacity>
        </ScrollView>
      </View>
      
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#E5E5E5"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  container2: {
    flex: 1,
    // margin: 30,
    marginVertical: 20,
    marginHorizontal: 16,
  },
  title: {
    width: '90%',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
  titleText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000000',
  },
  profileDetails: {
    marginTop: 50,
    backgroundColor: '#FFFFFF',
    width: '90%',
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000000',
    // marginTop: 5,
  },
  address: {
    flexDirection: 'row',
    width: '70%',
    alignSelf: 'center',
    margin: 10,
  },
  EditProfile: {
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    width: '90%',
    borderRadius: 10,
    padding: 15,
    alignSelf: 'center',
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
