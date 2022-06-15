import { baseURL, baseURLlab } from '../../baseURL';
import { getAllProductsDetails } from '../../common/apis/product.api';
import * as ActionType from '../ActionType'

export const getproduct = () => (dispatch) => {
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
}


<<<<<<< Updated upstream
=======
export const CartItem = (ItemId,navigation) => (dispatch) => {

  try {
      fetch(baseURL+'/products', {
        // fetch(baseURLlab+'/products', {
            method: 'GET',
          })
        
            .then(response => {
              if (response.ok) {
                return response.json()
              } else {
                throw new Error('Something went wrong');
              }
            })
            .then((data) => {
              data.map((a) => {
                if(a.id === ItemId){
                  dispatch({type:ActionType.CART_ITEM,payload:data})
                  navigation.navigate('Basket')   
                }
              })

              }) 
            .catch(error => {
              console.log('Error',error);
            })
    }catch(error) {
      console.log("Error", Error);      
  }

  
}
>>>>>>> Stashed changes
