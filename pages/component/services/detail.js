import axios from "axios";
import { BASE_URL } from "../../api/apiProducts";

export const detail =  {
    detail : async(id) => await axios.get(BASE_URL + `/product/${id}`).then((res) => res.data)
}