import React from "react";
import APOD from "../components/APOD";
import Navbar from "../components/Navbar";
import ByDate from "../components/ByDate";
import Footer from "../components/Footer";

var Apod = () => {
  return (
    <div className="blick">
      <Navbar />
      <APOD />
      <ByDate />
      <Footer />
    </div>
  );
};
export default Apod;
