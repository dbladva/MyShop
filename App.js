import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import Welcome from './src/screen/Welcome';
import Login from './src/screen/Login';
import Signup from './src/screen/Signup';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider, useSelector} from 'react-redux';
import {configStore, store} from './src/redux/store';
import Home from './src/screen/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import CustomDrawer from './src/screen/CustomDrawer';
import Whishlist from './src/screen/Whishlist';
import Profile from './src/screen/Profile';
import SplashScreen from 'react-native-splash-screen';
import Delevery from './src/screen/Delevery';
import Setting from './src/screen/Setting';
import Basket from './src/screen/Basket';
import Details from './src/screen/Details';
import { PersistGate } from 'redux-persist/integration/react';

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
          } else if (route.name == 'Whishlist') {
            return <FontAwesome name="heart" size={size} color={color} />;
            // iconName = focused ? 'ios-list-box' : 'ios-list';
          }
        else if (route.name == 'Basket') {
            //  iconName = focused ? 'basket-loaded' : 'basket';
          return <SimpleLineIcons name="basket-loaded" size={size} color={color} />;
        }
        else if (route.name == 'Profile') {
          //  iconName = focused ? 'basket-loaded' : 'basket';
        return <AntDesign name="user" size={size} color={color} />;
      }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveBackgroundColor: '#E5E5E5',
        tabBarInactiveBackgroundColor: '#E5E5E5',
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#5956E9',
        tabBarInactiveTintColor: '#000000',
      })}>
      <Tab.Screen name="Homeeeee" component={Home} />
      <Tab.Screen name="Whishlist" component={Whishlist} />
      <Tab.Screen name="Basket" component={Basket} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const StackScreen = () => {
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Homee" component={Welcome} /> 
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="Signup" component={Signup} /> */}
      <Stack.Screen name="Home" component={HomeScreenTab} />
      <Stack.Screen name="Whishlist" component={Whishlist} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Basket" component={Basket} />
    </Stack.Navigator>
  );
};

const App = ({navigation}) => {
  
  useEffect(() => {
    SplashScreen.hide();
  });

  const { Store, persistor } = configStore();
  return (
        <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            activeBackgroundColor: 'white',
            inactiveTintColor: 'black',
            inactiveBackgroundColor: 'red',
          }}
          drawerContent={props => <CustomDrawer {...props} />}>
          <Drawer.Screen
            name="home"
            component={StackScreen}
            options={{
              drawerIcon: ({focused, size}) => (
                <Ionicons
                  name="home"
                  size={size}
                  color={focused ? '#7cc' : '#d0c2e8'}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="Profile"
            component={Profile}
            options={{
              drawerIcon: ({focused, size}) => (
                <AntDesign
                  name="user"
                  size={size}
                  color={focused ? '#7cc' : '#d0c2e8'}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="Myorder"
            component={Basket}
            options={{
              drawerIcon: ({focused, size}) => (
                <AntDesign
                  name="shoppingcart"
                  size={size}
                  color={focused ? '#7cc' : '#d0c2e8'}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Favorite"
            component={Whishlist}
            options={{
              drawerIcon: ({focused, size}) => (
                <AntDesign
                  name="heart"
                  size={size}
                  color={focused ? '#7cc' : '#d0c2e8'}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Delevery"
            component={Delevery}
            options={{
              drawerIcon: ({focused, size}) => (
                <MaterialCommunityIcons
                  name="truck-delivery-outline"
                  size={size}
                  color={focused ? '#7cc' : '#d0c2e8'}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="Setting"
            component={Setting}
            options={{
              drawerIcon: ({focused, size}) => (
                <AntDesign
                  name="setting"
                  size={size}
                  color={focused ? '#7cc' : '#d0c2e8'}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
