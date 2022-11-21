import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation';
import { useDispatch } from 'react-redux';
import { getCurrenLocation } from '../redux/action/location.action';
import MapView from 'react-native-maps';

const GeoLocation = () => {
    const [initialPosition, setInitialPosition] = useState("unknown")
    const [lastPosition, setLastPosition] = useState("unknown")

    const dispatch = useDispatch()
    useEffect(() => {
        Geolocation.getCurrentPosition(info => {
            dispatch(getCurrenLocation(info))
            setInitialPosition(info.coords.longitude)
            setLastPosition(info.coords.latitude)
        })
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.boldText}>
                Initial position:
            </Text>

            <Text>
                {initialPosition}
            </Text>

            <Text style={styles.boldText}>
                Current position:
            </Text>

            <Text>
                {lastPosition}
            </Text>

            {/* <MapView
                initialRegion={{
                    latitude: initialPosition,
                    longitude: lastPosition,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            /> */}
        </View>
    )
}

export default GeoLocation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    boldText: {
        fontSize: 30,
        color: 'red',
    }
})