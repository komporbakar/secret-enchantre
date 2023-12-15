import React from "react";
import Navbars from "./component/organisms/Navbars";
import Footer from "./component/organisms/Footer";
import axios from "axios";

const Layout = ({ children, category }) => {
  console.log("ddda" + category);
  return (
    <div>
      <Navbars data={category} />
      {children}
      <Footer />
    </div>
  );
};

// export const getServerSideProps = async () => {
//   try {
//     const category = await axios.get(
//       `${process.env.NEXT_APP_BASE_URL}/category`
//     );
//     const data = category.data.data;
//     console.log("data", data);

//     return {
//       props: {
//         category: data,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       props: {
//         data: null, // Handle error case
//       },
//     };
//   }
// };

export default Layout;
