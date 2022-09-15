import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  SafeAreaView
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';
import { StatusBar } from 'react-native';

const Whishlist = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.back}>
          <TouchableOpacity
            style={styles.backArrow}
            onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" color={'#000000'} size={30} />
          </TouchableOpacity>
          <View style={{ alignSelf: 'center' }}>
            <Text style={styles.favrioteText}>Favorite</Text>
          </View>
          {/* <Text style={styles.favrioteText}></Text> */}
        </View>

        <View style={styles.FavoriteItemView}>
          <Image
            style={{ height: 300, width: 300, alignSelf: 'center' }}
            source={require('../images/favorite.png')}
          />
          <Text style={styles.NoitemFavorite}>No favorites yet</Text>
          <Text style={styles.detailFavoriteText}>
            Hit the orange button down {'\n'} below to Create an order
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View
              style={{
                backgroundColor: '#58C0EA',
                width: '50%',
                alignItems: 'center',
                alignSelf: 'center',
                marginVertical: 8,
                borderRadius: 5,
              }}>
              <Text style={{ color: '#ffffff', fontWeight: '500', padding: 10 }}>
                Start Ordering
              </Text>
            </View>
          </TouchableOpacity>
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

export default Whishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  container2: {
    flex: 1,
    // margin: 30,
  },
  back: {
    marginVertical: 20,
    marginHorizontal: 16,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  favrioteText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  backArrow: {
    position: 'absolute',
    left: 0,
  },
  FavoriteItemView: {
    height: '70%',
    justifyContent: 'center',
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
});
