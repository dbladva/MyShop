import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import { DrawerContent, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { BottomNavigation } from 'react-native-paper';

const CustomDrawer = (props) => {
  return (
    <View style={{flex: 1,backgroundColor: '#dbffff'}}>
        <DrawerContentScrollView {...props} >
        <View style={{margin: 10,flexDirection: 'row',alignItems: 'center',marginBottom: 30,marginTop: 30}}> 
                <Image style={{height: 80,width: 80,borderRadius: 50}} source={require('../images/user.jpg')}/> 
                <View style={{marginLeft: 10,}}>
                    <Text style={{fontWeight: 'bold',fontSize: 20,color: 'black',}}>Dharmesh</Text>
                    <Text style={{fontWeight: 'bold',fontSize: 15,color: 'black',}}>Ladva</Text>
                </View>
            </View> 
            <DrawerItemList {...props} />
            <TouchableOpacity style={{position: 'absolute',top: 20, right: 20,}} >
            {/* <FontAwesome  name='close' size={25} color={'black'} /> */}
            </TouchableOpacity>
        </DrawerContentScrollView>
    </View> 
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})