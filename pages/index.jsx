import Navbars from "./component/organisms/Navbars";
import Banner from "./component/organisms/Banner";
import Products from "./component/Products";
import Footer from "./component/organisms/Footer";
import axios from "axios";

const Home = ({ data, category }) => {
  console.log(category);
  return (
    <div className="">
      <Navbars data={category} />
      <Banner />
      <Products data={data} />
      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_APP_BASE_URL}/product`
    );
    const category = await axios.get(
      `${process.env.NEXT_APP_BASE_URL}/category`
    );
    const data = response.data.data;
    console.log(category.data);

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

export default Home;
