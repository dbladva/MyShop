import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  let Category = [
    'Meals',
    'Slides',
    'Snacks',
    'Drink',
    'Pizza',
    'Cheese',
    'Spicy',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.drawerLogo}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MaterialIcons name="menu" color={'white'} size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="shopping-cart" color={'white'} size={30} />
          </TouchableOpacity>
        </View>

        <View style={styles.TitleText}>
          <Text style={styles.MiniTitle}>Hello Ladva,</Text>
          <Text style={styles.mainTitle}>
            What would you like to <Text style={{color: 'orange'}}>eat?</Text>
          </Text>
        </View>

        <View style={styles.SearchBar}>
          <MaterialIcons name="search" color={'white'} size={30} />
          <TextInput
            style={styles.SearchInput}
            placeholder="Entwe a food name"
          />
          <TouchableOpacity
            style={{backgroundColor: 'orange', padding: 5, borderRadius: 5}}>
            <FontAwesome name="sliders" size={20} color={'black'} />
          </TouchableOpacity>
          <View></View>
        </View>

        <View style={styles.Category}>
          <ScrollView
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            {Category.map(cate => {
              return (
                <TouchableOpacity style={styles.ViewCate}>
                  <Text style={styles.CategoryText}>{cate}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.Spcialofffer}>
          <View>
            <Text style={styles.titleOffer}>Today's Spacial Offer</Text>
          </View>
          <View style={styles.CardOffer}>
            <View style={styles.cardImage}>
              <Image
                style={styles.Burger}
                source={require('../images/pizza.jpg')}
              />
            </View>
            <View style={styles.cardText}>
              <Text style={styles.pizzaName}>Yummies Spacial Pizza</Text>
              <Text>Now</Text>
              <View style={styles.Priceoffer}>
                <Text style={styles.Price}>Rs 500</Text>
                <Text style={styles.offer}>(10% off)</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.btnCart}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.Popular}>
          <Text style={styles.titleOffer}>Today's Spacial Offer</Text>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Text style={styles.seeAll}>See all menu</Text>
            <MaterialIcons
              style={{alignItems: 'baseline'}}
              name="keyboard-arrow-right"
              size={20}
              color={'orange'}
            />
          </View>
        </View>

        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={{width: '100%', flexWrap: 'wrap'}}>
            <TouchableOpacity>
              <View style={styles.ItemCard}>
                <View style={styles.ItemImage}>
                  <Image
                    style={styles.ItemImageStyle}
                    source={require('../images/burger.jpg')}
                  />
                </View>
                <Text style={styles.Itemname}>Breaf Salad</Text>
                <Text style={styles.ItenPrice}>RS: 500</Text>
                <FontAwesome
                  style={{position: 'absolute', top: 10, right: 10}}
                  name="heart"
                  size={25}
                  color={'red'}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ItemCard}>
                <View style={styles.ItemImage}>
                  <Image
                    style={styles.ItemImageStyle}
                    source={require('../images/burger.jpg')}
                  />
                </View>
                <Text style={styles.Itemname}>Breaf Salad</Text>
                <Text style={styles.ItenPrice}>RS: 500</Text>
                <TouchableOpacity
                  style={{position: 'absolute', top: 10, right: 10}}>
                  <FontAwesome name="heart" size={25} color={'red'} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.ItemCard}>
                <View style={styles.ItemImage}>
                  <Image
                    style={styles.ItemImageStyle}
                    source={require('../images/burger.jpg')}
                  />
                </View>
                <Text style={styles.Itemname}>Breaf Salad</Text>
                <Text style={styles.ItenPrice}>RS: 500</Text>
                <TouchableOpacity
                  style={{position: 'absolute', top: 10, right: 10}}>
                  <FontAwesome name="heart" size={25} color={'red'} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.ItemCard}>
                <View style={styles.ItemImage}>
                  <Image
                    style={styles.ItemImageStyle}
                    source={require('../images/burger.jpg')}
                  />
                </View>
                <Text style={styles.Itemname}>Breaf Salad</Text>
                <Text style={styles.ItenPrice}>RS: 500</Text>
                <TouchableOpacity
                  style={{position: 'absolute', top: 10, right: 10}}>
                  <FontAwesome name="heart" size={25} color={'red'} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.ItemCard}>
                <View style={styles.ItemImage}>
                  <Image
                    style={styles.ItemImageStyle}
                    source={require('../images/burger.jpg')}
                  />
                </View>
                <Text style={styles.Itemname}>Breaf Salad</Text>
                <Text style={styles.ItenPrice}>RS: 500</Text>
                <TouchableOpacity
                  style={{position: 'absolute', top: 10, right: 10}}>
                  <FontAwesome name="heart" size={25} color={'red'} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

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
  TitleText: {
    margin: 10,
  },
  mainTitle: {
    fontSize: 33,
    fontWeight: 'bold',
    color: 'white',
  },
  MiniTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  SearchBar: {
    borderWidth: 1,
    borderColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    borderRadius: 5,
    padding: 2,
    shadowColor: 'gray',
    shadowOpacity: 500,
  },
  SearchInput: {
    width: '80%',
    color: 'white',
    height: 40,
  },
  Category: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  CategoryText: {
    fontWeight: '600',
    color: 'white',
    backgroundColor: '#2E2E2E',
    margin: 5,
    paddingLeft: 20,
    paddingRight: 20,
    padding: 5,
    borderRadius: 100,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: 'white',
    elevation: 10,
  },
  Spcialofffer: {
    margin: 10,
  },
  titleOffer: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  CardOffer: {
    marginTop: 10,
    height: 120,
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#2E2E2E',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: 'white',
    elevation: 10,
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  cardImage: {
    width: '50%',
  },
  cardText: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  Burger: {
    height: '100%',
    width: '100%',
    padding: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  pizzaName: {
    color: 'white',
    opacity: 0.8,
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 5,
    fontSize: 16,
  },
  Priceoffer: {
    alignItems: 'center',
  },
  Price: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    textTransform: 'uppercase',
  },
  offer: {
    color: 'red',
    opacity: 0.6,
  },
  btnCart: {
    borderWidth: 1,
    borderColor: 'orange',
    padding: 5,
    borderRadius: 5,
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'orange',
  },
  Popular: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    margin: 10,
  },
  seeAll: {
    color: 'orange',
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  ItemCard: {
    margin: 10,
    width: 170,
    height: 160,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    borderRadius: 10,
    // shadowColor: 'white',
    // elevation: 5,
    justifyContent: 'space-between',
    padding: 5,
  },
  ItemImage: {
    // padding: 10,
  },
  ItemImageStyle: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  Itemname: {
    textAlign: 'center',
    letterSpacing: 2,
    color: 'white',
    fontSize: 18,
    opacity: 0.8,
  },
  ItenPrice: {
    letterSpacing: 2,
    color: 'white',
    fontSize: 18,
  },
});
