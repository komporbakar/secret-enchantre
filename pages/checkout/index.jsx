import React, { useEffect } from "react";
import Navbars from "../component/organisms/Navbars";
import Footer from "../component/organisms/Footer";
import MainCheckout from "../component/MainCheckout";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../redux/cart/actions";
import { fetchUsers } from "../../redux/users/action";

export default function Checkout({ province, city }) {
  // console.log(data, city)
  // useEffect(() => {
  //   axios.get('https://api.rajaongkir.com/starter/province', {
  //     headers: {
  //       'key': 'cd2f96ebf24673111720a37e37ea9ff4'
  //     }
  //   }).then((res) => {
  //     console.log(res.data);
  //     return res.data
  //   }).catch((err) => console.log(err));
  // }, []);
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.cart?.data);
  const user = useSelector((state) => state?.user?.data);
  console.log(user);

  useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <Navbars />
      <MainCheckout province={province} city={city} data={data} user={user} />
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsbTU2ZTBmbTAwMDF1dDQwbWt5c25rNW8iLCJpYXQiOjE3MDI2MTA4MjAsImV4cCI6MTcwMjY1NDAyMH0.U40MxjyP9B3oZOR78x4OChj_LrrCVLOEwaIkxxy5dX0";
  try {
    const response = await axios.get(
      "http://localhost:7077/api/v1/address/province",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.data);
    const data = response.data.data;
    return {
      props: {
        province: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: null, // Handle error case
      },
    };
  }
};
