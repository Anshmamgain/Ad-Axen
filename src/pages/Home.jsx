import React from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Cards from "../components/cards";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Team from "../components/Team";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <div className="bg-no-repeat bg-cover h-screen bg-wrapper">
        <Navbar />
        <Intro />
      </div>
      <div class="home-about">
        <About />
      </div>
      <div className="card-group">
        <h1 class=" text-5xl p-2 text-center fun bg-black font-bold italic pb-5 pt-5 text-white h1-home">
          Services
        </h1>
        <div className="grp1">
          <Cards
            heading="APOD"
            img="https://www.pixel4k.com/wp-content/uploads/2019/03/silhouette-astronomy-4k_1551644487.jpg"
            para="One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds; but generally help with discoverability of relevant imagery.

The full documentation for this API can be found in the APOD API Github repository."
            url='/apod'
          />
          
          <Cards
            heading="Earth"
            img="https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            para="Landsat imagery is provided to the public as a joint project between NASA and USGS. A recent industry report on landsat satellite imagery data estimates that total annual value to the economy of $2.19 billion, far exceeding the multi-year total cost of building, launching, and managing Landsat satellites and sensors. The value is derived from consumers use of the data. The objective of this endpoint is to give you an easy to use taste of what Landsat imagery data can provide."
            url='/earth'
          
          />
        </div>
        <div className="home-pov">
         POV: I know you aren't reading the full description
          </div>
        <div className="grp3">
          <Cards
            heading="Mars Rover Photos"
            img="https://mars.nasa.gov/system/downloadable_items/34282_Mars-Viking1-Lander-Color-Image-PIA00563.jpg"
            para="This API is designed sto collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists. This API is maintained by Chris Cerami.
          Each rover has its own set of photos stored in the database, which can be queried separately. There are several possible queries that can be made against the API. Photos are organized by the sol (Martian rotation or day) on which they were taken, counting up from the rover's landing date. A photo taken on Curiosity's 1000th Martian sol exploring Mars, for example, will have a sol attribute of 1000. If instead you prefer to search by the Earth date on which a photo was taken, you can do that, too.
          "
          url='/mars'
          />
        </div>
        
      </div>
      <div class="team-home">
        <Team />
      </div>
      <div className="contact">
        <Contact />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;
