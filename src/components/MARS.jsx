import React, { useState } from "react";

var MARS = () => {
  const [date, setDate] = useState(null);
  const [page, setPage] = useState(null);
  const [data, setData] = useState(null);
  function handleDate(event) {
    setDate(event.target.value);
  }
  function handlePage(event) {
    setPage(event.target.value);
  }
  async function getData() {
    const res = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&page=${page}&api_key=m5qSFJLeqz6oshoKMC0S8QChxUfWerz4VdqOiFo8  `
    );
    const dataNew = await res.json();
    await setData(dataNew);
    console.log(data);
  }
  return (
    <div className="mars-div">
    
      <div className="abt ">
        <h1 className="abt-h1">Welcome To Mars</h1>
        <p>
          Welcome to Mars here yuo can get the exclusive images retrived by
          NASA's mars rovers get the images and info below 👇
        </p>
      </div>
      <div class="form-control">
        <div className="flex space-x-3 center">
          <div class="flex inp space-x-2">
            <input
              placeholder="YYYY-MM-DD"
              class="w-full input input-primary input-bordered input-mars"
              type="text"
              onChange={handleDate}
            />
          </div>
          <div class="flex inp space-x-2">
            <input
              placeholder="no of pages ( 1 = 25 items)"
              class="w-full input input-primary input-bordered input-mars"
              type="text"
              onChange={handlePage}
            />
          </div>
          <button onClick={getData} class="btn btn-primary">
            go
          </button>
        </div>
        <div className=" grid grid-cols-2 ">
        {data != null ? (
          data.photos.map((x) => {
            return (
              <div className="ind mars-div-info" >
                <img className="img-smil" src={x.img_src} alt="img not found" />
                <h1 className="h1-mars-info">Id: {x.id}</h1>
                <h1>Earth-Date: {x.earth_date}</h1>
                <h1>Mars Time: {x.sol} sol</h1>
                <h1>Camera: {x.camera.full_name}</h1>
                <h1>Launch-Date: {x.rover.launch_date}</h1>
                <h1>Landing-Date: {x.rover.landing_date}</h1>
              </div>
            );
          })
        ) : (
          <>
          <div class = "h1-bydate-div">
        <h1 class="h1-Mars">
            The Result will be displayed Here !
        </h1>
        </div>
          <div class = "h1-bydate-div">
        <h1 class="h1-Mars">
            The Result will be displayed Here !
        </h1>
        </div>
        </>
        )}
        </div> 
      </div>
    </div>
  );
};
export default MARS;
