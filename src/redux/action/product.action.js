import * as ActionType from '../ActionType'

export const getproduct = () => (dispatch) => {
    try {
        // fetch('http://192.168.43.200:8000/products', {
        fetch('http://localhost:3004/products', {

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


export const CartItem = (id,navigation) => (dispatch) => {
  console.log("dispatchedddddddddddddddddddddddd");
  try {
      fetch('http://192.168.43.200:8000/products', {
        // fetch('http://192.168.1.7:8000/products', {
        // fetch('http://localhost:3004/products', {
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
              data.map((item) => {
                if(item.id === id ){
                  console.log('IDDDDDDDDDDDDDDDDDDD',item.id);
                  dispatch({type:ActionType.CART_ITEM,payload:item})
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