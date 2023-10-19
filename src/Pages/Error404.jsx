import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Error404 = () => {
  return (
    <div>
      <Navbar />
      <img className="w-full" src="./src/assets/404.gif" alt="error page" />
      <Helmet>
        <title>Mahogany | Not Found</title>
      </Helmet>
      <Footer />
    </div>
  );
};

export default Error404;
