import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import CheckoutScreen from './CheckoutScreen'
import { StripeProvider, useStripe } from '@stripe/stripe-react-native'

const DemoPayment = ({navigation}) => {
  return (
    <View style={{alignItems: 'center',justifyContent: 'center'}}>
       <StripeProvider
              publishableKey="pk_test_51LNYxZSDfkRpEt9y8Qnga24uWhgyLC6ONu3eMLnzuIvbpaVwDQTJd7wPTefythkquVUnyIIfCM8h1S7iP3s6yK4m00mbWVxSXi"
              urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
              merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
            >
              <CheckoutScreen n = {navigation} />
            </StripeProvider>
    </View>
  )
}

export default DemoPayment

const styles = StyleSheet.create({})