import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Home = ({navigation}) => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
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
        <Text style={styles.mainTitle}>What would you like to <Text style={{color: 'orange'}}>eat?</Text></Text>
    </View>

    <View style={styles.SearchBar}>
    <MaterialIcons name="search" color={'white'} size={30} />
    <TextInput style={styles.SearchInput} placeholder='Entwe a food name' />
    <TouchableOpacity style={{backgroundColor: 'orange', padding: 5,borderRadius: 5,}}>
    <FontAwesome name='sliders' size={20} color={'black'} />
    </TouchableOpacity>
<View>

</View>
    </View>
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
  TitleText:{
    margin: 10,
  },
  mainTitle:{
fontSize: 33,
fontWeight: 'bold',
color: 'white'
  },
  MiniTitle:{
fontSize : 18,
fontWeight: '500',
color: 'white'
  },
  SearchBar:{
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
  SearchInput:{
      width: '80%',
color: 'white',
height: 40,

  },
});
