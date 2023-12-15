import React, { useEffect, useReducer } from "react";
import Navbars from "../component/organisms/Navbars";
import MainCart from "../component/MainCart";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../redux/cart/actions";

// const API = process.env.NEXT_API_KEY;

export default function Cart() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.data);
  console.log(data);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);
  return (
    <>
      <Navbars />
      <MainCart data={data} />
    </>
  );
}

// export const getServerSideProps = async () => {
//   // const { slug } = context.query; // Mengambil ID dari URL parameter
// // console.log(slug)

// const url = 'https://api.rajaongkir.com/starter/province?id=12'
// const config = {
//   header: {
//     'key': API
//   }
// }
//   try {
//     const response = await axios(config, url);
//     const data = response.data;

//     // const dataObject = data.length > 0 ? data[0] : null;

//     return {
//       props: {
//         data: data
//       }
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return {
//       props: {
//         data: null // Handle error case
//       }
//     };
//   }
// };
