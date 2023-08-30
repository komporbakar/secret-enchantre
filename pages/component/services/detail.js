import axios from "axios";
import { BASE_URL } from "../../api/apiProducts";

const Detail = async() => {
     await axios.get(BASE_URL + `/product/${id}`).then((res) => res.data)
}

export default Detail