import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import NetInfo from "@react-native-community/netinfo";
import { useDispatch } from 'react-redux';
import { noInternetAction } from '../redux/action/no_network_action';


const NoNetworkBar = () => {
    const [netInfo, setNetInfo] = useState('');
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(noInternetAction(netInfo))
        const unsubscribe = NetInfo.addEventListener((state) => {
            setNetInfo(state.isConnected)
        });
        return () => {
            unsubscribe();
        };
    });

    const getNetInfo = () => {
        // To get the network state once
        NetInfo.fetch().then((state) => {
            alert(
                `Connection type: ${state.type}
            Is connected?: ${state.isConnected}
            IP Address: ${state.details.ipAddress}`,
            );
        });
    };

    // const { isConnected } = netInfo;
    console.log('====================================');
    console.log(netInfo);
    console.log('====================================');


    return !netInfo ? (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={"red"} barStyle={'light-content'} />
            <Text style={[styles.offlineText]}>
                You must connected to Wifi or cellular network to get online again.
            </Text>
        </SafeAreaView>
    ) : null;
}

export default NoNetworkBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        alignItems: 'center',
    },
    offlineText: {
        color: 'white',
        padding: 10,
        fontSize: 14,
        width: "70%",
        textAlign: 'center'
        // ,marginBottom: 5
    },
})