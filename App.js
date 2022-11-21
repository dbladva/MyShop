import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import { configStore, store } from './src/redux/store';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { PersistGate } from 'redux-persist/integration/react';
import Main from './src/screen/Main';
import NoNetworkBar from './src/screen/NoNetworkBar';


const App = ({ navigation }) => {

  useEffect(() => {
    SplashScreen.hide();
  });

  const { Store, persistor } = configStore();
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NoNetworkBar />
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
