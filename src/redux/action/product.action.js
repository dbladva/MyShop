import { baseURL, baseURLlab } from '../../baseURL';
import { getAllProductsDetails } from '../../common/apis/product.api';
import * as ActionType from '../ActionType'
import firestore from '@react-native-firebase/firestore';


export const getproduct = () => async (dispatch) => {
  try {
      // fetch(baseURL+'/products', {
      // // fetch(baseURLlab,'/products', {
      //       method: 'GET',
      //     })
      //       .then(response => {
      //         if (response.ok) {
      //           return response.json()
      //         } else {
      //           throw new Error('Something went wrong');
      //         }
      //       })
      getAllProductsDetails()
            .then(({data}) => {
              dispatch({type:ActionType.GET_PRODUCT,payload:data})
              console.log(data);
            })
            .catch(error => {
              console.log('Error',error);
            })
    }catch(error) {
      console.log("Error", Error);      
  }

  

  try {
    let data = [];
    await firestore()
      .collection('Product')
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
      dispatch({type: ActionType.GET_PRODUCT,payload: data})
  } catch (error) {
console.log(error);
  }
}



