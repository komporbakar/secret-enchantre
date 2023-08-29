import Navbars from './component/Navbars'
import Banner from './component/Banner'
import Products from './component/Products'
import Footer from './component/Footer'
import axios from 'axios'

const Home = ({data}) => {
  console.log(data)
  return (
  <div className="">
    <Navbars/>
    <Banner/>
    <Products data={data}/>
    <Footer/>
  </div>
  )
}

export const getServerSideProps = async () => {
  try {
    const response = await  axios.get(`https://my-json-server.typicode.com/helsinski/apiProduct/product`);;
    const data = response.data;

    return {
      props: {
        data: data
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
}

export default Home

