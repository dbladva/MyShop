import * as ActionType from '../ActionType'

export const getproduct = () => (dispatch) => {
    try {
        fetch('http://192.168.43.200:8000/products', {
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