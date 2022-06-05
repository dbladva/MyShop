import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {GetAddress, ShowAddress} from '../redux/action/Address.action';

const Address = ({navigation}) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const Showaddress = useSelector(state => state.address);

  useEffect(() => {
    dispatch(ShowAddress());
  },[]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.adressShow}>
        <Text style={{color: 'black'}}>{item.name}</Text>
        <Text style={{color: 'black'}}>{item.city}</Text>
        <Text style={{color: 'black'}}>{item.address}</Text>
        <Text style={{color: 'black'}}>{item.phone}</Text> 
      </View>
    );
  };

  const ProccedHandler = () => {
    if (!(name === '' || address === '' || city === '' || phone === '')) {
      let deliAddress = {
        name,
        address,
        city,
        phone,
      };
      dispatch(GetAddress(deliAddress));
      setName('');
      setAddress('');
      setCity('');
      setPhone('');
    } else {
      alert('Fill up All Details...');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.drawerLogo}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name="arrow-back" color={'white'} size={30} />
          </TouchableOpacity>
          <Text style={styles.DeleveryTitle}>Deliver to</Text>
          <TouchableOpacity>
            <AntDesign name="questioncircleo" color={'white'} size={28} />
          </TouchableOpacity>
        </View>
        <View style={styles.DeliverAdd}>
          <Text style={styles.titleOffer}>Enter Delivery Address</Text>

          <View style={styles.adressView}>
            <Text style={styles.InputTitle}>Name :</Text>
            <TextInput
              style={styles.EmailInput}
              placeholder="Enter Name"
              onChangeText={text => setName(text)}
              value={name}
            />
          </View>
          <View style={styles.adressView}>
            <Text style={styles.InputTitle}>Address :</Text>
            <TextInput
              style={styles.EmailInput}
              placeholder="Enter Address"
              onChangeText={text => setAddress(text)}
              value={address}
            />
          </View>
          <View style={styles.adressView}>
            <Text style={styles.InputTitle}>City :</Text>
            <TextInput
              style={styles.EmailInput}
              placeholder="Enter City Name"
              onChangeText={text => setCity(text)}
              value={city}
            />
          </View>
          <View style={styles.adressView}>
            <Text style={styles.InputTitle}>Phone :</Text>
            <TextInput
              style={styles.EmailInput}
              placeholder="Enter Phone"
              onChangeText={text => setPhone(text)}
              value={phone}
              maxLength={10}
              keyboardType="number-pad"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                width: '40%',
              }}></View>
            <Text
              style={{
                textAlign: 'center',
                margin: 20,
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white',
              }}>
              OR
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                width: '40%',
              }}></View>
          </View>
        </View>

        <View style={styles.ProfileDetail}>
          <Text style={styles.titleOffer2}>Use my profile details</Text>
          <TouchableOpacity>
            <Ionicons name="radio-button-on" color={'orange'} size={25} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.StartedBtn}
          onPress={() => ProccedHandler()}>
          <Text style={styles.btnText}>Procced</Text>
        </TouchableOpacity>

       
        <FlatList
          data={Showaddress.address}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  drawerLogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  DeleveryTitle: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  DeliverAdd: {
    margin: 10,
  },
  titleOffer: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  EmailInput: {
    padding: 10,
    margin: 10,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    fontSize: 16,
    shadowColor: 'gray',
    elevation: 5,
    width: '75%',
    backgroundColor: '#000000',
  },
  InputTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
    width: '20%',
  },
  adressView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ProfileDetail: {
    backgroundColor: 'white',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    borderRadius: 5,
  },
  titleOffer2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
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
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  adressShow: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10
  },
  addName: {
    color: 'black',
  },
});
