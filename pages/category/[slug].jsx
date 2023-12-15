import { useRouter } from "next/router";
import React from "react";
import axios from "axios";
import Navbars from "../component/organisms/Navbars";
import Products from "../component/Products";
import Footer from "../component/organisms/Footer";

const Categories = ({ data, category }) => {
  // console.log("data", data);
  return (
    <div className="">
      <Navbars data={category} />
      <Products data={data} />
      <Footer />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  console.log(slug);
  try {
    const response = await axios.get(
      `${process.env.NEXT_APP_BASE_URL}/product`,
      {
        params: {
          category: slug,
        },
      }
    );
    const category = await axios.get(
      `${process.env.NEXT_APP_BASE_URL}/category`
    );
    console.log(response);
    const data = response.data.data;

    return {
      props: {
        data: data,
        category: category.data.data,
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

export default Categories;
