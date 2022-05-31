import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'
import Welcome from './src/screen/Welcome'
import Login from './src/screen/Login'
import Signup from './src/screen/Signup'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

const Stack = createNativeStackNavigator();

const App = ({Pnavigation }) => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App