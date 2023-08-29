import axios from "axios";
import { BASE_URL } from "../../api/apiProducts";


export const fetchApi = async () => {
    const { data } = await axios.get(BASE_URL + "/product");
    if (data) {
        return data;
    }

}