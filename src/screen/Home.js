import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList
} from 'react-native';
import React, { useState, useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { color, useDerivedValue } from 'react-native-reanimated';
import { useSelector, useDispatch } from 'react-redux'
import { StatusBar } from 'react-native'
import { getproduct } from '../redux/action/product.action';
import firestore from '@react-native-firebase/firestore';

const Home = ({ navigation }) => {
  const [category, setCategory] = useState('wearable')

  const item = useSelector(state => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getproduct())  
  }, [])


  const renderItem = ({ item }) => {
    const {id,name} = item;
    if (category === 'wearable' && item.category === 'wearable') {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('Details',{itemid: item.id,name: item.name,price: item.Price,category: item.category})}>
          <View style={styles.ItemCard}>
            <View style={styles.ItemImage}>
              <Image
                style={styles.ItemImageStyle}
                source={require('../images/watch2.jpg')}
              
              />
            </View>
            <Text style={styles.Itemname}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.details}</Text>
            <Text style={styles.ItenPrice}>${item.price}</Text>
          </View>
        </TouchableOpacity>
      )
    } else if (category === 'laptop' && item.category === 'laptop') {
      return (
        <TouchableOpacity  onPress={() => navigation.navigate('Details',{itemid: item.id,name: item.name,price: item.Price,category: item.category})}>
          <View style={styles.ItemCard}>
            <View style={styles.ItemImage}>
              <Image
                style={styles.ItemImageStyle}
                source={require('../images/mac.jpg')}
              
              />
            </View>
            <Text style={styles.Itemname}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.details}</Text>
            <Text style={styles.ItenPrice}>${item.price}</Text>
          </View>
        </TouchableOpacity>
      )
    }
    else if (category === 'phones' && item.category === 'phones') { 
      return (
        <TouchableOpacity onPress={() => navigation.navigate('Details',{itemid: item.id,name: item.name,price: item.Price,category: item.category})}>
          <View style={styles.ItemCard}>
            <View style={styles.ItemImage}>
              <Image
                style={styles.ItemImageStyle}
                source={require('../images/iphone.jpg')}
              
              />
            </View>
            <Text style={styles.Itemname}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.details}</Text>
            <Text style={styles.ItenPrice}>${item.price}</Text>
          </View>
        </TouchableOpacity>
      )
    }
    else if (category === 'drones' && item.category === 'drones') {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('Details',{itemid: item.id,name: item.name,price: item.Price,category: item.category})}>
          <View style={styles.ItemCard}>
            <View style={styles.ItemImage}>
              <Image
                style={styles.ItemImageStyle}
                source={require('../images/drones.jpg')}
              
              />
            </View>
            <Text style={styles.Itemname}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.details}</Text>
            <Text style={styles.ItenPrice}>${item.price}</Text>
          </View>
        </TouchableOpacity>
      )
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>

        <View style={styles.menuicon}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            {/* <MaterialIcons name="menu" color={'#000000'} size={40} /> */}
            <Image style={{ height: 35, width: 35 }} source={require('../images/menuicon.png')} />
          </TouchableOpacity>
          <View style={styles.SearchBar}>
            <MaterialIcons name="search" color={'gray'} size={25} />
            <TextInput style={styles.SearchInput} placeholder="Search" />
          </View>
        </View>

        <View style={styles.titleView}>
          <Text style={styles.titleText}>Order Online</Text>
          <Text style={styles.titleText}>Collect In Store</Text>
        </View>

        <View style={styles.categoryBtn}>

          <TouchableOpacity style={category === 'wearable' ? styles.selectedBtn : styles.nonSelectBtn} onPress={() => setCategory('wearable')}>
            <Text
              style={[
                styles.btnText,
                category === 'wearable' && { color: 'blue' }
              ]}>
              Wearable
            </Text>
          </TouchableOpacity>


          <TouchableOpacity style={category === 'laptop' ? styles.selectedBtn : styles.nonSelectBtn} onPress={() => setCategory('laptop')}>
            <Text style={[styles.btnText, category === 'laptop' && { color: 'blue' }]}>Laptop</Text>
          </TouchableOpacity>

          <TouchableOpacity style={category === 'phones' ? styles.selectedBtn : styles.nonSelectBtn} onPress={() => setCategory('phones')}>
            <Text style={[styles.btnText, category === 'phones' && { color: 'blue' }]}>Phones</Text>
          </TouchableOpacity>
          <TouchableOpacity style={category === 'drones' ? styles.selectedBtn : styles.nonSelectBtn} onPress={() => setCategory('drones')}>
            <Text style={[styles.btnText, category === 'drones' && { color: 'blue' }]}>Drones</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: '55%', width: '100%' }}>
          <ScrollView
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                // marginLeft: 30,
                marginHorizontal: 16,
              }}>

              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                // legacyImplementation={false}
                data={item.Product}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </View>
          </ScrollView>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginRight: 30,
            }}>
            <Text style={styles.seeMoreBtn}>SEE MORE</Text>
            <MaterialIcons name="arrow-forward" size={20} color={'#5956E9'} />
          </View>
        </View>
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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  container2: {
    flex: 1,
  },
  menuicon: {
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 16,
  },
  SearchBar: {
    borderWidth: 1,
    borderColor: '#200E32',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 50,
    padding: 2,
    shadowColor: 'gray',
    shadowOpacity: 500,
    marginLeft: 15,
  },
  SearchInput: {
    width: '80%',
    color: '#000000',
    height: 40,
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
  },
  titleView: {
    height: '10%',
    marginVertical: 50,
    marginHorizontal: 16,
  },
  categoryBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  btnText: {
    fontSize: 17,
    fontWeight: '400',
    color: '#9A9A9D',
  },
  ItemCard: {
    width: 170,
    height: 220,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderRadius: 20,
    padding: 5,
    marginTop: 50,
    marginRight: 16,

  },
  ItemImage: {
    // padding: 10,
    marginTop: -50,
  },
  ItemImageStyle: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  Itemname: {
    marginTop: 30,
    textAlign: 'center',
    letterSpacing: 2,
    color: '#000000',
    fontSize: 20,
    // opacity: 0.8,
    fontWeight: 'bold',
  },
  ItenPrice: {
    marginTop: 30,
    letterSpacing: 2,
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#868686',
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
  },
  seeMoreBtn: {
    color: '#5956E9',
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: 'center',
    textAlign: 'right',
    marginRight: 5,
  },
  selectedBtn: {
    color: 'blue',
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
    paddingBottom: 7,
  },
  nonSelectBtn: {
    color: 'blue',
  }
});
