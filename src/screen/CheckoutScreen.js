import { View, Text, Button, SafeAreaView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useStripe } from '@stripe/stripe-react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CheckoutScreen(props, { navigation }) {
    navigation = props.n

    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [loading, setLoading] = useState(false);
    const [clientSecretKey, setClientSecretKey] = useState('')

    const fetchPaymentSheetParams = async () => {

        const response = await fetch(`http://192.168.1.12:4242/create-payment-intent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const { clientSecret } = await response.json();

        setClientSecretKey(clientSecret)
        console.log(clientSecret);
        return {
            clientSecret,
        };
    };

    const initializePaymentSheet = async () => {
        const {
            clientSecret,
        } = await fetchPaymentSheetParams();

        console.log(clientSecret);
        const { error } = await initPaymentSheet({
            paymentIntentClientSecret: clientSecret,
            allowsDelayedPaymentMethods: true,
            merchantDisplayName: 'Demo'
        });

        if (!error) {
            setLoading(true);
        }
    };

    const openPaymentSheet = async () => {
        const { error } = await presentPaymentSheet({
            client_secret: clientSecretKey
        });

        console.log(error);
        if (error) {
            Alert.alert(`${error.code}`, error.message);
        } else {
            Alert.alert('Success', 'Your order is confirmed!');
            navigation.navigate('Home')
            
        }
    };

    useEffect(() => {
        initializePaymentSheet();
    }, []);

    return (

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                disabled={!loading}
                onPress={openPaymentSheet}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginVertical: 15,
                    width: '100%',
                    color: '#ffffff',
                }}>Checkout</Text>
            </TouchableOpacity>
        </View>
    );
}