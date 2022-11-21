import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import sound from 'react-native-sound';  

const Sound = () => {
    sound.setCategory('playback');  
    return (
        <View>
            <Text>Sound</Text>
        </View>
    )
}

export default Sound

const styles = StyleSheet.create({})