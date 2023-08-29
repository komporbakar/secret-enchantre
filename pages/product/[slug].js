import React from 'react'
import Footer from '../component/Footer'
import Navbars from '../component/Navbars'
import MainProduct from '../component/MainProduct'
import detail from '../component/services/detail'
import axios from 'axios'

 function DetailProduct({data}) {
    console.log(data)
  return (
    <>
        <Navbars/>
        <MainProduct data={data}/>
        <Footer/>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const { slug } = context.query; // Mengambil ID dari URL parameter
console.log(slug)
  try {
    const response = await axios.get(`https://my-json-server.typicode.com/helsinski/apiProduct/product?slug=${slug}`);
    const data = response.data;

    const dataObject = data.length > 0 ? data[0] : null;

    return {
      props: {
        data: dataObject
      }
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: null // Handle error case
      }
    };
  }
};



export default DetailProduct
