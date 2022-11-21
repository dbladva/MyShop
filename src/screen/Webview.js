import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const Webview = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <WebView style={styles.webview} source={{ uri: 'https://youtube.com/' }} />
        </SafeAreaView>
    )
}

export default Webview

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webview: {
        flex: 1
    }
})