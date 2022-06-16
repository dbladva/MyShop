import {Alert} from "react-native";

import { baseURL } from '../../baseURL';
import * as ActionType from '../ActionType'

export const CartItem = (data,navigation) => (dispatch) => {
    console.log("dispatchedddddddddddddddddddddddd");
    try {
      fetch(baseURL+'/cartitem', {
        // fetch('http://26.190.111.222:8000/SignupData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((data) => {
          console.log('Success:', data);
          navigation.navigate('Basket')
          // Alert.alert(
          //   "Succesfully",
          //   "Item add to Basket",
          // [
          //     { text: "OK" ,onPress: () => navigation.navigate('Basket')},
          // ]
          //         );
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } catch (e) {
      console.log(e);
    }
    
  }

  export const GetCartItem = () => (dispatch) => {
    try {
      fetch(baseURL+'/cartitem', {
        // fetch(baseURLlab+'/users', {
  
        method: 'GET',
      })

        .then(response => response.json())
        .then((data) => {
          console.log('Succece', data);
          dispatch({type: ActionType.GET_CART_ITEM, payload: data})
        });
    } catch (e) {
      alert('Item Not Add to cart ');
    }
  }


  export const deleteCartItem = (id) => (dispatch) => {
  try {
    fetch(baseURL+'/cartitem/'+id, {    
        // fetch('http://localhost:3004/products/' + id, {
          method: 'DELETE',
        })
          .then(response => {
            if (response.ok) {
              return response
            } else {
              throw new Error('Something went wrong');
            }
          })
          .then(data => {
            dispatch({ type: ActionType.DELETE_CART_ITEM, payload: data })
          })
          .catch(error => {
            console.log(error.message);   
       });
     
  } catch (error) {
    // dispatch(errorProduct(error))
    console.log(error);
  }
}