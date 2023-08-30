import axios from "axios";

const BASE_URL = process.env.NEXT_BASE_URL


 const fetchApi = async () => {
   try {
    const { data } = await axios.get(BASE_URL + "/product");
    if (data) {
        return data;
    }
   } catch (error) {
    return error
   }

}

export default fetchApi