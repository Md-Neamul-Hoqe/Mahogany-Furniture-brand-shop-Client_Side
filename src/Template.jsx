import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Template = () => {
  return (
    <div>
      <Navbar />
      <section className="min-h-screen">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default Template;
