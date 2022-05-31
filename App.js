import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'
import Home from './src/screen/Home'
import Login from './src/screen/Login'
import Signup from './src/screen/Signup'

const App = () => {
  return (
    <View style={{flex: 1}}>
   
      <Home />
   
    </View>
  )
}

export default App

const styles = StyleSheet.create({})