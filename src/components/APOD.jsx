import React, { useState, useEffect } from "react";

var APOD = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getData();
    async function getData() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=m5qSFJLeqz6oshoKMC0S8QChxUfWerz4VdqOiFo8`
      );
      const dataNew = await res.json();
      setData(dataNew);
      console.log(dataNew);
    }
  }, []);

  if (!data) return <h1>Loading Date...</h1>;

  return (
    <>
      <div className="abt">
        <h1 className="abt-h1">Welcome To APOD</h1>
        <p>
          Welcome to APOD(Astonomical Picture of the day) , A Service where you
          can get the random space images daily, also you can specify the date
          and can get APOD of the spe cified date too! 👇
        </p>
      </div>
      <div className="card lg:card-side blick main-card card-bordered apod-div">
        <figure>
          <img src={data.hdurl} className="apod" alt="" />
        </figure>
        <div className="card-body-apod">
          <h2 className="card-titlee">{data.title}</h2>
          <p className="card-p-apod">{data.explanation}</p>
        </div>
      </div>
    </>
  );
};

export default APOD;
