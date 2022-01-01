import React, { useState, useEffect } from "react";

var ByDate = () => {
  const [date, setDate] = useState(null);
  const [info, setInfo] = useState(null);
  async function getInfo() {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=m5qSFJLeqz6oshoKMC0S8QChxUfWerz4VdqOiFo8&date=${date}`
    );
    const dataNew = await res.json();
    await setInfo(dataNew);
  }
  function storeDate(event) {
    event.preventDefault();
    setDate(event.target.value);
    console.log(date);
  }

  return (
    <>
      <div class="form-control">
        <label class="label">
          <span class="label-text-bydate">Search by date</span>
        </label>
        <div class="relative ">
          <input
            class="input input-bydate"
            onChange={storeDate}
            type="text"
            placeholder="YYYY-MM-DD"
            class=" w-full pr-16 input input-primary input-bordered "
          />
          <button
            onClick={getInfo}
            class="absolute top-0 right-0 rounded-l-none btn btn-primary"
          >
            go
          </button>
        </div>
      </div>
      {info != null ? (
        <div className="card lg:card-side blick main-card card-bordered result-bydate  ">
          <figure>
            <img src={info.hdurl} className="apod-bydate-write-image apod" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{info.title}</h2>
            <p className="card-body-byDate">{info.explanation}</p>
          </div>
        </div>
      ) : (
        <>
          <div class="h1-bydate-div">
            <h1 class="h1-bydate">
              Write the date and press go to get the apod of that day
            </h1>
          </div>
        </>
      )}
    </>
  );
};
export default ByDate;
