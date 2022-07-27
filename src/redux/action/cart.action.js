import { Alert } from "react-native";
import { baseURL, baseURLlab } from '../../baseURL';
import * as ActionType from '../ActionType'
import firestore from '@react-native-firebase/firestore';

export const CartItem = (data,navigation) => async (dispatch) => {
  try {
    dispatch(cartLoading())
    await firestore()
      .collection('Cart')
      .add({
        name: data.name,
        price: data.price,
        category: data.category,
      })
      .then(() => {
        console.log('User added!');
        navigation.navigate('Basket')
      });
  } catch (error) {
    console.log(error);
  }
}

export const GetCartItem = () => async (dispatch) => {
  try {
    dispatch(cartLoading())
    let data = [];
    await firestore()
      .collection('Cart')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          let d = {
            id: documentSnapshot.id,
            ...documentSnapshot.data()
          }
          data.push(d);
        });
      });
    dispatch({ type: ActionType.GET_CART_ITEM, payload: data })
  } catch (error) {
    console.log(error);
  }
}


export const deleteCartItem = (id) => async (dispatch) => {
  try {
    dispatch(cartLoading())
    await firestore()
    .collection('Cart')
    .doc(id)
    .delete()
    .then(() => {
      console.log('Item deleted!');
      dispatch({type:ActionType.DELETE_CART_ITEM,payload: id})
    }); 
  } catch (error) {
    console.log(error);
  }
}


export const cartLoading = () => async(dispatch) => {
  dispatch({type:ActionType.LOADING_CART})
}

export const deleteAllProduct = () => (dispatch) => {
  
}

export const cartValue = (total) => (dispatch) => {
dispatch({type: ActionType.CART_VALUE,payload: total})
}