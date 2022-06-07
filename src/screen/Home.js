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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {color} from 'react-native-reanimated';
import { StatusBar } from 'react-native'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.menuicon}>
          <TouchableOpacity  onPress={() => navigation.openDrawer()}>
            {/* <MaterialIcons name="menu" color={'#000000'} size={40} /> */}
            <Image style={{height: 35,width: 35}} source={require('../images/menuicon.png')}/>
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
          {/* <TouchableOpacity> */}
          <Text
            style={[
              styles.btnText,
              {
                borderBottomColor: 'blue',
                borderBottomWidth: 2,
                color: 'blue',
                paddingBottom: 7,
              },
            ]}>
            Wearable
          </Text>
          {/* </TouchableOpacity> */}
          {/* <TouchableOpacity> */}
          <Text style={styles.btnText}>Laptop</Text>
          {/* </TouchableOpacity> */}
          {/* <TouchableOpacity> */}
          <Text style={styles.btnText}>Phones</Text>
          {/* </TouchableOpacity> */}
          {/* <TouchableOpacity> */}
          <Text style={styles.btnText}>Drones</Text>
          {/* </TouchableOpacity> */}
        </View>

        <View style={{height: '50%', width: '100%'}}>
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
              }}>
              <TouchableOpacity>
                <View style={styles.ItemCard}>
                  <View style={styles.ItemImage}>
                    <Image
                      style={styles.ItemImageStyle}
                      source={require('../images/watch2.jpg')}
                    />
                  </View>
                  <Text style={styles.Itemname}>Apple Watch</Text>
                  <Text style={styles.subtitle}>Searies 6 RED</Text>
                  <Text style={styles.ItenPrice}>$ 500</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.ItemCard}>
                  <View style={styles.ItemImage}>
                    <Image
                      style={styles.ItemImageStyle}
                      source={require('../images/watch.jpg')}
                    />
                  </View>
                  <Text style={styles.Itemname}>Apple Watch</Text>
                  <Text style={styles.subtitle}>Searies 6 RED</Text>
                  <Text style={styles.ItenPrice}>$ 500</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.ItemCard}>
                  <View style={styles.ItemImage}>
                    <Image
                      style={styles.ItemImageStyle}
                      source={require('../images/watch2.jpg')}
                    />
                  </View>
                  <Text style={styles.Itemname}>Apple Watch</Text>
                  <Text style={styles.subtitle}>Searies 6 RED</Text>
                  <Text style={styles.ItenPrice}>$ 500</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.ItemCard}>
                  <View style={styles.ItemImage}>
                    <Image
                      style={styles.ItemImageStyle}
                      source={require('../images/watch2.jpg')}
                    />
                  </View>
                  <Text style={styles.Itemname}>Apple Watch</Text>
                  <Text style={styles.subtitle}>Searies 6 RED</Text>
                  <Text style={styles.ItenPrice}>$ 500</Text>
                </View>
              </TouchableOpacity>
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
    barStyle = "dark-content"
    backgroundColor = "#E5E5E5"
    translucent = {false}
    networkActivityIndicatorVisible = {true}
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
    marginLeft: 60,
    marginTop: 30,
  },
  menuicon: {
    height: '10%',
    marginTop: 10,
    // marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  SearchBar: {
    borderWidth: 1,
    borderColor: '#200E32',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
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
    // marginLeft: 25,
    height: '10%',
    marginTop: 50,
    marginBottom: 50,
    justifyContent: 'center',
  },
  categoryBtn: {
    // marginLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
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
    marginRight: 30
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
    fontSize: 22,
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
  },
  seeMoreBtn: {
    color: '#5956E9',
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: 'center',
    textAlign: 'right',
    marginRight: 5,
  },
});
