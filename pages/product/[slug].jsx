import React from "react";
import Footer from "../component/organisms/Footer";
import Navbars from "../component/organisms/Navbars";
import MainProduct from "../component/MainProduct";
import axios from "axios";

function DetailProduct({ data }) {
  console.log(data);
  return (
    <>
      <Navbars />
      <MainProduct data={data} />
      <Footer />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { slug } = context.query; // Mengambil ID dari URL parameter
  // console.log(slug)
  try {
    const response = await axios.get(
      `${process.env.NEXT_APP_BASE_URL}/product/${slug}`
    );
    const data = response.data.data;
    console.log(data);

    return {
      props: {
        data: data,
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

export default DetailProduct;
