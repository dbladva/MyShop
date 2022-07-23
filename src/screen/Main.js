import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import Welcome from './Welcome'
import Login from './Login';
import Signup from './Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import CustomDrawer from './CustomDrawer';
import Whishlist from './Whishlist';
import Profile from './Profile';
import Delevery from './Delevery';
import Setting from './Setting';
import Basket from './Basket';
import Details from './Details';
import AsyncStorage from '@react-native-community/async-storage';
import { uid } from '../redux/action/auth.action';
import ForgotPassword from './ForgotPassword';
import PhoneAuth from './PhoneAuth';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreenTab = () => {

    return (
        
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
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
            {/* <Stack.Screen name="Homee" component={Welcome} /> */}
            {/* <Stack.Screen name="Login" component={Login} /> */}
            <Stack.Screen name="Home" component={HomeScreenTab} />
            <Stack.Screen name="Whishlist" component={Whishlist} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Basket" component={Basket} />
        </Stack.Navigator>
    );
};


export default function Main() {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.auth)
    useEffect(() => {
        // getData()
        dispatch(uid())
    }, [])

    console.log('userrrrrrrrrrrrrrrrrrrrr', userId.user);
    // const [, setUid] = useState('')

    // const getData = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('user')
    //         if (value !== null) {
    //             console.log('Value',value);
    //             setUid(value)
    //         }
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    // console.log('uidddddddd', uid);

    let auth = useSelector(state => state.auth);
    console.log('user', auth.user,);

    return (
        // auth.isLoading === true ?  <View style={{flex: 1,alignItems: 'center',justifyContent: 'center',backgroundColor: '#ffffff'}}><ActivityIndicator size="large" color="#000000" /></View>
        // :
        auth.user !== null || userId.user !== null ?
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
                        name="Profile"
                        component={StackScreen}
                        options={{
                            drawerIcon: ({ focused, size }) => (
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
                            drawerIcon: ({ focused, size }) => (
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
                            drawerIcon: ({ focused, size }) => (
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
                            drawerIcon: ({ focused, size }) => (
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
                            drawerIcon: ({ focused, size }) => (
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
            :
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}>
                    <Stack.Screen name="Homee" component={Welcome} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                    <Stack.Screen name="PhoneAuth" component={PhoneAuth} />
                </Stack.Navigator>
            </NavigationContainer>
    )
}