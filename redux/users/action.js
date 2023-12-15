import { failureFetchingUsers, startFetchingUsers, successFetchingUsers  } from "./slices";
import axios from 'axios'


export const fetchUsers = () => async (dispatch) => {
  const token = localStorage.getItem('token')
  try {
    dispatch(startFetchingUsers())

    const response = await axios.get(`http://localhost:7077/api/v1/users`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    });

      
    dispatch(successFetchingUsers(response.data));
  } catch (error) {
    console.error('Error fetching Transactions:', error);
    dispatch(failureFetchingUsers(error));
  }
};