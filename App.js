import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Welcome from './src/screen/Welcome';
import Login from './src/screen/Login';
import Signup from './src/screen/Signup';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Home from './src/screen/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';  
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';  

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreenTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Homeeeee') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name == 'Logins') {
            iconName = focused ? 'login' : 'login';
          }
          else if (route.name == 'signupp') {
            iconName = focused ? 'logout' : 'logout';
          }
          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveBackgroundColor: 'black',
        tabBarInactiveBackgroundColor: 'black',

        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'white',
      })}>
      <Tab.Screen name="Homeeeee" component={Home} />
      <Tab.Screen name="Logins" component={Login} />
      <Tab.Screen name="signupp" component={Signup} />
    </Tab.Navigator>
  );
};

const StackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Homeeee" component={Welcome} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="signin" component={Login} />
      <Stack.Screen name="Home" component={HomeScreenTab} />
    </Stack.Navigator>
  );
};

const App = ({navigation}) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{headerShown: false}}>
          <Drawer.Screen  name="home" component={StackScreen} />
          <Drawer.Screen name="welcome" component={Welcome} />
          <Drawer.Screen name="Loginn" component={Login} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
