import React, { useState } from "react";

var EARTH = () => {
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [dim, setDim] = useState(null);
  const [image, setImage] = useState(null);
  function latInp(event) {
    setLongitude(event.target.value);
  }
  function longInp(event) {
    setLatitude(event.target.value);
  }
  function dimInp(event) {
    setDim(event.target.value);
  }
  function getImage() {
    setImage(
      `https://api.nasa.gov/planetary/earth/imagery?lon=${longitude}&lat=${latitude}&date=2018-01-01&dim=${dim}&api_key=m5qSFJLeqz6oshoKMC0S8QChxUfWerz4VdqOiFo8`
    );
  }
  return (
    <>
      <div className="abt">
        <h1>Welcome To Earth</h1>
        <p>
          Welcome to Earth , A Service where you can get the image of any
          perticular latitude and longitude with the date specified in the Welp
          only one way to find out! 👇
        </p>
      </div>
      <div class="form-control">
        <div className="flex space-x-3 center">
          <div class="flex inp space-x-2">
            <input
              placeholder="Latitute in float (eg: -95.33)"
              class="w-full input input-primary input-bordered"
              type="text"
              onChange={latInp}
            />
          </div>
          <div class="flex inp space-x-2">
            <input
              placeholder="Longitude in float (eg: 29.78)"
              class="w-full input input-primary input-bordered"
              type="text"
              onChange={longInp}
            />
          </div>
          <div class="flex inp space-x-2">
            <input
              placeholder="Dim(zoom) should be between 0 and 1 (eg: 0.15)"
              class="w-full input input-primary input-bordered"
              type="text"
              onChange={dimInp}
            />
            <button onClick={getImage} class="btn btn-primary">
              go
            </button>
          </div>
        </div>
      </div>
      <div className="flex brd center">
      
        {image != null ? (
          <>
            <div class="card bdr lg:card-side card-bordered">
              <figure>
                <img src={image} className="img-main" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">latitude: {latitude}</h2>
                <h2 class="card-title">longitude: {longitude}</h2>
                <h2 class="card-title">Dim: {dim}</h2>
              </div>
            </div>
          </>
        ) : (
          <img
            className="img-main-v2"
            src="https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=DEMO_KEY"
            alt="the image is not loaded"
          />
        )}
      </div>
      </>
   
  )
}
export default EARTH;