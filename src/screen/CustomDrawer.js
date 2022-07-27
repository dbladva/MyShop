import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { DrawerContent, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { BottomNavigation } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import { getUserProfilePicture, userProfilePicture } from '../redux/action/auth.action';
import { useDispatch, useSelector } from 'react-redux';

const CustomDrawer = (props) => {
  const dispatch = useDispatch()
  const userId = useSelector(state => state.auth)

  console.log(userId.userProfile);

  useEffect(() => {
    dispatch(getUserProfilePicture(userId.user))
  }, [])

  const GallaryHandler = async () => {
    ImagePicker.openPicker({
      width: 150,
      height: 150,
      cropping: true
    }).then(async image => {
      dispatch(userProfilePicture(image, userId.user))
    })
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
      <DrawerContentScrollView {...props} >
        <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 30, marginTop: 30 }}>
          <TouchableOpacity onPress={() => GallaryHandler()}>
            {
              userId.userProfile === ' ' || userId.userProfile === undefined ?
                <Image style={{ height: 80, width: 80, borderRadius: 50 }} source={{uri: 'https://firebasestorage.googleapis.com/v0/b/admin-d986a.appspot.com/o/user%2Fuser.jpg?alt=media&token=6bf25e67-ae65-42b3-8649-ec042b2d43ed'}} />
                :
                <Image style={{ height: 80, width: 80, borderRadius: 50 }} source={{
                  uri: userId.userProfile 
                }} />
            }
          </TouchableOpacity>
          <View style={{ marginLeft: 10, }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', }}>Dharmesh</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', }}>Ladva</Text>
          </View>
        </View>
        {/* <View style={{borderBottomColor: 'white',borderBottomWidth: 2,color: 'white'}}> */}
        <DrawerItemList {...props} />
        {/* </View> */}
        <TouchableOpacity style={{ position: 'absolute', top: 20, right: 20, }} >
          {/* <FontAwesome  name='close' size={25} color={'black'} /> */}
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})