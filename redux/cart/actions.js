import { failureFerchingCart, failureUpdateQuantity, startFetchingCart, successFetchingCart, successUpdateQuantity } from "./slice";
import axios from 'axios'


export const fetchCart = () => async (dispatch) => {
  const token = localStorage.getItem('token')
  try {
    dispatch(startFetchingCart())

    const response = await axios.get(`http://localhost:7077/cart`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    });

      
    dispatch(successFetchingCart(response.data));
  } catch (error) {
    console.error('Error fetching Transactions:', error);
    dispatch(failureFerchingCart(error));
  }
};

export const updateQuantity = (itemId, newQuantity) => async(dispatch) => {
  const token = localStorage.getItem('token')
  try {
    const response = await axios.post(`http://localhost:7077/cart`,{
      itemId: itemId,
      quantity: newQuantity
    },{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    dispatch(successUpdateQuantity({
      itemId : itemId,
      newQuantity: response.data.quantity
    }))
  } catch (error) {
    console.error(error)
    dispatch(failureUpdateQuantity(error))
  }
}