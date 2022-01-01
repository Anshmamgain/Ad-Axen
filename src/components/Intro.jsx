import React, { useState } from "react";
import axios from "axios";

const Intro = () => {
  const [image, setImage] = useState("");

  axios.get();

  return (
    <div class="hero transparent min-h-screen bg-base-200">
      <div class="flex-col hero-content lg:flex-row-reverse">
        <img
          alt="lol"
          src="https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=DEMO_KEY"
          class="max-w-sm rnd rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="mb-5 gra text-5xl font-bold h1-int">Welcome to Ad-Axen</h1>
          <p class="mb-5 pmain">
            Welcome to Ad-Axen. A place for amazing astrominded people to get amazing Space~Tech services. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
