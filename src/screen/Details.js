import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { color } from 'react-native-reanimated';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getproduct } from '../redux/action/product.action';
import { CartItem } from '../redux/action/cart.action';

const Details = ({ route, navigation }) => {
  const { itemid } = route.params;
  const { name } = route.params;
  const { price } = route.params;
  const { category } = route.params;

  const item = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const ItemData = item.cart;





  const HandelBasketItem = (id,name,price,category,navigation) => {
    const data = ({
      name,
      price,
      category
    })
      dispatch(CartItem(data,navigation));
     }
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.FavoriteItemView}>
          <View style={styles.back}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => navigation.goBack()}>
              <MaterialIcons name="arrow-back" color={'#000000'} size={25} />
            </TouchableOpacity>
            <View style={{ alignSelf: 'center' }}>
              <Text style={styles.favrioteText}></Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="ios-heart-outline" color={'#000000'} size={25} />
            </TouchableOpacity>
          </View>
          <View>
            {
              category === 'wearable' ? 
              (<Image
              style={styles.detailImage}
              source={require('../images/watch.jpg')}
            /> ) : category==='laptop' ? ( <Image
              style={styles.detailImage}
              source={require('../images/mac.jpg')}
            />) : category === 'phones' ? ( <Image
              style={styles.detailImage}
              source={require('../images/iphone.jpg')}
            />) : category ==='drones' ? ( <Image
              style={styles.detailImage}
              source={require('../images/drones.jpg')}
            />) : ( <Image
              style={styles.detailImage}
              source={require('../images/mac.jpg')}
            />)
            }

          </View>
        </View>

        <View style={styles.detailView}>
          <View>
            <Text style={styles.itemName}>{name}</Text>

            <View>
              <Text style={styles.color}>Color</Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 10,
                }}>
                <TouchableOpacity>
                  <View style={styles.colorType}>
                    <Octicons name="dot-fill" color={'#7485C1'} size={25} />
                    <Text style={{ marginLeft: 5 }}>Sky Blue</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.colorType}>
                    <Octicons name="dot-fill" color={'#C9A19C'} size={25} />
                    <Text style={{ marginLeft: 5 }}>Rose GOld</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.colorType}>
                    <Octicons name="dot-fill" color={'#A1C89B'} size={25} />
                    <Text style={{ marginLeft: 5 }}>Green</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.color}>Get Apple TV + Free for a year</Text>
                <Text style={styles.detailstext}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </Text>

                <TouchableOpacity
                  style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.detailsInDetail}>Full description</Text>
                  <AntDesign name="arrowright" color={'#5956E9'} size={15} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                width: '100%',
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{ color: '#000000' }}>Total</Text>
              <Text style={styles.itemPrice}>$ {price}</Text>
            </View>

            {/* navigation.navigate('Basket',{id: itemid}) */}

            <TouchableOpacity 
            onPress={() => HandelBasketItem(itemid,name,price,category,navigation)}
              style={{ width: '100%', alignSelf: 'center', marginTop: 10 }}>
              <View
                style={{
                  alignSelf: 'center',
                  width: '100%',
                  backgroundColor: '#5956E9',
                  borderRadius: 10,
                }}>
                <Text style={styles.btnText}>Add to basket</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
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

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  container2: {
    flex: 1,
    height: '100%',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#F6F6F9',
  },
  back: {
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  favrioteText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  backArrow: {},
  FavoriteItemView: {
    justifyContent: 'space-evenly',
    height: '40%',
    backgroundColor: '#E5E5E5',
  },
  NoitemFavorite: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailFavoriteText: {
    textAlign: 'center',
    marginVertical: 7,
    color: 'gray',
  },
  itemView: {
    overflow: 'hidden',
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 10,
  },
  itemImage: {
    width: '35%',
    backgroundColor: '#F4F4F7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  image: {
    height: 100,
    width: 90,
  },
  itemText: {
    justifyContent: 'space-around',
    margin: 10,
    marginVertical: 20,
  },
  itemTitle: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5956E9',
  },
  Quantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 15,
    color: '#000000',
    marginRight: 10,
  },
  decreasBtn: {
    backgroundColor: '#7DCCEC',
    paddingHorizontal: 5,
    borderRadius: 2,
    marginHorizontal: 3,
    // color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  counterNum: {
    fontSize: 15,
    color: '#000000',
    fontWeight: 'bold',
    marginHorizontal: 3,
  },
  detailImage: {
    height: 230,
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  detailView: {
    height: '60%',
    paddingVertical: 10,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  itemName: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '600',
  },
  color: {
    marginTop: 5,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000000',
  },
  colorType: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  detailstext: {
    marginTop: 5,
    color: 'gray',
    letterSpacing: 1.5,
  },
  detailsInDetail: {
    color: '#5956E9',
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
